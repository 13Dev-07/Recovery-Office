/**
 * TypeScript Error Check Script
 * 
 * This script runs the TypeScript compiler in noEmit mode to check for errors
 * and reports them in a structured format. It follows sacred geometry principles
 * for time intervals and display formatting.
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Sacred geometry constants
const PHI = 1.618033988749895;
const PHI_INVERSE = 0.6180339887498949;

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m'
};

// Fibonacci-based delays in milliseconds
const SHORT_DELAY = Math.round(PHI * 10);
const MEDIUM_DELAY = Math.round(PHI * 50);
const LONG_DELAY = Math.round(PHI * 100);

/**
 * Run TypeScript compiler check
 * @returns {Promise<string>} The output from tsc
 */
function runTypeScriptCheck() {
  return new Promise((resolve, reject) => {
    console.log(`${colors.cyan}${colors.bold}Running TypeScript check...${colors.reset}`);
    
    const tscProcess = exec('npx tsc --noEmit', { maxBuffer: 1024 * 1024 * 5 });
    
    let stdout = '';
    let stderr = '';
    
    tscProcess.stdout.on('data', (data) => {
      stdout += data;
    });
    
    tscProcess.stderr.on('data', (data) => {
      stderr += data;
    });
    
    tscProcess.on('close', (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        resolve(stderr || stdout);
      }
    });
    
    tscProcess.on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Parse TypeScript errors from output
 * @param {string} output - The raw output from tsc
 * @returns {Object[]} Array of error objects
 */
function parseErrors(output) {
  const lines = output.split('\n');
  const errors = [];
  let currentError = null;
  
  for (const line of lines) {
    const fileMatch = line.match(/^(.+\.tsx?)\((\d+),(\d+)\):/);
    
    if (fileMatch) {
      if (currentError) {
        errors.push(currentError);
      }
      
      const [, filePath, lineNum, colNum] = fileMatch;
      const errorMessage = line.substring(line.indexOf(':') + 1).trim();
      
      currentError = {
        filePath: filePath.trim(),
        line: parseInt(lineNum, 10),
        column: parseInt(colNum, 10),
        message: errorMessage,
        code: '',
        suggestion: ''
      };
    } else if (currentError && line.trim()) {
      // Add line to the current error's message if it's not empty
      currentError.message += '\n' + line.trim();
    }
  }
  
  if (currentError) {
    errors.push(currentError);
  }
  
  return errors;
}

/**
 * Group errors by file path
 * @param {Object[]} errors - Array of error objects 
 * @returns {Object} Errors grouped by file path
 */
function groupErrorsByFile(errors) {
  const grouped = {};
  
  for (const error of errors) {
    if (!grouped[error.filePath]) {
      grouped[error.filePath] = [];
    }
    
    grouped[error.filePath].push(error);
  }
  
  return grouped;
}

/**
 * Generate a report of TypeScript errors
 * @param {Object} groupedErrors - Errors grouped by file path
 * @returns {string} Formatted report
 */
function generateReport(groupedErrors) {
  let report = `${colors.bold}TypeScript Error Report${colors.reset}\n`;
  report += `${colors.bold}=====================${colors.reset}\n\n`;
  
  const fileCount = Object.keys(groupedErrors).length;
  const totalErrors = Object.values(groupedErrors).reduce((sum, errors) => sum + errors.length, 0);
  
  report += `${colors.bold}Summary:${colors.reset}\n`;
  report += `Files with errors: ${fileCount}\n`;
  report += `Total errors: ${totalErrors}\n\n`;
  
  // Sort files by error count (descending)
  const sortedFiles = Object.keys(groupedErrors).sort((a, b) => {
    return groupedErrors[b].length - groupedErrors[a].length;
  });
  
  for (const filePath of sortedFiles) {
    const errors = groupedErrors[filePath];
    const relativeFilePath = path.relative(process.cwd(), filePath);
    
    report += `${colors.bold}${colors.yellow}File:${colors.reset} ${relativeFilePath} ${colors.red}(${errors.length} errors)${colors.reset}\n`;
    
    errors.forEach((error, index) => {
      report += `  ${colors.bold}${index + 1}.${colors.reset} Line ${error.line}, Col ${error.column}: ${colors.red}${error.message}${colors.reset}\n`;
    });
    
    report += '\n';
  }
  
  return report;
}

/**
 * Generate an HTML report for TypeScript errors
 * @param {Object} groupedErrors - Errors grouped by file path
 */
function generateHtmlReport(groupedErrors) {
  const fileCount = Object.keys(groupedErrors).length;
  const totalErrors = Object.values(groupedErrors).reduce((sum, errors) => sum + errors.length, 0);
  
  // Sort files by error count (descending)
  const sortedFiles = Object.keys(groupedErrors).sort((a, b) => {
    return groupedErrors[b].length - groupedErrors[a].length;
  });
  
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TypeScript Error Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: ${2 * PHI}rem;
    }
    
    h1 {
      color: #2a4073;
      border-bottom: 2px solid #4a6eb3;
      padding-bottom: ${0.5 * PHI_INVERSE}rem;
    }
    
    .summary {
      background-color: #f5f7fa;
      padding: ${PHI_INVERSE}rem;
      border-radius: 5px;
      margin-bottom: ${PHI}rem;
      border-left: 5px solid #4a6eb3;
    }
    
    .file {
      margin-bottom: ${PHI}rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
    }
    
    .file-header {
      background-color: #edf2f7;
      padding: ${PHI_INVERSE}rem;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
    }
    
    .file-path {
      font-weight: bold;
      color: #2a4073;
    }
    
    .error-count {
      color: #e53e3e;
    }
    
    .error-list {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    
    .error-item {
      padding: ${PHI_INVERSE}rem;
      border-bottom: 1px solid #eee;
    }
    
    .error-item:last-child {
      border-bottom: none;
    }
    
    .error-location {
      font-family: monospace;
      color: #718096;
    }
    
    .error-message {
      margin-top: ${0.3 * PHI_INVERSE}rem;
      color: #e53e3e;
    }
    
    .progress-bar {
      height: 5px;
      background-color: #edf2f7;
      margin-bottom: ${PHI}rem;
      border-radius: 2.5px;
      overflow: hidden;
    }
    
    .progress-fill {
      height: 100%;
      background-color: #4a6eb3;
      width: 0%;
    }
  </style>
</head>
<body>
  <h1>TypeScript Error Report</h1>
  
  <div class="summary">
    <p><strong>Files with errors:</strong> ${fileCount}</p>
    <p><strong>Total errors:</strong> ${totalErrors}</p>
  </div>
  
  <div class="progress-bar">
    <div class="progress-fill" style="width: 0%"></div>
  </div>
  
  <div id="files">`;
  
  sortedFiles.forEach((filePath, fileIndex) => {
    const errors = groupedErrors[filePath];
    const relativeFilePath = path.relative(process.cwd(), filePath);
    
    html += `
    <div class="file">
      <div class="file-header">
        <span class="file-path">${relativeFilePath}</span>
        <span class="error-count">${errors.length} errors</span>
      </div>
      <ul class="error-list">`;
    
    errors.forEach((error, errorIndex) => {
      html += `
        <li class="error-item">
          <div class="error-location">Line ${error.line}, Column ${error.column}</div>
          <div class="error-message">${error.message.replace(/\n/g, '<br>')}</div>
        </li>`;
    });
    
    html += `
      </ul>
    </div>`;
  });
  
  html += `
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const progressFill = document.querySelector('.progress-fill');
      progressFill.style.width = '100%';
      progressFill.style.transition = 'width ${PHI * 1.5}s ease-out';
    });
  </script>
</body>
</html>`;
  
  const reportPath = path.join(process.cwd(), 'typescript-error-report.html');
  fs.writeFileSync(reportPath, html);
  
  return reportPath;
}

/**
 * Main function
 */
async function main() {
  try {
    const startTime = Date.now();
    
    // Run TypeScript check
    const output = await runTypeScriptCheck();
    
    if (!output || output.trim() === '') {
      console.log(`\n${colors.green}${colors.bold}No TypeScript errors found! 🎉${colors.reset}\n`);
      return;
    }
    
    // Parse and analyze errors
    const errors = parseErrors(output);
    
    // Artificial delay based on sacred geometry
    await new Promise(resolve => setTimeout(resolve, MEDIUM_DELAY));
    
    // Group errors by file
    const groupedErrors = groupErrorsByFile(errors);
    
    // Generate and display console report
    const report = generateReport(groupedErrors);
    console.log(report);
    
    // Generate HTML report
    const htmlReportPath = generateHtmlReport(groupedErrors);
    console.log(`${colors.cyan}${colors.bold}HTML report generated: ${colors.reset}${htmlReportPath}`);
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log(`${colors.cyan}${colors.bold}Analysis completed in ${duration}s${colors.reset}`);
    
  } catch (error) {
    console.error(`${colors.red}${colors.bold}Error:${colors.reset}`, error);
    process.exit(1);
  }
}

// Run the script
main(); 