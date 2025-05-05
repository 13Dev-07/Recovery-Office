/**
 * Script to generate a TypeScript error report HTML file
 * This helps document and track TypeScript errors in the project
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPORT_FILE = path.join(__dirname, '..', 'typescript-error-report.html');

function generateErrorReport() {
  console.log('Generating TypeScript error report...');
  
  try {
    // Run TypeScript compiler with --noEmit to just check for errors
    const result = execSync('npx tsc --noEmit', { encoding: 'utf8', stdio: 'pipe' });
    console.log('TypeScript compilation successful! No errors found.');
    
    // Create an HTML report showing no errors
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TypeScript Error Report</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 1200px; margin: 0 auto; padding: 20px; }
          header { text-align: center; margin-bottom: 30px; }
          .success { color: green; font-weight: bold; }
          footer { margin-top: 50px; text-align: center; font-size: 0.8em; color: #666; }
        </style>
      </head>
      <body>
        <header>
          <h1>TypeScript Error Report</h1>
          <p>Generated on: ${new Date().toLocaleString()}</p>
        </header>
        <main>
          <div class="success">
            <h2>✅ No TypeScript errors detected!</h2>
            <p>TypeScript compilation completed successfully.</p>
          </div>
        </main>
        <footer>
          <p>Recovery Office TypeScript Error Report</p>
        </footer>
      </body>
      </html>
    `;
    
    fs.writeFileSync(REPORT_FILE, html);
    console.log(`Report saved to: ${REPORT_FILE}`);
    
  } catch (error) {
    // Get the error output
    const errorOutput = error.stdout.toString();
    
    // Parse and format errors
    const errors = parseTypeScriptErrors(errorOutput);
    
    // Generate HTML report
    const html = generateHtmlReport(errors, errorOutput);
    
    // Write report to file
    fs.writeFileSync(REPORT_FILE, html);
    console.log(`Error report saved to: ${REPORT_FILE}`);
  }
}

function parseTypeScriptErrors(errorOutput) {
  const errorLines = errorOutput.split('\n');
  const errors = [];
  
  // Basic regex to extract file, line, and error message
  const errorRegex = /^(.+)\((\d+),(\d+)\):\s+(.+)$/;
  
  for (const line of errorLines) {
    const match = line.match(errorRegex);
    if (match) {
      errors.push({
        file: match[1],
        line: parseInt(match[2], 10),
        column: parseInt(match[3], 10),
        message: match[4]
      });
    }
  }
  
  return errors;
}

function generateHtmlReport(errors, rawOutput) {
  // Count errors by file
  const errorsByFile = {};
  for (const error of errors) {
    if (!errorsByFile[error.file]) {
      errorsByFile[error.file] = 0;
    }
    errorsByFile[error.file]++;
  }
  
  // Format the HTML
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TypeScript Error Report</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 1200px; margin: 0 auto; padding: 20px; }
        header { text-align: center; margin-bottom: 30px; }
        .summary { margin-bottom: 30px; }
        .error-container { margin-bottom: 40px; }
        .error-file { background-color: #f5f5f5; padding: 10px; border-left: 5px solid #e74c3c; margin-bottom: 20px; }
        .error-message { margin-left: 20px; color: #e74c3c; }
        .raw-output { background-color: #f8f8f8; padding: 15px; border-radius: 5px; white-space: pre-wrap; font-family: monospace; max-height: 500px; overflow: auto; }
        footer { margin-top: 50px; text-align: center; font-size: 0.8em; color: #666; }
      </style>
    </head>
    <body>
      <header>
        <h1>TypeScript Error Report</h1>
        <p>Generated on: ${new Date().toLocaleString()}</p>
      </header>
      <main>
        <div class="summary">
          <h2>Error Summary</h2>
          <p>Found ${errors.length} TypeScript errors in ${Object.keys(errorsByFile).length} files</p>
          <ul>
            ${Object.entries(errorsByFile)
              .sort((a, b) => b[1] - a[1]) // Sort by error count (descending)
              .map(([file, count]) => `<li>${file}: ${count} errors</li>`)
              .join('')}
          </ul>
        </div>
        
        <div class="error-container">
          <h2>Detailed Errors</h2>
          ${errors.map(error => `
            <div class="error-file">${error.file}:${error.line}:${error.column}</div>
            <div class="error-message">${error.message}</div>
          `).join('')}
        </div>
        
        <h2>Raw Compiler Output</h2>
        <div class="raw-output">${rawOutput.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
      </main>
      <footer>
        <p>Recovery Office TypeScript Error Report</p>
      </footer>
    </body>
    </html>
  `;
  
  return html;
}

// Run the report generation
generateErrorReport(); 