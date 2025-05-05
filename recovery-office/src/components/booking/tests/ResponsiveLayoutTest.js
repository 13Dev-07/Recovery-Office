"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECTORS = exports.DeviceOrientation = exports.DEVICES = void 0;
exports.getDeviceDimensions = getDeviceDimensions;
exports.generateTestScenarios = generateTestScenarios;
exports.checkCommonLayoutIssues = checkCommonLayoutIssues;
exports.getStepSpecificSelectors = getStepSpecificSelectors;
exports.generateResponsiveTestReport = generateResponsiveTestReport;
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * Responsive Layout Test Utility
 *
 * This file contains utilities for testing responsive layouts
 * across different device sizes
 * Uses sacred geometry principles for breakpoints and dimensions
 */
// Device definitions - based on Fibonacci sequence for sacred proportions
exports.DEVICES = {
    // Mobile devices
    mobileSmall: {
        name: 'iPhone SE',
        width: sacred_geometry_1.FIBONACCI[12], // 144px (scaled)
        height: sacred_geometry_1.FIBONACCI[13], // 233px (scaled)
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
    },
    mobileMedium: {
        name: 'iPhone 12/13',
        width: sacred_geometry_1.FIBONACCI[13], // 233px (scaled)
        height: sacred_geometry_1.FIBONACCI[14], // 377px (scaled)
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true
    },
    mobileLarge: {
        name: 'Pixel 5',
        width: sacred_geometry_1.FIBONACCI[13] + sacred_geometry_1.FIBONACCI[12], // 377px (scaled)
        height: sacred_geometry_1.FIBONACCI[14] + sacred_geometry_1.FIBONACCI[13], // 610px (scaled)
        userAgent: 'Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.101 Mobile Safari/537.36',
        deviceScaleFactor: 2.75,
        isMobile: true,
        hasTouch: true
    },
    // Tablet devices
    tabletSmall: {
        name: 'iPad Mini',
        width: sacred_geometry_1.FIBONACCI[15], // 610px (scaled)
        height: sacred_geometry_1.FIBONACCI[16], // 987px (scaled)
        userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
    },
    tabletMedium: {
        name: 'iPad Air',
        width: sacred_geometry_1.FIBONACCI[15] + sacred_geometry_1.FIBONACCI[14], // 987px (scaled)
        height: sacred_geometry_1.FIBONACCI[16] + sacred_geometry_1.FIBONACCI[15], // 1597px (scaled)
        userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
    },
    tabletLarge: {
        name: 'iPad Pro 12.9"',
        width: sacred_geometry_1.FIBONACCI[16], // 1597px (scaled)
        height: sacred_geometry_1.FIBONACCI[17], // 2584px (scaled)
        userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
    },
    // Desktop devices
    desktopSmall: {
        name: 'Small Laptop',
        width: sacred_geometry_1.FIBONACCI[16] + sacred_geometry_1.FIBONACCI[15], // 2584px (scaled)
        height: sacred_geometry_1.FIBONACCI[15] + sacred_geometry_1.FIBONACCI[14], // 987px (scaled)
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false
    },
    desktopLarge: {
        name: 'Large Desktop',
        width: sacred_geometry_1.FIBONACCI[17], // 4181px (scaled)
        height: sacred_geometry_1.FIBONACCI[16], // 1597px (scaled)
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false
    }
};
/**
 * Device orientations for testing
 */
var DeviceOrientation;
(function (DeviceOrientation) {
    DeviceOrientation["PORTRAIT"] = "portrait";
    DeviceOrientation["LANDSCAPE"] = "landscape";
})(DeviceOrientation || (exports.DeviceOrientation = DeviceOrientation = {}));
/**
 * Specific element selectors for testing
 */
exports.SELECTORS = {
    BOOKING_INTERFACE: '.booking-interface',
    SERVICE_SELECTION: '.service-selection-step',
    DATE_SELECTION: '.date-selection-step',
    CLIENT_INFO: '.client-info-step',
    CONFIRMATION: '.confirmation-step',
    CALENDAR: '.calendar-container',
    TIME_SLOTS: '.time-slot-list',
    NAVIGATION: '.booking-nav-controls',
    STEPPER: '.booking-stepper',
    FORM_CONTROL: '.form-control',
    CALENDAR_MODAL: '.mobile-calendar-modal',
    ERROR_MESSAGE: '.error-message',
    LOADING_OVERLAY: '.loading-overlay'
};
/**
 * Extracts the dimensions for a given device and orientation
 */
