import fs from 'fs';
import path from 'path';
import { runAllTests } from './BookingSystemTest';
import { generateTestScenarios, generateResponsiveTestReport } from './ResponsiveLayoutTest';

/**
 * Test Runner for Recovery Office Booking System
 * 
 * This script coordinates and runs all the different tests
 * for the booking system, including validation tests,
 * end-to-end flow tests, and responsive layout tests.
 * 
 * Results are saved to the /tests/results directory.
 */

// Path constants
const TEST_RESULTS_DIR = path.resolve(__dirname, 'results');
const E2E_RESULTS_FILE = path.join(TEST_RESULTS_DIR, 'e2e-results.json');
const RESPONSIVE_SCENARIOS_FILE = path.join(TEST_RESULTS_DIR, 'responsive-scenarios.json');
const RESPONSIVE_REPORT_FILE = path.join(TEST_RESULTS_DIR, 'responsive-report.html');

/**
 * Ensures the test results directory exists
 */
function ensureResultsDir() {
  if (!fs.existsSync(TEST_RESULTS_DIR)) {
    fs.mkdirSync(TEST_RESULTS_DIR, { recursive: true });
  }
}

/**
 * Saves test results to a file
 */
function saveResults(filePath: string, data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Results saved to ${filePath}`);
}

/**
 * Generates and saves responsive test scenarios
 */
function generateAndSaveResponsiveScenarios() {
  const scenarios = generateTestScenarios();
  saveResults(RESPONSIVE_SCENARIOS_FILE, scenarios);
  console.log(`Generated ${scenarios.length} responsive test scenarios`);
  return scenarios;
}

/**
 * Main function to run all tests
 */
async function runTests() {
  console.log('🧪 Starting Recovery Office Booking System Tests');
  console.log('----------------------------------------------');
  
  // Make sure results directory exists
  ensureResultsDir();
  
  // Run validation and end-to-end tests
  try {
    console.log('\n🔍 Running validation and end-to-end tests...');
    const testResults = await runAllTests();
    saveResults(E2E_RESULTS_FILE, { success: testResults, timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('❌ Error running booking system tests:', error);
    saveResults(E2E_RESULTS_FILE, { 
      success: false, 
      error: error.message, 
      timestamp: new Date().toISOString() 
    });
  }
  
  // Generate responsive test scenarios
  console.log('\n📱 Generating responsive test scenarios...');
  const scenarios = generateAndSaveResponsiveScenarios();
  
  // Note: The actual running of responsive tests would be done in a browser environment
  // Here we just generate the scenarios and report template
  
  console.log('\n📊 Generating responsive test report template...');
  const mockResults = scenarios.map(scenario => ({
    scenario,
    passed: true, // Mock result
    elementChecks: [],
    visualIssues: []
  }));
  
  const reportHtml = generateResponsiveTestReport(mockResults);
  fs.writeFileSync(RESPONSIVE_REPORT_FILE, reportHtml);
  console.log(`Responsive test report template saved to ${RESPONSIVE_REPORT_FILE}`);
  
  console.log('\n✅ All booking system tests completed!');
  console.log('----------------------------------------------');
  console.log('To run responsive tests in a browser environment:');
  console.log('1. Start the development server: npm run dev');
  console.log('2. Use a browser automation tool like Puppeteer or Playwright');
  console.log('3. Load the scenarios from:', RESPONSIVE_SCENARIOS_FILE);
  console.log('4. Run tests against the scenarios and generate a report');
}

// Run tests if this script is executed directly
if (require.main === module) {
  runTests().catch(error => {
    console.error('❌ Tests failed with error:', error);
    process.exit(1);
  });
}

export { runTests }; 











