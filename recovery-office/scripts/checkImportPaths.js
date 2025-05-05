/**
 * Import Path Consistency Checker
 * 
 * This script analyzes TypeScript/JavaScript import statements to check for:
 * 1. Consistency in import styles (named vs default imports)
 * 2. Circular dependencies
 * 3. Unused imports
 * 4. Proper path resolution
 * 
 * It follows sacred geometry principles in its reporting and visualization.
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
  filePatterns: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  ignorePatterns: ['**/*.d.ts', '**/node_modules/**', '**/dist/**', '**/build/**'],
  outputFile: 'import-path-report.html',
  categories: {
    animation: '/animation/',
    botanical: '/botanical/',
    components: '/components/',
    designSystem: '/design-system/',
    hooks: '/hooks/',
    pages: '/pages/',
    utils: '/utils/'
  }
};

/**
 * Get all source files
 * @returns {string[]} List of file paths
 */
function getSourceFiles() {
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
 * Parse imports from a file
 * @param {string} filePath - Path to the file
 * @returns {Object} Import information
 */
function parseImports(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Create TypeScript source file
    const sourceFile = ts.createSourceFile(
      filePath,
      fileContent,
      ts.ScriptTarget.Latest,
      true
    );
    
    const imports = [];
    const exports = [];
    
    // Visit all nodes to find imports and exports
    function visit(node) {
      // Check for import declarations
      if (ts.isImportDeclaration(node)) {
        const importPath = node.moduleSpecifier.text;
        const importClause = node.importClause;
        
        // Determine import type (default, named, namespace)
        let importType = 'unknown';
        let importedItems = [];
        
        if (importClause) {
          // Default import
          if (importClause.name) {
            importType = 'default';
            importedItems.push(importClause.name.text);
          }
          
          // Named imports
          if (importClause.namedBindings) {
            if (ts.isNamedImports(importClause.namedBindings)) {
              importType = importClause.name ? 'mixed' : 'named';
              
              for (const element of importClause.namedBindings.elements) {
                importedItems.push(element.name.text);
              }
            }
            // Namespace import (import * as X from 'y')
            else if (ts.isNamespaceImport(importClause.namedBindings)) {
              importType = 'namespace';
              importedItems.push(importClause.namedBindings.name.text);
            }
          }
        } else {
          // Side-effect import (import 'x')
          importType = 'side-effect';
        }
        
        imports.push({
          path: importPath,
          type: importType,
          items: importedItems,
          node: {
            pos: node.pos,
            end: node.end,
            line: sourceFile.getLineAndCharacterOfPosition(node.pos).line + 1
          }
        });
      }
      
      // Check for export declarations
      if (ts.isExportDeclaration(node)) {
        if (node.moduleSpecifier) {
          const exportPath = node.moduleSpecifier.text;
          
          exports.push({
            path: exportPath,
            node: {
              pos: node.pos,
              end: node.end,
              line: sourceFile.getLineAndCharacterOfPosition(node.pos).line + 1
            }
          });
        }
      }
      
      ts.forEachChild(node, visit);
    }
    
    visit(sourceFile);
    
    return {
      filePath,
      imports,
      exports
    };
    
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
    return {
      filePath,
      imports: [],
      exports: [],
      error: error.message
    };
  }
}

/**
 * Build a dependency graph from imports
 * @param {Object[]} filesWithImports - List of files with their imports
 * @returns {Object} Dependency graph
 */
function buildDependencyGraph(filesWithImports) {
  const graph = {};
  
  // Initialize graph nodes
  for (const file of filesWithImports) {
    graph[file.filePath] = {
      dependencies: [],
      dependents: []
    };
  }
  
  // Add dependencies
  for (const file of filesWithImports) {
    for (const imp of file.imports) {
      // Try to resolve the import path
      let resolvedPath = resolveImportPath(file.filePath, imp.path);
      
      if (resolvedPath && graph[resolvedPath]) {
        graph[file.filePath].dependencies.push({
          path: resolvedPath,
          importType: imp.type,
          items: imp.items
        });
        
        graph[resolvedPath].dependents.push({
          path: file.filePath,
          importType: imp.type,
          items: imp.items
        });
      }
    }
  }
  
  return graph;
}

/**
 * Resolve an import path to an absolute path
 * @param {string} fromPath - Source file path
 * @param {string} importPath - Import path
 * @returns {string|null} Resolved path or null if not found
 */