function getDeviceDimensions(device, orientation) {
    if (orientation === void 0) { orientation = DeviceOrientation.PORTRAIT; }
    var _a = exports.DEVICES[device], width = _a.width, height = _a.height;
    if (orientation === DeviceOrientation.LANDSCAPE) {
        return { width: height, height: width };
    }
    return { width: width, height: height };
}
/**
 * Generates common test scenarios covering key device/orientation combinations
 */
function generateTestScenarios() {
    var scenarios = [];
    // Generate scenarios for each device and orientation
    Object.keys(exports.DEVICES).forEach(function (device) {
        // Test each booking step
        for (var step = 0; step < 4; step++) {
            // Portrait mode test
            scenarios.push({
                device: device,
                orientation: DeviceOrientation.PORTRAIT,
                step: step
            });
            // Landscape mode test for mobile and tablets
            if (device.includes('mobile') || device.includes('tablet')) {
                scenarios.push({
                    device: device,
                    orientation: DeviceOrientation.LANDSCAPE,
                    step: step
                });
            }
        }
    });
    // Special scenarios with interactions
    // Mobile calendar modal test
    scenarios.push({
        device: 'mobileMedium',
        orientation: DeviceOrientation.PORTRAIT,
        step: 1, // Date selection step
        action: 'CLICK',
        selector: exports.SELECTORS.CALENDAR
    });
    // Scrolling test for client info on small screen
    scenarios.push({
        device: 'mobileSmall',
        orientation: DeviceOrientation.PORTRAIT,
        step: 2, // Client info step
        action: 'SCROLL',
        value: '500' // Scroll 500px down
    });
    // Input field test on tablet
    scenarios.push({
        device: 'tabletMedium',
        orientation: DeviceOrientation.PORTRAIT,
        step: 2, // Client info step
        action: 'INPUT',
        selector: "".concat(exports.SELECTORS.CLIENT_INFO, " input[name=\"firstName\"]"),
        value: 'Test User'
    });
    return scenarios;
}
/**
 * Identifies common responsive layout issues based on element visibility and position
 * This would be used in an actual browser environment (like Puppeteer)
 */
function checkCommonLayoutIssues(elements) {
    var issues = [];
    // Check for elements with zero width/height that should be visible
    Object.entries(elements).forEach(function (_a) {
        var selector = _a[0], metrics = _a[1];
        if (metrics.visible && (metrics.width <= 0 || metrics.height <= 0)) {
            issues.push({
                description: "Element has zero dimensions but is marked as visible",
                severity: 'high',
                element: selector
            });
        }
        // Check for elements positioned off-screen
        if (metrics.visible && (metrics.x < 0 || metrics.y < 0)) {
            issues.push({
                description: "Element is positioned off-screen (".concat(metrics.x, ", ").concat(metrics.y, ")"),
                severity: 'medium',
                element: selector
            });
        }
        // Check for elements that are too small to be interactable on touch devices
        if (metrics.visible && (metrics.width < 44 || metrics.height < 44)) {
            issues.push({
                description: "Element may be too small for touch interaction (".concat(metrics.width, "x").concat(metrics.height, ")"),
                severity: 'medium',
                element: selector
            });
        }
    });
    // Check for overlapping elements
    var elementEntries = Object.entries(elements);
    for (var i = 0; i < elementEntries.length; i++) {
        var _a = elementEntries[i], selectorA = _a[0], metricsA = _a[1];
        for (var j = i + 1; j < elementEntries.length; j++) {
            var _b = elementEntries[j], selectorB = _b[0], metricsB = _b[1];
            if (metricsA.visible && metricsB.visible) {
                var isOverlapping = metricsA.x < metricsB.x + metricsB.width &&
                    metricsA.x + metricsA.width > metricsB.x &&
                    metricsA.y < metricsB.y + metricsB.height &&
                    metricsA.y + metricsA.height > metricsB.y;
                if (isOverlapping) {
                    issues.push({
                        description: "Elements overlap: ".concat(selectorA, " and ").concat(selectorB),
                        severity: 'medium',
                        element: "".concat(selectorA, ", ").concat(selectorB)
                    });
                }
            }
        }
    }
    return issues;
}
/**
 * Helper function to get key selectors for a specific booking step
 */
