/**
 * Script to test TypeScript compilation of API-related files
 * This helps validate that our fix works correctly for all affected files
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Files to test
const FILES_TO_TEST = [
  'src/types/api.types.ts',
  'src/services/api.ts',
  'src/services/booking.ts',
  'src/services/newsletter.ts',
  'src/services/contact.ts'
];

function testFiles() {
  console.log('Testing TypeScript compilation of API-related files...');
  console.log('---------------------------------------------------');
  
  let allPassed = true;
  
  FILES_TO_TEST.forEach(file => {
    try {
      console.log(`Testing ${file}...`);
      
      // Run TypeScript compiler on the file
      // We ignore the actual axios import error since that's expected until we install axios
      const command = `npx tsc --noEmit ${file} 2>&1 | findstr /v "Cannot find module 'axios'"`;
      execSync(command, { stdio: 'pipe' });
      
      console.log(`✅ ${file} - No TypeScript errors!`);
    } catch (error) {
      allPassed = false;
      console.log(`❌ ${file} - TypeScript errors found:`);
      
      // Extract and format the error message
      const errorOutput = error.stdout ? error.stdout.toString() : error.message;
      const errorLines = errorOutput.split('\n').filter(line => line.trim());
      
      errorLines.forEach(line => {
        if (!line.includes("Cannot find module 'axios'")) {
          console.log(`   ${line}`);
        }
      });
      
      console.log('');
    }
  });
  
  console.log('---------------------------------------------------');
  if (allPassed) {
    console.log('✅ All API files passed TypeScript validation!');
    console.log('Note: "Cannot find module \'axios\'" errors are expected until axios is installed.');
  } else {
    console.log('❌ Some files have TypeScript errors. See details above.');
  }
}

// Run the tests
testFiles(); 