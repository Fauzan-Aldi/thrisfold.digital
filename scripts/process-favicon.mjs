import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, '../public/logo.png');
const output = path.join(__dirname, '../public/favicon.png');

const CANVAS = 512;
const LOGO_SIZE = 360;

const resized = await sharp(input)
  .resize(LOGO_SIZE, LOGO_SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const left = Math.round((CANVAS - LOGO_SIZE) / 2);
const top = Math.round((CANVAS - LOGO_SIZE) / 2);

// White rounded squircle background for dark/light browser tab contrast
const svgBackground = Buffer.from(
  `<svg width="${CANVAS}" height="${CANVAS}" viewBox="0 0 ${CANVAS} ${CANVAS}">
    <rect width="${CANVAS}" height="${CANVAS}" rx="112" fill="#ffffff"/>
  </svg>`
);

await sharp(svgBackground)
  .composite([{ input: resized, left, top }])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Generated favicon.png (${CANVAS}x${CANVAS}) with white rounded squircle background.`);