function resolveImportPath(fromPath, importPath) {
  // Handle relative imports
  if (importPath.startsWith('.')) {
    const basePath = path.dirname(fromPath);
    let resolvedPath = path.resolve(basePath, importPath);
    
    // Check if path exists with extensions
    for (const ext of ['.ts', '.tsx', '.js', '.jsx']) {
      if (fs.existsSync(resolvedPath + ext)) {
        return resolvedPath + ext;
      }
    }
    
    // Check if it's a directory with an index file
    for (const ext of ['.ts', '.tsx', '.js', '.jsx']) {
      if (fs.existsSync(path.join(resolvedPath, 'index' + ext))) {
        return path.join(resolvedPath, 'index' + ext);
      }
    }
  }
  
  // For non-relative imports, we would need to check package.json and node_modules
  // For simplicity, we'll skip this for now
  return null;
}

/**
 * Detect circular dependencies in the graph
 * @param {Object} graph - Dependency graph
 * @returns {Object[]} List of circular dependencies
 */
function detectCircularDependencies(graph) {
  const circularDependencies = [];
  const visited = {};
  const recursionStack = {};
  
  function dfs(node, path = []) {
    // Mark the current node as visited and add to recursion stack
    visited[node] = true;
    recursionStack[node] = true;
    
    // Update path
    path.push(node);
    
    // Visit all dependencies
    for (const dep of graph[node].dependencies) {
      const depPath = dep.path;
      
      // If not visited, continue DFS
      if (!visited[depPath]) {
        if (dfs(depPath, [...path])) {
          return true;
        }
      }
      // If already in recursion stack, there's a cycle
      else if (recursionStack[depPath]) {
        // Find the starting point of the cycle
        const cycleStart = path.indexOf(depPath);
        
        if (cycleStart !== -1) {
          const cycle = path.slice(cycleStart).concat(depPath);
          
          // Format cycle paths to be relative to source directory
          const formattedCycle = cycle.map(p => path.relative(config.sourceDir, p));
          
          circularDependencies.push({
            cycle: formattedCycle,
            nodes: cycle
          });
        }
        
        return true;
      }
    }
    
    // Remove from recursion stack
    recursionStack[node] = false;
    return false;
  }
  
  // Run DFS from each node
  for (const node in graph) {
    if (!visited[node]) {
      dfs(node);
    }
  }
  
  return circularDependencies;
}

/**
 * Analyze import consistency
 * @param {Object[]} filesWithImports - List of files with their imports
 * @returns {Object} Consistency analysis
 */
function analyzeImportConsistency(filesWithImports) {
  const analysis = {
    importStyles: {
      default: 0,
      named: 0,
      namespace: 0,
      mixed: 0,
      'side-effect': 0
    },
    moduleCategories: {},
    inconsistentImports: []
  };
  
  // Initialize module categories
  for (const category in config.categories) {
    analysis.moduleCategories[category] = {
      count: 0,
      files: []
    };
  }
  
  // Track how modules are imported
  const moduleImportStyles = {};
  
  for (const file of filesWithImports) {
    for (const imp of file.imports) {
      // Count import styles
      analysis.importStyles[imp.type]++;
      
      // Categorize imports
      for (const category in config.categories) {
        if (imp.path.includes(config.categories[category])) {
          analysis.moduleCategories[category].count++;
          analysis.moduleCategories[category].files.push({
            file: file.filePath,
            import: imp
          });
          break;
        }
      }
      
      // Track import styles for each module
      if (!moduleImportStyles[imp.path]) {
        moduleImportStyles[imp.path] = {};
      }
      
      if (!moduleImportStyles[imp.path][imp.type]) {
        moduleImportStyles[imp.path][imp.type] = [];
      }
      
      moduleImportStyles[imp.path][imp.type].push({
        file: file.filePath,
        items: imp.items
      });
    }
  }
  
  // Find modules imported with inconsistent styles
  for (const modulePath in moduleImportStyles) {
    const styles = Object.keys(moduleImportStyles[modulePath]);
    
    if (styles.length > 1) {
      analysis.inconsistentImports.push({
        module: modulePath,
        styles: moduleImportStyles[modulePath]
      });
    }
  }
  
  return analysis;
}

/**
 * Generate console report
 * @param {Object} analysis - Analysis results
 * @param {Object[]} circularDependencies - Circular dependencies
 * @returns {string} Formatted report
 */
