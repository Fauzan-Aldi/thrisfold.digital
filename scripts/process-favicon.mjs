import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, '../public/logo.png');
const output = path.join(__dirname, '../public/favicon.png');

const CANVAS = 512;

// Generates transparent favicon (no background)
await sharp(input)
  .resize(CANVAS, CANVAS, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Generated transparent favicon.png (${CANVAS}x${CANVAS}) without background.`);