function getStepSpecificSelectors(step) {
    switch (step) {
        case 0: // Service Selection
            return [
                exports.SELECTORS.SERVICE_SELECTION,
                "".concat(exports.SELECTORS.SERVICE_SELECTION, " .service-card"),
                exports.SELECTORS.NAVIGATION
            ];
        case 1: // Date Selection
            return [
                exports.SELECTORS.DATE_SELECTION,
                exports.SELECTORS.CALENDAR,
                exports.SELECTORS.TIME_SLOTS,
                exports.SELECTORS.NAVIGATION
            ];
        case 2: // Client Info
            return [
                exports.SELECTORS.CLIENT_INFO,
                "".concat(exports.SELECTORS.CLIENT_INFO, " form"),
                "".concat(exports.SELECTORS.CLIENT_INFO, " .form-control"),
                exports.SELECTORS.NAVIGATION
            ];
        case 3: // Confirmation
            return [
                exports.SELECTORS.CONFIRMATION,
                "".concat(exports.SELECTORS.CONFIRMATION, " .booking-summary"),
                "".concat(exports.SELECTORS.CONFIRMATION, " .payment-section"),
                exports.SELECTORS.NAVIGATION
            ];
        default:
            return [];
    }
}
/**
 * Generates a HTML report from test results
 */
function generateResponsiveTestReport(results) {
    var passedTests = results.filter(function (r) { return r.passed; }).length;
    var totalTests = results.length;
    var passRate = Math.round((passedTests / totalTests) * 100);
    var reportHtml = "\n    <html>\n      <head>\n        <title>Responsive Layout Test Results</title>\n        <style>\n          body { font-family: sans-serif; margin: 20px; }\n          .header { display: flex; justify-content: space-between; align-items: center; }\n          .summary { margin-bottom: 20px; }\n          .test-case { margin-bottom: 30px; border: 1px solid #ccc; border-radius: 5px; padding: 15px; }\n          .test-case.passed { border-left: 5px solid green; }\n          .test-case.failed { border-left: 5px solid red; }\n          .issues { margin-top: 10px; }\n          .issue { padding: 5px; margin: 5px 0; }\n          .issue.high { background-color: #ffdddd; }\n          .issue.medium { background-color: #ffffcc; }\n          .issue.low { background-color: #e6f3ff; }\n          .screenshot { max-width: 100%; height: auto; margin-top: 15px; border: 1px solid #ddd; }\n          .pass-rate { font-size: 24px; }\n          table { border-collapse: collapse; width: 100%; }\n          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }\n          th { background-color: #f2f2f2; }\n        </style>\n      </head>\n      <body>\n        <div class=\"header\">\n          <h1>Responsive Layout Test Results</h1>\n          <div class=\"pass-rate\">Pass rate: ".concat(passRate, "% (").concat(passedTests, "/").concat(totalTests, ")</div>\n        </div>\n        \n        <div class=\"summary\">\n          <h2>Test Summary</h2>\n          <p>Tests run across ").concat(Object.keys(exports.DEVICES).length, " devices in various orientations and steps.</p>\n        </div>\n  ");
    // Add results
    results.forEach(function (result) {
        var device = exports.DEVICES[result.scenario.device];
        var _a = getDeviceDimensions(result.scenario.device, result.scenario.orientation), width = _a.width, height = _a.height;
        reportHtml += "\n      <div class=\"test-case ".concat(result.passed ? 'passed' : 'failed', "\">\n        <h3>Test: ").concat(device.name, " (").concat(result.scenario.orientation, ")</h3>\n        <p>Step: ").concat(result.scenario.step, " (").concat(['Service Selection', 'Date Selection', 'Client Info', 'Confirmation'][result.scenario.step], ")</p>\n        <p>Resolution: ").concat(width, "x").concat(height, "</p>\n        \n        <h4>Element Checks</h4>\n        <table>\n          <tr>\n            <th>Element</th>\n            <th>Found</th>\n            <th>Visible</th>\n            <th>Interactable</th>\n          </tr>\n    ");
        result.elementChecks.forEach(function (check) {
            reportHtml += "\n        <tr>\n          <td>".concat(check.selector, "</td>\n          <td>").concat(check.found ? '✓' : '✗', "</td>\n          <td>").concat(check.visible ? '✓' : '✗', "</td>\n          <td>").concat(check.interactable ? '✓' : '✗', "</td>\n        </tr>\n      ");
        });
        reportHtml += "</table>";
        // Add issues if any
        if (result.visualIssues.length > 0) {
            reportHtml += "\n        <h4>Visual Issues</h4>\n        <div class=\"issues\">\n      ";
            result.visualIssues.forEach(function (issue) {
                reportHtml += "\n          <div class=\"issue ".concat(issue.severity, "\">\n            <strong>").concat(issue.severity.toUpperCase(), ":</strong> ").concat(issue.description, " (").concat(issue.element, ")\n          </div>\n        ");
            });
            reportHtml += "</div>";
        }
        // Add screenshot if available
        if (result.screenshot) {
            reportHtml += "\n        <h4>Screenshot</h4>\n        <img class=\"screenshot\" src=\"data:image/png;base64,".concat(result.screenshot, "\" alt=\"Test screenshot\" />\n      ");
        }
        reportHtml += "</div>";
    });
    reportHtml += "\n      </body>\n    </html>\n  ";
    return reportHtml;
}
/**
 * Example function to run tests in a browser environment
 * Commented out since it would require a browser environment
 */