function generateConsoleReport(analysis, circularDependencies) {
  let report = `${colors.bold}Import Path Analysis Report${colors.reset}\n`;
  report += `${colors.bold}==========================${colors.reset}\n\n`;
  
  // Import style statistics
  report += `${colors.bold}Import Styles:${colors.reset}\n`;
  for (const style in analysis.importStyles) {
    report += `  ${style}: ${analysis.importStyles[style]}\n`;
  }
  report += '\n';
  
  // Module categories
  report += `${colors.bold}Module Categories:${colors.reset}\n`;
  for (const category in analysis.moduleCategories) {
    report += `  ${category}: ${analysis.moduleCategories[category].count}\n`;
  }
  report += '\n';
  
  // Inconsistent imports
  report += `${colors.bold}Inconsistent Imports:${colors.reset}\n`;
  if (analysis.inconsistentImports.length === 0) {
    report += `  ${colors.green}No inconsistent imports found!${colors.reset}\n`;
  } else {
    report += `  ${colors.yellow}Found ${analysis.inconsistentImports.length} modules with inconsistent import styles:${colors.reset}\n\n`;
    
    for (const item of analysis.inconsistentImports) {
      report += `  ${colors.yellow}${item.module}${colors.reset}\n`;
      
      for (const style in item.styles) {
        report += `    ${style}: ${item.styles[style].length} occurrences\n`;
        
        for (const occurrence of item.styles[style]) {
          report += `      ${path.relative(process.cwd(), occurrence.file)}\n`;
        }
      }
      
      report += '\n';
    }
  }
  
  // Circular dependencies
  report += `${colors.bold}Circular Dependencies:${colors.reset}\n`;
  if (circularDependencies.length === 0) {
    report += `  ${colors.green}No circular dependencies found!${colors.reset}\n`;
  } else {
    report += `  ${colors.red}Found ${circularDependencies.length} circular dependencies:${colors.reset}\n\n`;
    
    for (let i = 0; i < circularDependencies.length; i++) {
      const cycle = circularDependencies[i];
      
      report += `  ${colors.red}Cycle ${i + 1}:${colors.reset}\n`;
      report += `    ${cycle.cycle.join(`\n    ${colors.red}→${colors.reset} `)}\n\n`;
    }
  }
  
  return report;
}

/**
 * Generate HTML report
 * @param {Object} analysis - Analysis results
 * @param {Object[]} circularDependencies - Circular dependencies
 * @returns {string} Path to the generated HTML file
 */
