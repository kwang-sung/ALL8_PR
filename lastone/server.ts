import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "50mb" }));

  // API Endpoint: Upload Speaker Photo (saves directly to server disk)
  app.post("/api/upload-speaker-photo", (req, res) => {
    try {
      const { image } = req.body;
      if (!image || typeof image !== "string") {
        return res.status(400).json({ error: "Invalid image data" });
      }

      // Strip base64 prefix if present
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");

      const publicDir = path.join(process.cwd(), "public");
      const distDir = path.join(process.cwd(), "dist");
      const srcDataDir = path.join(process.cwd(), "src", "data");

      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, "speaker.jpg"), buffer);
      fs.writeFileSync(path.join(publicDir, "speaker.png"), buffer);
      fs.writeFileSync(path.join(publicDir, "라스트원_대표.jpg"), buffer);
      fs.writeFileSync(path.join(publicDir, "라스트원 대표.jpg"), buffer);

      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, "speaker.jpg"), buffer);
        fs.writeFileSync(path.join(distDir, "speaker.png"), buffer);
        fs.writeFileSync(path.join(distDir, "라스트원_대표.jpg"), buffer);
        fs.writeFileSync(path.join(distDir, "라스트원 대표.jpg"), buffer);
      }

      // Also permanently update src/data/speakerImageBase64.ts so that
      // Vite builds and re-publishes keep the uploaded image in JS source code
      if (fs.existsSync(srcDataDir)) {
        const tsContent = `export const SPEAKER_IMAGE_BASE64 = ${JSON.stringify(image)};\n`;
        fs.writeFileSync(path.join(srcDataDir, "speakerImageBase64.ts"), tsContent, "utf8");
      }

      console.log("Successfully saved uploaded speaker photo to server disk and src/data/speakerImageBase64.ts!");
      return res.json({ success: true, timestamp: Date.now() });
    } catch (err: any) {
      console.error("Failed to save speaker photo:", err);
      return res.status(500).json({ error: err.message });
    }
  });

  // API Endpoint: Get latest speaker photo status
  app.get("/api/speaker-photo-info", (req, res) => {
    const filePath = path.join(process.cwd(), "public", "speaker.jpg");
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      return res.json({ exists: true, mtime: stat.mtimeMs });
    }
    return res.json({ exists: false, mtime: 0 });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