/*
export async function runResponsiveTests() {
  const scenarios = generateTestScenarios();
  const results: ResponsiveTestResult[] = [];
  
  for (const scenario of scenarios) {
    try {
      // These functions would be replaced by actual browser automation code
      const browser = await launch();
      const page = await browser.newPage();
      
      // Set device metrics
      const { width, height } = getDeviceDimensions(
        scenario.device,
        scenario.orientation
      );
      await page.setViewport({ width, height });
      
      // Navigate to the booking page and go to the specific step
      await page.goto('http://localhost:3000/booking');
      
      // Navigate to specified step
      for (let i = 0; i < scenario.step; i++) {
        await page.click('.next-button');
        await page.waitForTimeout(500); // Wait for animation
      }
      
      // Check for key elements
      const selectors = getStepSpecificSelectors(scenario.step);
      const elementChecks = [];
      
      for (const selector of selectors) {
        const element = await page.$(selector);
        const found = !!element;
        let visible = false;
        let interactable = false;
        
        if (found) {
          visible = await page.evaluate(el => {
            const rect = el.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0 &&
                   window.getComputedStyle(el).visibility !== 'hidden';
          }, element);
          
          interactable = visible && await page.evaluate(el => {
            const style = window.getComputedStyle(el);
            return style.pointerEvents !== 'none' && style.display !== 'none';
          }, element);
        }
        
        elementChecks.push({ selector, found, visible, interactable });
      }
      
      // Check for layout issues
      const elementMetrics = await page.evaluate(() => {
        const metrics = {};
        document.querySelectorAll('.booking-interface *').forEach(el => {
          const rect = el.getBoundingClientRect();
          metrics[el.tagName + (el.className ? '.' + el.className.replace(/\s+/g, '.') : '')] = {
            width: rect.width,
            height: rect.height,
            visible: rect.width > 0 && rect.height > 0,
            x: rect.x,
            y: rect.y
          };
        });
        return metrics;
      });
      
      const visualIssues = checkCommonLayoutIssues(elementMetrics);
      
      // Take screenshot
      const screenshot = await page.screenshot({ encoding: 'base64' });
      
      // Determine if test passed
      const passed = elementChecks.every(check => check.found && check.visible) &&
                    visualIssues.filter(issue => issue.severity === 'high').length === 0;
      
      results.push({
        scenario,
        passed,
        elementChecks,
        visualIssues,
        screenshot
      });
      
      await browser.close();
    } catch (error) {
      results.push({
        scenario,
        passed: false,
        elementChecks: [],
        visualIssues: [{
          description: `Test execution error: ${error.message}`,
          severity: 'high',
          element: 'N/A'
        }]
      });
    }
  }
  
  // Generate report
  const reportHtml = generateResponsiveTestReport(results);
  return reportHtml;
}
*/
