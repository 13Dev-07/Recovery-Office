/**
 * Quality Checks Runner
 * 
 * This script runs all the quality check scripts in sequence and generates
 * a combined report, following sacred geometry principles for timing and formatting.
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

// Quality check scripts
const qualityCheckScripts = [
  {
    name: 'TypeScript Error Check',
    script: 'scripts/tsCheck.js',
    description: 'Checks for TypeScript compiler errors',
    reportFile: 'typescript-error-report.html'
  },
  {
    name: 'Any Type Finder',
    script: 'scripts/findAnyType.js',
    description: 'Finds instances of the "any" type',
    reportFile: 'any-type-report.html'
  },
  {
    name: 'Import Path Checker',
    script: 'scripts/checkImportPaths.js',
    description: 'Checks for import path consistency and circular dependencies',
    reportFile: 'import-path-report.html'
  }
];

/**
 * Run a script as a child process
 * @param {string} script - Path to the script to run
 * @returns {Promise<string>} The output from the script
 */
function runScript(script) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.resolve(process.cwd(), script);
    console.log(`${colors.cyan}${colors.bold}Running script: ${script}${colors.reset}`);
    
    const scriptProcess = exec(`node "${scriptPath}"`, { maxBuffer: 1024 * 1024 * 10 });
    
    let stdout = '';
    let stderr = '';
    
    scriptProcess.stdout.on('data', (data) => {
      // Print output in real-time
      process.stdout.write(data);
      stdout += data;
    });
    
    scriptProcess.stderr.on('data', (data) => {
      // Print errors in real-time
      process.stderr.write(data);
      stderr += data;
    });
    
    scriptProcess.on('close', (code) => {
      if (code === 0 || code === null) {
        resolve(stdout);
      } else {
        console.error(`${colors.red}Script exited with code ${code}${colors.reset}`);
        resolve(stderr || stdout);
      }
    });
    
    scriptProcess.on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Generate a combined HTML report
 * @param {Object[]} results - Results from the quality check scripts
 * @returns {string} Path to the generated HTML file
 */
