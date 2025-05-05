/**
 * Fix Sacred Geometry Imports Script
 * 
 * This script finds and fixes incorrect import paths for sacred-geometry constants,
 * replacing them with the correct path relative to the file location.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Directories to search
const SOURCE_DIRS = [
  'src/**/*.{ts,tsx,js,jsx}',
  'src/**/**/*.{ts,tsx,js,jsx}',
  'src/**/**/**/*.{ts,tsx,js,jsx}',
];

// Pattern to match incorrect sacred-geometry import paths
const IMPORT_PATTERN = /import\s+\{([^}]+)\}\s+from\s+['"]([\.\/]+)?(constants\/sacred-geometry|\.{1,2}\/\.{1,2}\/\.{1,2}\/\.{1,2}\/\.{1,2}\/\.{1,2}\/\.{1,2}\/\.{1,2}\/\.{1,2}\/\.{1,2}\/constants\/sacred-geometry)['"]/g;

// Count of files processed and fixed
let totalProcessed = 0;
let totalFixed = 0;

// Process each file
function processFile(filePath) {
  try {
    totalProcessed++;
    
    // Read file content
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file might have sacred-geometry imports
    if (!content.includes('sacred-geometry')) {
      return false;
    }
    
    // Get the correct relative path to constants
    const relativePath = path.relative(path.dirname(filePath), path.resolve('src/constants')).replace(/\\/g, '/');
    const importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
    
    // Replace incorrect import paths with the correct one
    let newContent = content.replace(IMPORT_PATTERN, (match, imports) => {
      return `import {${imports}} from '${importPath}/sacred-geometry'`;
    });
    
    // If there were replacements, write the updated content back to the file
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed sacred-geometry imports in ${filePath}`);
      totalFixed++;
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// Find and process files
function processFiles() {
  console.log('Finding files...');
  
  // Get all matched files
  const files = [];
  SOURCE_DIRS.forEach(pattern => {
    const matches = glob.sync(pattern, { nodir: true });
    files.push(...matches);
  });
  
  // Process each file
  console.log(`Processing ${files.length} files...`);
  files.forEach(processFile);
  
  // Report results
  console.log('===== Results =====');
  console.log(`Total files processed: ${totalProcessed}`);
  console.log(`Files fixed: ${totalFixed}`);
}

// Run the script
processFiles(); 