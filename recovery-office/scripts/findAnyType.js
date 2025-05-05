/**
 * Find and Report 'any' Types Script
 * 
 * This script identifies all instances of 'any' type in the TypeScript codebase
 * and suggests proper type replacements based on context analysis.
 * It follows sacred geometry principles in its output formatting.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const ts = require('typescript');

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
  bold: '\x1b[1m'
};

// Configuration
const config = {
  sourceDir: './src',
  filePatterns: ['**/*.ts', '**/*.tsx'],
  ignorePatterns: ['**/*.d.ts', '**/node_modules/**'],
  outputFile: 'any-type-report.html'
};

// Type suggestion patterns
const typeSuggestions = [
  {
    pattern: /props\s*:\s*any/,
    suggestion: 'Use specific props interface, e.g., `React.ComponentProps<typeof Component>`'
  },
  {
    pattern: /state\s*:\s*any/,
    suggestion: 'Create a State interface with specific properties'
  },
  {
    pattern: /event\s*:\s*any/,
    suggestion: 'Use proper event types like `React.MouseEvent<HTMLElement>` or `React.ChangeEvent<HTMLInputElement>`'
  },
  {
    pattern: /data\s*:\s*any/,
    suggestion: 'Create a specific interface describing the data structure'
  },
  {
    pattern: /response\s*:\s*any/,
    suggestion: 'Define an interface matching the API response structure'
  },
  {
    pattern: /error\s*:\s*any/,
    suggestion: 'Use `Error | unknown` or create a custom error type'
  },
  {
    pattern: /as\s+any/,
    suggestion: 'Use type assertion with a specific type or implement a type guard function'
  },
  {
    pattern: /<any>/,
    suggestion: 'Use a specific type parameter or `unknown` if truly unknown'
  }
];

/**
 * Get all TypeScript files
 * @returns {string[]} List of file paths
 */
function getTypeScriptFiles() {
  let files = [];
  
  for (const pattern of config.filePatterns) {
    const matches = glob.sync(path.join(config.sourceDir, pattern), {
      ignore: config.ignorePatterns
    });
    files = [...files, ...matches];
  }
  
  return files;
}

/**
 * Find instances of 'any' type in a file
 * @param {string} filePath - Path to the file
 * @returns {Object[]} List of 'any' type instances
 */
function findAnyTypes(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  );
  
  const instances = [];
  
  function visit(node) {
    // Check for 'any' type annotations
    if (
      (ts.isTypeReferenceNode(node) && node.typeName.getText(sourceFile) === 'any') ||
      (ts.isKeywordTypeNode(node) && node.kind === ts.SyntaxKind.AnyKeyword)
    ) {
      const start = node.pos;
      const end = node.end;
      const lineAndChar = sourceFile.getLineAndCharacterOfPosition(start);
      
      // Get context (the line containing 'any')
      const lines = fileContent.split('\n');
      const line = lines[lineAndChar.line];
      
      // Determine a suggested replacement
      let suggestion = 'Replace with a more specific type';
      
      for (const pattern of typeSuggestions) {
        if (pattern.pattern.test(line)) {
          suggestion = pattern.suggestion;
          break;
        }
      }
      
      instances.push({
        file: filePath,
        line: lineAndChar.line + 1,
        column: lineAndChar.character + 1,
        context: line.trim(),
        suggestion
      });
    }
    
    // Check for type assertions to 'any'
    if (
      ts.isAsExpression(node) &&
      node.type &&
      ((ts.isTypeReferenceNode(node.type) && node.type.typeName.getText(sourceFile) === 'any') ||
       (ts.isKeywordTypeNode(node.type) && node.type.kind === ts.SyntaxKind.AnyKeyword))
    ) {
      const start = node.pos;
      const lineAndChar = sourceFile.getLineAndCharacterOfPosition(start);
      
      // Get context
      const lines = fileContent.split('\n');
      const line = lines[lineAndChar.line];
      
      instances.push({
        file: filePath,
        line: lineAndChar.line + 1,
        column: lineAndChar.character + 1,
        context: line.trim(),
        suggestion: 'Use a specific type instead of casting to any'
      });
    }
    
    ts.forEachChild(node, visit);
  }
  
  visit(sourceFile);
  
  return instances;
}

/**
 * Generate console report
 * @param {Object[]} allInstances - List of all 'any' type instances
 * @returns {string} Formatted report
 */
function generateConsoleReport(allInstances) {
  if (allInstances.length === 0) {
    return `${colors.green}${colors.bold}No 'any' types found in the codebase! 🎉${colors.reset}`;
  }
  
  let report = `${colors.bold}Found ${allInstances.length} instances of 'any' type:${colors.reset}\n\n`;
  
  // Group by file
  const groupedByFile = {};
  
  for (const instance of allInstances) {
    if (!groupedByFile[instance.file]) {
      groupedByFile[instance.file] = [];
    }
    
    groupedByFile[instance.file].push(instance);
  }
  
  // Sort files by instance count (descending)
  const sortedFiles = Object.keys(groupedByFile).sort((a, b) => {
    return groupedByFile[b].length - groupedByFile[a].length;
  });
  
  for (const file of sortedFiles) {
    const instances = groupedByFile[file];
    const relativeFilePath = path.relative(process.cwd(), file);
    
    report += `${colors.bold}${colors.yellow}File:${colors.reset} ${relativeFilePath} ${colors.red}(${instances.length} instances)${colors.reset}\n`;
    
    for (const instance of instances) {
      report += `  ${colors.bold}Line ${instance.line}:${colors.reset} ${instance.context}\n`;
      report += `    ${colors.green}Suggestion:${colors.reset} ${instance.suggestion}\n\n`;
    }
  }
  
  return report;
}