function generateCombinedReport(results) {
  const outputFile = 'quality-check-report.html';
  
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quality Check Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: ${PHI}rem;
    }
    
    h1, h2, h3 {
      color: #2a4073;
    }
    
    h1 {
      border-bottom: 2px solid #4a6eb3;
      padding-bottom: ${0.5 * PHI_INVERSE}rem;
      text-align: center;
    }
    
    .summary {
      background-color: #f5f7fa;
      padding: ${PHI_INVERSE}rem;
      border-radius: 5px;
      margin-bottom: ${PHI}rem;
      border-left: 5px solid #4a6eb3;
    }
    
    .section {
      margin-bottom: ${PHI * 2}rem;
      border: 1px solid #eee;
      border-radius: 5px;
      overflow: hidden;
    }
    
    .section-header {
      padding: ${PHI_INVERSE}rem;
      background-color: #edf2f7;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .section-title {
      margin: 0;
      font-size: 1.2rem;
      color: #2a4073;
    }
    
    .section-content {
      padding: ${PHI_INVERSE}rem;
    }
    
    .status {
      font-weight: bold;
      border-radius: 3px;
      padding: 4px 8px;
    }
    
    .status-success {
      background-color: #d1fae5;
      color: #065f46;
    }
    
    .status-warning {
      background-color: #fef3c7;
      color: #92400e;
    }
    
    .status-error {
      background-color: #fee2e2;
      color: #b91c1c;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: ${PHI}rem;
    }
    
    th, td {
      padding: ${0.5 * PHI_INVERSE}rem;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    th {
      background-color: #f5f7fa;
      font-weight: bold;
    }
    
    tr:hover {
      background-color: #f9fafb;
    }
    
    .report-link {
      text-decoration: none;
      color: #4a6eb3;
      font-weight: bold;
      display: inline-block;
      margin-top: ${0.5 * PHI_INVERSE}rem;
    }
    
    .report-link:hover {
      text-decoration: underline;
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
    
    .score-chart {
      width: 100%;
      height: 300px;
      margin-bottom: ${PHI}rem;
    }
    
    .footer {
      text-align: center;
      margin-top: ${PHI * 2}rem;
      padding-top: ${PHI}rem;
      border-top: 1px solid #eee;
      color: #718096;
      font-size: 0.9rem;
    }
    
    .sacred-logo {
      text-align: center;
      margin-bottom: ${PHI}rem;
      color: #4a6eb3;
      font-size: 2rem;
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div class="sacred-logo">🔷</div>
  <h1>Quality Check Report</h1>
  
  <div class="summary">
    <p>
      <strong>Report generated:</strong> ${new Date().toLocaleString()}
    </p>
    <p>
      <strong>Quality checks run:</strong> ${results.length}
    </p>
  </div>
  
  <div class="progress-bar">
    <div class="progress-fill" style="width: 0%"></div>
  </div>
  
  <div class="score-chart">
    <canvas id="scoreChart"></canvas>
  </div>
  
  <div class="quality-checks">`;
  
  // Add sections for each quality check
  for (const result of results) {
    const reportLink = result.reportFile ? 
      `<a href="${result.reportFile}" class="report-link" target="_blank">View Full Report</a>` : 
      '';
    
    html += `
    <div class="section">
      <div class="section-header">
        <h3 class="section-title">${result.name}</h3>
        <span class="status ${result.status === 'success' ? 'status-success' : result.status === 'warning' ? 'status-warning' : 'status-error'}">
          ${result.status === 'success' ? 'No issues' : result.status === 'warning' ? 'Warnings' : 'Errors'}
        </span>
      </div>
      <div class="section-content">
        <p>${result.description}</p>
        ${result.summary}
        ${reportLink}
      </div>
    </div>`;
  }
  
  html += `
  </div>
  
  <div class="footer">
    <p>Generated using sacred geometry principles - PHI (${PHI})</p>
  </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Create score chart
      const scoreCtx = document.getElementById('scoreChart').getContext('2d');
      new Chart(scoreCtx, {
        type: 'bar',
        data: {
          labels: ${JSON.stringify(results.map(r => r.name))},
          datasets: [{
            label: 'Quality Score',
            data: ${JSON.stringify(results.map(r => r.score))},
            backgroundColor: [
              '#4a6eb3',
              '#86b378',
              '#e6b422'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: 'Score (%)'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Quality Checks'
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Quality Check Scores'
            }
          }
        }
      });
      
      // Animate progress bar
      const progressFill = document.querySelector('.progress-fill');
      progressFill.style.width = '100%';
      progressFill.style.transition = 'width ${PHI * 1.5}s ease-out';
    });
  </script>
</body>
</html>`;
  
  fs.writeFileSync(outputFile, html, 'utf8');
  return outputFile;
}

/**
 * Process the results of a script
 * @param {string} name - Script name
 * @param {string} output - Script output
 * @param {string} reportFile - Path to the report file
 * @returns {Object} Processed results
 */
function processScriptResults(name, description, output, reportFile) {
  let status = 'success';
  let score = 100;
  let summary = '<p>No issues found.</p>';
  
  // Check if the file exists
  if (reportFile && fs.existsSync(reportFile)) {
    // Simple analysis based on output and report file
    if (output.includes('error') || output.includes('Error')) {
      status = 'error';
      score = Math.max(0, 100 - (output.match(/error/gi) || []).length * 5);
    } else if (output.includes('warning') || output.includes('Warning')) {
      status = 'warning';
      score = Math.max(50, 100 - (output.match(/warning/gi) || []).length * 3);
    }
    
    // Extract some statistics from the output for summary
    let summaryLines = [];
    
    if (name === 'TypeScript Error Check') {
      const errorsMatch = output.match(/Total errors: (\d+)/);
      const filesMatch = output.match(/Files with errors: (\d+)/);
      
      if (errorsMatch && filesMatch) {
        const errors = parseInt(errorsMatch[1], 10);
        const files = parseInt(filesMatch[1], 10);
        
        if (errors > 0) {
          status = 'error';
          score = Math.max(0, 100 - errors * 2);
          summaryLines.push(`<p>Found ${errors} TypeScript errors in ${files} files.</p>`);
        } else {
          summaryLines.push('<p>No TypeScript errors found.</p>');
        }
      }
    } else if (name === 'Any Type Finder') {
      const anyMatch = output.match(/Found (\d+) instances of 'any' type/);
      
      if (anyMatch) {
        const anyCount = parseInt(anyMatch[1], 10);
        
        if (anyCount > 0) {
          status = 'warning';
          score = Math.max(20, 100 - anyCount * 3);
          summaryLines.push(`<p>Found ${anyCount} instances of 'any' type in the codebase.</p>`);
        } else {
          summaryLines.push('<p>No instances of \'any\' type found in the codebase.</p>');
        }
      }
    } else if (name === 'Import Path Checker') {
      const inconsistentMatch = output.match(/Found (\d+) modules with inconsistent import styles/);
      const circularMatch = output.match(/Found (\d+) circular dependencies/);
      
      if (inconsistentMatch) {
        const inconsistentCount = parseInt(inconsistentMatch[1], 10);
        
        if (inconsistentCount > 0) {
          status = status === 'error' ? 'error' : 'warning';
          score -= inconsistentCount * 2;
          summaryLines.push(`<p>Found ${inconsistentCount} modules with inconsistent import styles.</p>`);
        } else {
          summaryLines.push('<p>No inconsistent import styles found.</p>');
        }
      }
      
      if (circularMatch) {
        const circularCount = parseInt(circularMatch[1], 10);
        
        if (circularCount > 0) {
          status = 'error';
          score -= circularCount * 5;
          summaryLines.push(`<p>Found ${circularCount} circular dependencies.</p>`);
        } else {
          summaryLines.push('<p>No circular dependencies found.</p>');
        }
      }
    }
    
    if (summaryLines.length > 0) {
      summary = summaryLines.join('');
    }
  }
  
  // Ensure score is within 0-100 range
  score = Math.max(0, Math.min(100, score));
  
  return {
    name,
    description,
    status,
    score,
    summary,
    reportFile
  };
}

/**
 * Main function
 */
async function main() {
  try {
    console.log(`${colors.cyan}${colors.bold}Running Quality Checks${colors.reset}`);
    
    const startTime = Date.now();
    const results = [];
    
    // Run each script
    for (const scriptInfo of qualityCheckScripts) {
      try {
        // Add delay based on golden ratio between scripts
        if (results.length > 0) {
          await new Promise(resolve => setTimeout(resolve, Math.round(PHI * 500)));
        }
        
        const output = await runScript(scriptInfo.script);
        
        // Process the results
        const processedResults = processScriptResults(
          scriptInfo.name,
          scriptInfo.description,
          output,
          scriptInfo.reportFile
        );
        
        results.push(processedResults);
        
      } catch (error) {
        console.error(`${colors.red}Error running ${scriptInfo.name}:${colors.reset}`, error);
        
        // Add error result
        results.push({
          name: scriptInfo.name,
          description: scriptInfo.description,
          status: 'error',
          score: 0,
          summary: `<p>Error running script: ${error.message}</p>`,
          reportFile: null
        });
      }
    }
    
    // Generate combined report
    const reportPath = generateCombinedReport(results);
    console.log(`\n${colors.green}${colors.bold}Combined report generated: ${colors.reset}${reportPath}`);
    
    // Calculate and display overall quality score
    const overallScore = Math.round(
      results.reduce((sum, result) => sum + result.score, 0) / results.length
    );
    
    let scoreColor = colors.green;
    if (overallScore < 70) scoreColor = colors.red;
    else if (overallScore < 90) scoreColor = colors.yellow;
    
    console.log(`\n${colors.bold}Overall Quality Score: ${scoreColor}${overallScore}%${colors.reset}`);
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log(`${colors.cyan}${colors.bold}All quality checks completed in ${duration}s${colors.reset}`);
    
  } catch (error) {
    console.error(`${colors.red}${colors.bold}Error:${colors.reset}`, error);
    process.exit(1);
  }
}

// Run the script
main(); 