function generateHtmlReport(analysis, circularDependencies) {
  // Calculate total imports
  const totalImports = Object.values(analysis.importStyles).reduce((sum, count) => sum + count, 0);
  
  // Prepare data for charts
  const importStyleData = Object.entries(analysis.importStyles)
    .map(([style, count]) => ({ label: style, value: count }))
    .filter(item => item.value > 0);
  
  const categoryData = Object.entries(analysis.moduleCategories)
    .map(([category, data]) => ({ label: category, value: data.count }))
    .filter(item => item.value > 0);
  
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Import Path Analysis</title>
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
    }
    
    .chart-container {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-bottom: ${PHI}rem;
    }
    
    .chart {
      width: 45%;
      min-width: 300px;
      margin-bottom: ${PHI}rem;
    }
    
    .inconsistent-import {
      margin-bottom: ${PHI}rem;
      padding: ${PHI_INVERSE}rem;
      border: 1px solid #eee;
      border-radius: 5px;
      background-color: #fffaf0;
    }
    
    .inconsistent-import h3 {
      margin-top: 0;
      color: #d97706;
    }
    
    .cycle {
      margin-bottom: ${PHI}rem;
      padding: ${PHI_INVERSE}rem;
      border: 1px solid #fee2e2;
      border-radius: 5px;
      background-color: #fff5f5;
    }
    
    .cycle h3 {
      margin-top: 0;
      color: #dc2626;
    }
    
    .cycle-path {
      font-family: monospace;
      padding: ${0.5 * PHI_INVERSE}rem;
      background-color: #fef2f2;
      border-radius: 3px;
      white-space: pre;
      overflow-x: auto;
    }
    
    .success {
      color: #059669;
      padding: ${PHI_INVERSE}rem;
      background-color: #ecfdf5;
      border-radius: 5px;
      border: 1px solid #a7f3d0;
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
    
    .path {
      font-family: monospace;
      font-size: 0.9em;
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <h1>Import Path Analysis</h1>
  
  <div class="summary">
    <p><strong>Total imports:</strong> ${totalImports}</p>
    <p><strong>Inconsistent imports:</strong> ${analysis.inconsistentImports.length}</p>
    <p><strong>Circular dependencies:</strong> ${circularDependencies.length}</p>
  </div>
  
  <div class="progress-bar">
    <div class="progress-fill" style="width: 0%"></div>
  </div>
  
  <div class="section">
    <h2>Import Style Distribution</h2>
    <div class="chart-container">
      <div class="chart">
        <canvas id="importStyleChart"></canvas>
      </div>
      <div class="chart">
        <canvas id="categoryChart"></canvas>
      </div>
    </div>
  </div>
  
  <div class="section">
    <h2>Inconsistent Imports</h2>
    ${analysis.inconsistentImports.length === 0 ? 
      '<div class="success"><p>No inconsistent imports found!</p></div>' : 
      analysis.inconsistentImports.map((item, index) => `
        <div class="inconsistent-import">
          <h3>Module: ${item.module}</h3>
          <p>This module is imported using ${Object.keys(item.styles).length} different styles:</p>
          <table>
            <thead>
              <tr>
                <th>Import Style</th>
                <th>Occurrences</th>
                <th>Example File</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(item.styles).map(([style, occurrences]) => `
                <tr>
                  <td>${style}</td>
                  <td>${occurrences.length}</td>
                  <td class="path">${path.relative(process.cwd(), occurrences[0].file)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `).join('')}
  </div>
  
  <div class="section">
    <h2>Circular Dependencies</h2>
    ${circularDependencies.length === 0 ? 
      '<div class="success"><p>No circular dependencies found!</p></div>' : 
      circularDependencies.map((cycle, index) => `
        <div class="cycle">
          <h3>Cycle ${index + 1}</h3>
          <div class="cycle-path">
${cycle.cycle.join(' →\n')}
          </div>
        </div>
      `).join('')}
  </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Import Style Chart
      const importStyleCtx = document.getElementById('importStyleChart').getContext('2d');
      new Chart(importStyleCtx, {
        type: 'pie',
        data: {
          labels: ${JSON.stringify(importStyleData.map(d => d.label))},
          datasets: [{
            data: ${JSON.stringify(importStyleData.map(d => d.value))},
            backgroundColor: [
              '#4a6eb3',
              '#86b378',
              '#e6b422',
              '#c25450',
              '#8a63d2'
            ]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Import Styles'
            }
          }
        }
      });
      
      // Category Chart
      const categoryCtx = document.getElementById('categoryChart').getContext('2d');
      new Chart(categoryCtx, {
        type: 'pie',
        data: {
          labels: ${JSON.stringify(categoryData.map(d => d.label))},
          datasets: [{
            data: ${JSON.stringify(categoryData.map(d => d.value))},
            backgroundColor: [
              '#4a6eb3',
              '#86b378',
              '#e6b422',
              '#c25450',
              '#8a63d2',
              '#5698c4',
              '#e18a7a'
            ]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Module Categories'
            }
          }
        }
      });
      
      // Progress bar animation
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
    console.log(`${colors.cyan}${colors.bold}Analyzing import paths...${colors.reset}`);
    
    // Get all source files
    const files = getSourceFiles();
    console.log(`Found ${files.length} source files to analyze.`);
    
    // Parse imports from each file
    const filesWithImports = [];
    
    for (const file of files) {
      try {
        const fileImports = parseImports(file);
        filesWithImports.push(fileImports);
        
        // Show progress
        if (fileImports.imports.length > 0) {
          console.log(`${colors.blue}Found ${fileImports.imports.length} imports in ${file}${colors.reset}`);
        }
      } catch (error) {
        console.error(`${colors.red}Error parsing ${file}:${colors.reset}`, error.message);
      }
    }
    
    // Build dependency graph
    const graph = buildDependencyGraph(filesWithImports);
    
    // Detect circular dependencies
    const circularDependencies = detectCircularDependencies(graph);
    
    // Analyze import consistency
    const analysis = analyzeImportConsistency(filesWithImports);
    
    // Generate and show console report
    const report = generateConsoleReport(analysis, circularDependencies);
    console.log('\n' + report);
    
    // Generate HTML report
    const htmlReportPath = generateHtmlReport(analysis, circularDependencies);
    console.log(`${colors.cyan}${colors.bold}HTML report generated: ${colors.reset}${htmlReportPath}`);
    
  } catch (error) {
    console.error(`${colors.red}${colors.bold}Error:${colors.reset}`, error);
    process.exit(1);
  }
}

// Run the script
main(); 