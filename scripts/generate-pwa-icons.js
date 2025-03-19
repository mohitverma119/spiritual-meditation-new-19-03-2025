#!/usr/bin/env node

/**
 * This script generates PWA icons in various sizes from a base SVG file.
 * It assumes that you have already created the base SVG file in public/icons/icon-base.svg.
 *
 * Usage: node scripts/generate-pwa-icons.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Sizes for PWA icons
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const baseSvgPath = path.join(process.cwd(), 'public/icons/icon-base.svg');
const outputDir = path.join(process.cwd(), 'public/icons');

// Check if base SVG exists
if (!fs.existsSync(baseSvgPath)) {
  console.error('Base SVG file not found at:', baseSvgPath);
  process.exit(1);
}

// Make sure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate icons for each size
console.log('Generating PWA icons...');
for (const size of sizes) {
  const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);

  // Use ImageMagick to convert SVG to PNG if available
  try {
    execSync(`convert -background none -size ${size}x${size} ${baseSvgPath} ${outputPath}`);
    console.log(`Created: ${outputPath}`);
  } catch (error) {
    console.log(`Failed to create ${size}x${size} icon. Do you have ImageMagick installed?`);
    console.log('You can manually create icons from the SVG file using an online tool or graphics software.');
  }
}

// Create a simple fallback
const fallbackSize = 512;
try {
  // Copy the SVG directly as an alternative
  fs.copyFileSync(baseSvgPath, path.join(outputDir, 'icon.svg'));
  console.log('Created: icon.svg (fallback)');
} catch (error) {
  console.error('Failed to copy SVG as fallback:', error);
}

console.log('Done generating PWA icons!');
console.log('If some icons were not generated because ImageMagick is not available,');
console.log('please manually create the missing icons or use an online conversion tool.');
