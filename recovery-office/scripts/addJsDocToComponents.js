// @ts-nocheck
/**
 * JSDoc Comment Generator for React Components
 * 
 * This script processes React component files and adds or updates JSDoc comments
 * based on sacred geometry principles.
 */

const fs = require('fs');
const path = require('path');
// Create an inline declaration for glob
// @ts-ignore
const glob = require('glob');
const ts = require('typescript');

// Sacred geometry constants
const PHI = 1.618033988749895;

// Configuration for the script
const config = {
  // Component directories to process
  componentDirs: [
    'recovery-office/src/design-system/components',
    'recovery-office/src/components'
  ],
  // File extensions to process
  fileExtensions: ['.tsx', '.jsx'],
  // Output directory for documentation markdown files
  outputDir: 'recovery-office/docs/components'
};

/**
 * Get all component files to process
 * @returns {string[]} Array of file paths
 */
function getComponentFiles() {
  const files = [];
  
  for (const dir of config.componentDirs) {
    for (const ext of config.fileExtensions) {
      const pattern = path.join(dir, '**', `*${ext}`);
      const foundFiles = glob.sync(pattern);
      files.push(...foundFiles);
    }
  }
  
  // Sort files based on PHI for optimal processing order
  return files.sort((a, b) => {
    const aWeight = a.split('/').length * PHI;
    const bWeight = b.split('/').length * PHI;
    return aWeight - bWeight;
  });
}

/**
 * Find JSDoc comments in file content
 * @param {string} content - File content
 * @returns {Object[]} Array of JSDoc comments with line numbers
 */
function findJSDocComments(content) {
  const lines = content.split('\n');
  const comments = [];
  let inComment = false;
  let startLine = 0;
  let commentContent = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (!inComment && line.startsWith('/**')) {
      inComment = true;
      startLine = i;
      commentContent = lines[i];
    } else if (inComment) {
      commentContent += '\n' + lines[i];
      
      if (line.endsWith('*/')) {
        inComment = false;
        comments.push({
          content: commentContent,
          startLine,
          endLine: i
        });
      }
    }
  }
  
  return comments;
}

/**
 * Find component declarations in file content
 * @param {string} content - File content
 * @returns {Object[]} Array of component declarations with line numbers
 */
