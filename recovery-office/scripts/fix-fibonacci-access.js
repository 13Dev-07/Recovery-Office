/**
 * Fix Fibonacci Access Script
 * 
 * This script finds and fixes instances of direct FIBONACCI array access
 * in the codebase, replacing them with getFibonacciByIndex calls.
 * This ensures we're accessing the FIBONACCI object correctly, as it uses
 * numerical keys, not array indices.
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

// Pattern to match FIBONACCI[number] access
const FIBONACCI_PATTERN = /FIBONACCI\[(\d+)\]/g;

// Count of files processed and fixed
let totalProcessed = 0;
let totalFixed = 0;

// Process each file
function processFile(filePath) {
  try {
    totalProcessed++;
    
    // Read file content
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file uses FIBONACCI
    if (!content.includes('FIBONACCI[')) {
      return false;
    }
    
    // Replace direct FIBONACCI access with getFibonacciByIndex calls
    let newContent = content.replace(FIBONACCI_PATTERN, (match, index) => {
      return `getFibonacciByIndex(${index})`;
    });
    
    // If there were replacements, we need to ensure getFibonacciByIndex is imported
    if (newContent !== content) {
      // Check if we need to add the import
      if (!newContent.includes('getFibonacciByIndex')) {
        // Add import based on the file path
        const relativePath = path.relative(path.dirname(filePath), path.resolve('src/utils')).replace(/\\/g, '/');
        const importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
        
        // Add the import statement
        newContent = newContent.replace(
          /import.*?from.*?[\'\"];/,
          (match) => `${match}\nimport { getFibonacciByIndex } from '${importPath}/sacredGeometry';`
        );
      }
      
      // Write the updated content back to the file
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed FIBONACCI access in ${filePath}`);
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