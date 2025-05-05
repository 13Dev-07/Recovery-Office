/**
 * Simple script to verify the API types after our fix
 * This just checks for errors in the api.types.ts file
 */

const { execSync } = require('child_process');

console.log('Checking API types for errors...');

try {
  // Create a temporary file that imports and uses our API types
  const fs = require('fs');
  const tempFile = 'scripts/temp-api-test.ts';
  
  const testContent = `
    // Test file to verify ApiErrorCode and HttpStatusCode enums
    import { ApiErrorCode, HttpStatusCode } from '../src/types/api.types';
    
    // Test HttpStatusCode enum
    const httpCodes = [
      HttpStatusCode.OK,
      HttpStatusCode.BAD_REQUEST,
      HttpStatusCode.TOO_MANY_REQUESTS,
      HttpStatusCode.GATEWAY_TIMEOUT
    ];
    
    // Test ApiErrorCode enum
    const errorCodes = [
      ApiErrorCode.VALIDATION_ERROR,
      ApiErrorCode.NETWORK_ERROR,
      ApiErrorCode.CLIENT_ERROR,
      ApiErrorCode.UNEXPECTED_ERROR
    ];
    
    // This should compile without errors
    console.log('API types are valid!');
  `;
  
  fs.writeFileSync(tempFile, testContent);
  
  // Run TypeScript compiler with --noEmit flag to check types
  const result = execSync(`npx tsc ${tempFile} --noEmit --skipLibCheck`, { 
    encoding: 'utf8',
    stdio: 'pipe'
  });
  
  console.log('✅ API types verification passed!');
  console.log('The ApiErrorCode and HttpStatusCode enums have been fixed successfully.');
  
  // Clean up the temp file
  fs.unlinkSync(tempFile);
  
} catch (error) {
  console.error('❌ API types verification failed:');
  console.error(error.stdout ? error.stdout.toString() : error.message);
} 