import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, '../public/favicon.png');
const output = path.join(__dirname, '../public/favicon.png');

const CANVAS = 512;

// Get original image metadata
const meta = await sharp(input).metadata();
console.log(`Original: ${meta.width}x${meta.height}`);

// Scale logo to 90% of canvas width (bigger)
const logoSize = Math.round(CANVAS * 0.90);

// Resize logo
const resized = await sharp(input)
  .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

// Position: center horizontally, push down ~15% from top
const left = Math.round((CANVAS - logoSize) / 2);
const top = Math.round(CANVAS * 0.10); // 10% from top = shifted down

await sharp({
  create: {
    width: CANVAS,
    height: CANVAS,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  }
})
  .composite([{ input: resized, left, top }])
  .png()
  .toFile(output);

console.log(`Done: favicon.png — logo ${logoSize}px, positioned left:${left} top:${top}`);
