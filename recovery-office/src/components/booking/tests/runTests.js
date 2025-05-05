"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTests = runTests;
var fs_1 = require("fs");
var path_1 = require("path");
var BookingSystemTest_1 = require("./BookingSystemTest");
var ResponsiveLayoutTest_1 = require("./ResponsiveLayoutTest");
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
var TEST_RESULTS_DIR = path_1.default.resolve(__dirname, 'results');
var E2E_RESULTS_FILE = path_1.default.join(TEST_RESULTS_DIR, 'e2e-results.json');
var RESPONSIVE_SCENARIOS_FILE = path_1.default.join(TEST_RESULTS_DIR, 'responsive-scenarios.json');
var RESPONSIVE_REPORT_FILE = path_1.default.join(TEST_RESULTS_DIR, 'responsive-report.html');
/**
 * Ensures the test results directory exists
 */
function ensureResultsDir() {
    if (!fs_1.default.existsSync(TEST_RESULTS_DIR)) {
        fs_1.default.mkdirSync(TEST_RESULTS_DIR, { recursive: true });
    }
}
/**
 * Saves test results to a file
 */
function saveResults(filePath, data) {
    fs_1.default.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Results saved to ".concat(filePath));
}
/**
 * Generates and saves responsive test scenarios
 */
function generateAndSaveResponsiveScenarios() {
    var scenarios = (0, ResponsiveLayoutTest_1.generateTestScenarios)();
    saveResults(RESPONSIVE_SCENARIOS_FILE, scenarios);
    console.log("Generated ".concat(scenarios.length, " responsive test scenarios"));
    return scenarios;
}
/**
 * Main function to run all tests
 */
function runTests() {
    return __awaiter(this, void 0, void 0, function () {
        var testResults, error_1, scenarios, mockResults, reportHtml;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('🧪 Starting Recovery Office Booking System Tests');
                    console.log('----------------------------------------------');
                    // Make sure results directory exists
                    ensureResultsDir();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log('\n🔍 Running validation and end-to-end tests...');
                    return [4 /*yield*/, (0, BookingSystemTest_1.runAllTests)()];
                case 2:
                    testResults = _a.sent();
                    saveResults(E2E_RESULTS_FILE, { success: testResults, timestamp: new Date().toISOString() });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('❌ Error running booking system tests:', error_1);
                    saveResults(E2E_RESULTS_FILE, {
                        success: false,
                        error: error_1.message,
                        timestamp: new Date().toISOString()
                    });
                    return [3 /*break*/, 4];
                case 4:
                    // Generate responsive test scenarios
                    console.log('\n📱 Generating responsive test scenarios...');
                    scenarios = generateAndSaveResponsiveScenarios();
                    // Note: The actual running of responsive tests would be done in a browser environment
                    // Here we just generate the scenarios and report template
                    console.log('\n📊 Generating responsive test report template...');
                    mockResults = scenarios.map(function (scenario) { return ({
                        scenario: scenario,
                        passed: true, // Mock result
                        elementChecks: [],
                        visualIssues: []
                    }); });
                    reportHtml = (0, ResponsiveLayoutTest_1.generateResponsiveTestReport)(mockResults);
                    fs_1.default.writeFileSync(RESPONSIVE_REPORT_FILE, reportHtml);
                    console.log("Responsive test report template saved to ".concat(RESPONSIVE_REPORT_FILE));
                    console.log('\n✅ All booking system tests completed!');
                    console.log('----------------------------------------------');
                    console.log('To run responsive tests in a browser environment:');
                    console.log('1. Start the development server: npm run dev');
                    console.log('2. Use a browser automation tool like Puppeteer or Playwright');
                    console.log('3. Load the scenarios from:', RESPONSIVE_SCENARIOS_FILE);
                    console.log('4. Run tests against the scenarios and generate a report');
                    return [2 /*return*/];
            }
        });
    });
}
// Run tests if this script is executed directly
if (require.main === module) {
    runTests().catch(function (error) {
        console.error('❌ Tests failed with error:', error);
        process.exit(1);
    });
}