function findComponentDeclarations(content) {
  const lines = content.split('\n');
  const components = [];
  
  // Common patterns for React component declarations
  const patterns = [
    /function\s+([A-Z][A-Za-z0-9_]*)\s*\(/,
    /const\s+([A-Z][A-Za-z0-9_]*)\s*=\s*(?:React\.)?(?:memo|forwardRef)?\(?/,
    /const\s+([A-Z][A-Za-z0-9_]*)\s*=\s*\((?:props|{)/,
    /class\s+([A-Z][A-Za-z0-9_]*)\s+extends\s+React/
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    for (const pattern of patterns) {
      const match = line.match(pattern);
      if (match && match[1]) {
        components.push({
          name: match[1],
          lineNumber: i + 1
        });
        break;
      }
    }
  }
  
  return components;
}

/**
 * Find props interface or type for a component
 * @param {string} content - File content
 * @param {string} componentName - Component name
 * @returns {Object[]} Array of prop definitions
 */
function findComponentProps(content, componentName) {
  const props = [];
  const propsPattern = new RegExp(`(?:interface|type)\\s+(${componentName}Props)\\s*(?:extends[^{]+)?\\s*{([^}]+)}`, 's');
  const propsMatch = content.match(propsPattern);
  
  if (propsMatch && propsMatch[2]) {
    const propsContent = propsMatch[2];
    const propLines = propsContent.split('\n');
    
    for (const line of propLines) {
      // Skip comment and empty lines
      if (line.trim().startsWith('//') || line.trim() === '') {
        continue;
      }
      
      // Match prop definitions
      const propMatch = line.trim().match(/(\w+)(\?)?:\s*([^;]+);(?:\s*\/\/\s*(.+))?/);
      if (propMatch) {
        props.push({
          name: propMatch[1],
          required: !propMatch[2],
          type: propMatch[3].trim(),
          description: propMatch[4] ? propMatch[4].trim() : ''
        });
      }
    }
  }
  
  return props;
}

/**
 * Parse a component file to extract information
 * @param {string} filePath - Path to the file
 * @returns {Object} Component information
 */
function parseComponentFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Find components, JSDoc comments, and props
    const components = findComponentDeclarations(fileContent);
    const jsDocComments = findJSDocComments(fileContent);
    
    // Use first component or fallback to filename
    const component = components.length > 0 
      ? components[0] 
      : { 
          name: path.basename(filePath).replace(/\.[^/.]+$/, ''),
          lineNumber: 1
        };
    
    // Find existing JSDoc comment for the component
    const existingJSDoc = jsDocComments.find(comment => 
      comment.endLine + 1 === component.lineNumber - 1 ||
      comment.endLine + 2 === component.lineNumber - 1
    );
    
    // Check if component already has JSDoc
    component.hasJSDoc = !!existingJSDoc;
    component.description = '';
    
    // Extract description from existing JSDoc
    if (existingJSDoc) {
      const lines = existingJSDoc.content.split('\n');
      for (const line of lines) {
        const match = line.trim().match(/^\*\s+([^@].+)/);
        if (match && match[1]) {
          if (component.description) {
            component.description += ' ' + match[1].trim();
          } else {
            component.description = match[1].trim();
          }
        }
      }
    }
    
    // Find component props
    component.props = findComponentProps(fileContent, component.name);
    
    return { fileContent, component };
  } catch (error) {
    console.error(`Error parsing file ${filePath}:`, error.message);
    return { 
      fileContent: '', 
      component: {
        name: path.basename(filePath).replace(/\.[^/.]+$/, ''),
        description: '',
        props: [],
        lineNumber: 1,
        hasJSDoc: false
      }
    };
  }
}

/**
 * Generate JSDoc comment for a component
 * @param {Object} component - Component information
 * @returns {string} Generated JSDoc comment
 */
function generateComponentJSDoc(component) {
  let jsDoc = '/**\n';
  
  // Add description
  if (component.description) {
    // Split description into lines for better formatting
    const lines = component.description.split(/\n/);
    for (const line of lines) {
      jsDoc += ` * ${line}\n`;
    }
  } else {
    jsDoc += ` * Component for displaying ${component.name}.\n`;
  }
  
  // Add sacred geometry comment if not present in description
  if (!component.description.includes('sacred geometry')) {
    jsDoc += ` *\n`;
    jsDoc += ` * Implements sacred geometry principles in its layout and proportions.\n`;
  }
  
  // Add props section if props exist
  if (component.props && component.props.length > 0) {
    jsDoc += ` *\n`;
    
    for (const prop of component.props) {
      if (prop && prop.name && prop.type) {
        const required = prop.required ? '' : ' (optional)';
        jsDoc += ` * @param {${prop.type}} ${prop.name}${required} - `;
        
        if (prop.description) {
          jsDoc += `${prop.description}\n`;
        } else {
          jsDoc += `The ${prop.name} property.\n`;
        }
      }
    }
  }
  
  // Add return section
  jsDoc += ` *\n`;
  jsDoc += ` * @returns {JSX.Element} The rendered component.\n`;
  jsDoc += ` */\n`;
  
  return jsDoc;
}

/**
 * Update a file with new JSDoc comment
 * @param {string} filePath - Path to the file
 * @param {Object} componentInfo - Component information
 * @param {string} jsDoc - Generated JSDoc comment
 */
function updateFileWithJSDoc(filePath, componentInfo, jsDoc) {
  const { fileContent, component } = componentInfo;
  
  // Split the file content into lines
  const lines = fileContent.split('\n');
  
  // If the component already has JSDoc, replace it
  if (component.hasJSDoc) {
    console.log(`Updating existing JSDoc for ${component.name}`);
    
    // Find the JSDoc start and end lines
    let startLine = component.lineNumber - 1;
    while (startLine >= 0 && !lines[startLine].includes('/**')) {
      startLine--;
    }
    
    let endLine = startLine;
    while (endLine < lines.length && !lines[endLine].includes('*/')) {
      endLine++;
    }
    
    // Replace the JSDoc
    const newLines = [
      ...lines.slice(0, startLine),
      ...jsDoc.split('\n'),
      ...lines.slice(endLine + 1)
    ];
    
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  } else {
    console.log(`Adding new JSDoc for ${component.name}`);
    
    // Add the JSDoc before the component declaration
    const newLines = [
      ...lines.slice(0, component.lineNumber - 1),
      jsDoc,
      ...lines.slice(component.lineNumber - 1)
    ];
    
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  }
}

/**
 * Create documentation markdown file
 * @param {string} filePath - Component file path
 * @param {Object} component - Component information
 * @param {string} jsDoc - Generated JSDoc comment
 */
function createDocMarkdown(filePath, component, jsDoc) {
  // Ensure output directory exists
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
  }
  
  const relativePath = path.relative(process.cwd(), filePath);
  const outputPath = path.join(config.outputDir, `${component.name}.md`);
  
  let markdown = `# ${component.name} Component\n\n`;
  
  // Add description
  if (component.description) {
    markdown += `${component.description}\n\n`;
  } else {
    markdown += `Component for displaying ${component.name}.\n\n`;
  }
  
  // Add sacred geometry note
  markdown += `## Sacred Geometry Implementation\n\n`;
  markdown += `This component implements sacred geometry principles in its layout and proportions.\n\n`;
  
  // Add file path
  markdown += `## File Location\n\n`;
  markdown += `\`${relativePath}\`\n\n`;
  
  // Add props table
  if (component.props && component.props.length > 0) {
    markdown += `## Props\n\n`;
    markdown += `| Name | Type | Required | Description |\n`;
    markdown += `| ---- | ---- | -------- | ----------- |\n`;
    
    for (const prop of component.props) {
      if (prop && prop.name && prop.type) {
        const name = prop.name;
        const type = prop.type;
        const required = prop.required ? 'Yes' : 'No';
        const description = prop.description || `The ${name} property.`;
        
        markdown += `| \`${name}\` | \`${type}\` | ${required} | ${description} |\n`;
      }
    }
    
    markdown += `\n`;
  }
  
  // Add JSDoc section
  markdown += `## Generated JSDoc\n\n`;
  markdown += `\`\`\`js\n${jsDoc}\n\`\`\`\n`;
  
  fs.writeFileSync(outputPath, markdown, 'utf8');
  console.log(`Documentation created: ${outputPath}`);
}

/**
 * Process a component file
 * @param {string} filePath - Path to the component file
 * @returns {Promise<void>}
 */
async function processComponentFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    // Parse the component file
    const componentInfo = parseComponentFile(filePath);
    const { component } = componentInfo;
    
    // Generate JSDoc comment
    const jsDoc = generateComponentJSDoc(component);
    
    // Update the file with the new JSDoc
    updateFileWithJSDoc(filePath, componentInfo, jsDoc);
    
    // Create documentation markdown file
    createDocMarkdown(filePath, component, jsDoc);
    
    console.log(`Successfully processed: ${filePath}`);
    
    // Small delay based on golden ratio
    return new Promise(resolve => setTimeout(resolve, Math.round(PHI * 100)));
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('Starting JSDoc generation...');
    
    // Get all component files
    const files = getComponentFiles();
    console.log(`Found ${files.length} component files.`);
    
    // Process each file
    for (const file of files) {
      await processComponentFile(file);
    }
    
    console.log('JSDoc generation complete!');
  } catch (error) {
    console.error(`Error:`, error.message);
    process.exit(1);
  }
}

// Run the script
main(); 