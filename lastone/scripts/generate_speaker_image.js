import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate high quality detailed SVG matching the uploaded CEO photo
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f5f7fa"/>
    </linearGradient>
    
    <linearGradient id="skinBase" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fce8db"/>
      <stop offset="40%" stop-color="#f7d3ba"/>
      <stop offset="80%" stop-color="#f1be9d"/>
      <stop offset="100%" stop-color="#e3a782"/>
    </linearGradient>

    <linearGradient id="shirtBlue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#91b9f5"/>
      <stop offset="50%" stop-color="#6f9ee6"/>
      <stop offset="100%" stop-color="#4d81d6"/>
    </linearGradient>

    <linearGradient id="hairDark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#383e47"/>
      <stop offset="25%" stop-color="#21262d"/>
      <stop offset="70%" stop-color="#15181c"/>
      <stop offset="100%" stop-color="#0a0c0e"/>
    </linearGradient>

    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Solid Studio White Background -->
  <rect width="800" height="1200" fill="url(#bgGrad)"/>

  <!-- Shoulders & Torso -->
  <!-- White Crewneck T-Shirt Collar -->
  <path d="M 270 780 C 270 780, 400 870, 530 780 L 560 1200 L 240 1200 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
  <path d="M 300 780 C 350 820, 450 820, 500 780 L 520 1200 L 280 1200 Z" fill="#f8fafc"/>

  <!-- Light Blue Button-Down Shirt -->
  <path d="M 100 1200 L 180 840 C 210 760, 280 720, 340 720 L 460 720 C 520 720, 590 760, 620 840 L 700 1200 Z" fill="url(#shirtBlue)"/>

  <!-- Left Shirt Collar Flap -->
  <path d="M 320 720 L 390 890 L 260 840 C 280 780, 310 735, 320 720 Z" fill="#abcbfb" stroke="#5a8ddb" stroke-width="3"/>
  <!-- Right Shirt Collar Flap -->
  <path d="M 480 720 L 410 890 L 540 840 C 520 780, 490 735, 480 720 Z" fill="#84aee9" stroke="#4d81d6" stroke-width="3"/>

  <!-- Shirt Placket & Buttons -->
  <path d="M 390 880 L 390 1200 L 410 1200 L 410 880 Z" fill="#588ddb" opacity="0.6"/>
  <circle cx="400" cy="980" r="7" fill="#ffffff" stroke="#84aee9" stroke-width="2"/>
  <circle cx="400" cy="1100" r="7" fill="#ffffff" stroke="#84aee9" stroke-width="2"/>

  <!-- Neck -->
  <path d="M 320 560 L 480 560 L 500 770 L 300 770 Z" fill="#f1be9d"/>
  <path d="M 320 640 C 360 700, 440 700, 480 640 Z" fill="#d99b73" opacity="0.45"/>

  <!-- Ears -->
  <ellipse cx="245" cy="440" rx="30" ry="50" fill="#f7d3ba" stroke="#dfa37a" stroke-width="3"/>
  <path d="M 245 420 Q 255 440 245 460" stroke="#c98a60" stroke-width="2" fill="none"/>

  <ellipse cx="555" cy="440" rx="30" ry="50" fill="#f7d3ba" stroke="#dfa37a" stroke-width="3"/>
  <path d="M 555 420 Q 545 440 555 460" stroke="#c98a60" stroke-width="2" fill="none"/>

  <!-- Head Contour (Korean Male CEO 50s) -->
  <path d="M 260 320 C 260 150, 540 150, 540 320 C 540 480, 500 610, 400 610 C 300 610, 260 480, 260 320 Z" fill="url(#skinBase)"/>

  <!-- Soft Facial Contours / Cheeks / Smiles -->
  <path d="M 290 450 Q 310 510 340 525" stroke="#d99b73" stroke-width="3" fill="none" opacity="0.3" stroke-linecap="round"/>
  <path d="M 510 450 Q 490 510 460 525" stroke="#d99b73" stroke-width="3" fill="none" opacity="0.3" stroke-linecap="round"/>

  <!-- Eyebrows (Natural Salt & Pepper Combed Dark Eyebrows) -->
  <path d="M 290 325 Q 330 305 370 328" stroke="#23282f" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M 430 328 Q 470 305 510 325" stroke="#23282f" stroke-width="9" fill="none" stroke-linecap="round"/>

  <!-- Eyes (Warm Kind Double Eyelid Eyes with Friendly Sparkle) -->
  <path d="M 295 370 Q 330 350 365 370" stroke="#181c20" stroke-width="4" fill="none"/>
  <path d="M 298 360 Q 330 345 362 360" stroke="#a86e49" stroke-width="2" fill="none" opacity="0.75"/>
  <ellipse cx="330" cy="373" rx="18" ry="12" fill="#ffffff"/>
  <circle cx="330" cy="373" r="9" fill="#181c20"/>
  <circle cx="333" cy="369" r="3" fill="#ffffff"/>

  <path d="M 435 370 Q 470 350 505 370" stroke="#181c20" stroke-width="4" fill="none"/>
  <path d="M 438 360 Q 470 345 502 360" stroke="#a86e49" stroke-width="2" fill="none" opacity="0.75"/>
  <ellipse cx="470" cy="373" rx="18" ry="12" fill="#ffffff"/>
  <circle cx="470" cy="373" r="9" fill="#181c20"/>
  <circle cx="473" cy="369" r="3" fill="#ffffff"/>

  <!-- Signature Mole under Left Eye Cheekbone (Viewer Right) -->
  <circle cx="512" cy="412" r="3.5" fill="#4d3221"/>
  <circle cx="518" cy="422" r="2" fill="#4d3221" opacity="0.7"/>

  <!-- Nose Structure -->
  <path d="M 400 350 L 390 450 C 390 465, 410 465, 410 450 Z" fill="#d99b73" opacity="0.45"/>
  <path d="M 382 460 Q 400 475 418 460" stroke="#c28359" stroke-width="4" stroke-linecap="round" fill="none"/>

  <!-- Mouth & Warm Friendly Smile -->
  <path d="M 325 515 Q 400 560 475 515" stroke="#181c20" stroke-width="4" fill="#8f3f35"/>
  <path d="M 345 520 Q 400 542 455 520 Q 400 528 345 520 Z" fill="#ffffff"/>

  <!-- Hair (Neat Executive Dark Hair with Subtle Silver Silver-Gray Touches) -->
  <path d="M 240 330 C 230 160, 310 90, 400 90 C 490 90, 570 160, 560 330 C 540 240, 490 140, 400 140 C 310 140, 260 240, 240 330 Z" fill="url(#hairDark)"/>
  <!-- Silver / Gray Highlights -->
  <path d="M 260 200 Q 320 120 400 135" stroke="#8e99a8" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M 280 180 Q 330 115 390 125" stroke="#b0bac7" stroke-width="2" fill="none" opacity="0.5"/>
</svg>`;

// Write to public folder
fs.writeFileSync(path.join(publicDir, 'speaker.svg'), svgContent, 'utf8');

console.log('Successfully created /public/speaker.svg');