/**
 * Generate HTML report
 * @param {Object[]} allInstances - List of all 'any' type instances
 * @returns {string} Path to the generated HTML file
 */
function generateHtmlReport(allInstances) {
  if (allInstances.length === 0) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Type 'any' Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: ${PHI}rem;
    }
    h1 {
      color: #2a4073;
      text-align: center;
    }
    .success {
      background-color: #e6f4ea;
      color: #137333;
      padding: ${PHI_INVERSE}rem;
      text-align: center;
      border-radius: 4px;
      margin-top: ${PHI}rem;
    }
  </style>
</head>
<body>
  <h1>Type 'any' Report</h1>
  <div class="success">
    <h2>No 'any' types found! 🎉</h2>
    <p>Your codebase is free of 'any' types.</p>
  </div>
</body>
</html>`;
    
    fs.writeFileSync(config.outputFile, html, 'utf8');
    return config.outputFile;
  }
  
  // Group by file
  const groupedByFile = {};
  
  for (const instance of allInstances) {
    if (!groupedByFile[instance.file]) {
      groupedByFile[instance.file] = [];
    }
    
    groupedByFile[instance.file].push(instance);
  }
  
  // Sort files by instance count (descending)
  const sortedFiles = Object.keys(groupedByFile).sort((a, b) => {
    return groupedByFile[b].length - groupedByFile[a].length;
  });
  
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Type 'any' Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: ${PHI}rem;
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
    
    .instance-count {
      color: #e53e3e;
    }
    
    .instance-list {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    
    .instance-item {
      padding: ${PHI_INVERSE}rem;
      border-bottom: 1px solid #eee;
    }
    
    .instance-item:last-child {
      border-bottom: none;
    }
    
    .instance-location {
      font-family: monospace;
      color: #718096;
    }
    
    .instance-context {
      margin: ${0.3 * PHI_INVERSE}rem 0;
      padding: ${0.5 * PHI_INVERSE}rem;
      background-color: #f7fafc;
      border-radius: 3px;
      font-family: monospace;
      white-space: pre-wrap;
      overflow-x: auto;
    }
    
    .instance-suggestion {
      margin-top: ${0.3 * PHI_INVERSE}rem;
      color: #38a169;
      font-style: italic;
    }
    
    .highlight {
      background-color: #fed7d7;
      padding: 1px 3px;
      border-radius: 2px;
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
  <h1>Type 'any' Report</h1>
  
  <div class="summary">
    <p><strong>Total 'any' instances:</strong> ${allInstances.length}</p>
    <p><strong>Files affected:</strong> ${sortedFiles.length}</p>
  </div>
  
  <div class="progress-bar">
    <div class="progress-fill" style="width: 0%"></div>
  </div>
  
  <div id="files">`;
  
  for (const file of sortedFiles) {
    const instances = groupedByFile[file];
    const relativeFilePath = path.relative(process.cwd(), file);
    
    html += `
    <div class="file">
      <div class="file-header">
        <span class="file-path">${relativeFilePath}</span>
        <span class="instance-count">${instances.length} instances</span>
      </div>
      <ul class="instance-list">`;
    
    for (const instance of instances) {
      // Highlight 'any' in the context
      const highlightedContext = instance.context.replace(
        /\bany\b/g,
        '<span class="highlight">any</span>'
      );
      
      html += `
        <li class="instance-item">
          <div class="instance-location">Line ${instance.line}, Column ${instance.column}</div>
          <div class="instance-context">${highlightedContext}</div>
          <div class="instance-suggestion">Suggestion: ${instance.suggestion}</div>
        </li>`;
    }
    
    html += `
      </ul>
    </div>`;
  }
  
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
  
  fs.writeFileSync(config.outputFile, html, 'utf8');
  return config.outputFile;
}

/**
 * Main function
 */
async function main() {
  try {
    console.log(`${colors.cyan}${colors.bold}Searching for 'any' types...${colors.reset}`);
    
    // Get all TypeScript files
    const files = getTypeScriptFiles();
    console.log(`Found ${files.length} TypeScript files to analyze.`);
    
    // Find instances of 'any' type in each file
    let allInstances = [];
    
    for (const file of files) {
      try {
        const instances = findAnyTypes(file);
        allInstances = [...allInstances, ...instances];
        
        // Show progress
        if (instances.length > 0) {
          console.log(`${colors.yellow}Found ${instances.length} 'any' types in ${file}${colors.reset}`);
        }
      } catch (error) {
        console.error(`${colors.red}Error analyzing ${file}:${colors.reset}`, error.message);
      }
    }
    
    // Generate and show console report
    const report = generateConsoleReport(allInstances);
    console.log('\n' + report);
    
    // Generate HTML report
    const htmlReportPath = generateHtmlReport(allInstances);
    console.log(`${colors.cyan}${colors.bold}HTML report generated: ${colors.reset}${htmlReportPath}`);
    
  } catch (error) {
    console.error(`${colors.red}${colors.bold}Error:${colors.reset}`, error);
    process.exit(1);
  }
}

// Run the script
main(); 