import { FIBONACCI } from '../../../constants/sacred-geometry';

/**
 * Responsive Layout Test Utility
 * 
 * This file contains utilities for testing responsive layouts
 * across different device sizes
 * Uses sacred geometry principles for breakpoints and dimensions
 */

// Device definitions - based on Fibonacci sequence for sacred proportions
export const DEVICES = {
  // Mobile devices
  mobileSmall: {
    name: 'iPhone SE',
    width: FIBONACCI[12], // 144px (scaled)
    height: FIBONACCI[13], // 233px (scaled)
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  },
  mobileMedium: {
    name: 'iPhone 12/13',
    width: FIBONACCI[13], // 233px (scaled)
    height: FIBONACCI[14], // 377px (scaled)
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true
  },
  mobileLarge: {
    name: 'Pixel 5',
    width: FIBONACCI[13] + FIBONACCI[12], // 377px (scaled)
    height: FIBONACCI[14] + FIBONACCI[13], // 610px (scaled)
    userAgent: 'Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.101 Mobile Safari/537.36',
    deviceScaleFactor: 2.75,
    isMobile: true,
    hasTouch: true
  },
  
  // Tablet devices
  tabletSmall: {
    name: 'iPad Mini',
    width: FIBONACCI[15], // 610px (scaled)
    height: FIBONACCI[16], // 987px (scaled)
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  },
  tabletMedium: {
    name: 'iPad Air',
    width: FIBONACCI[15] + FIBONACCI[14], // 987px (scaled)
    height: FIBONACCI[16] + FIBONACCI[15], // 1597px (scaled)
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  },
  tabletLarge: {
    name: 'iPad Pro 12.9"',
    width: FIBONACCI[16], // 1597px (scaled)
    height: FIBONACCI[17], // 2584px (scaled)
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  },
  
  // Desktop devices
  desktopSmall: {
    name: 'Small Laptop',
    width: FIBONACCI[16] + FIBONACCI[15], // 2584px (scaled)
    height: FIBONACCI[15] + FIBONACCI[14], // 987px (scaled)
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false
  },
  desktopLarge: {
    name: 'Large Desktop',
    width: FIBONACCI[17], // 4181px (scaled)
    height: FIBONACCI[16], // 1597px (scaled)
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false
  }
};

/**
 * Device orientations for testing
 */
export enum DeviceOrientation {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape'
}

/**
 * Specific element selectors for testing
 */
export const SELECTORS = {
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
 * Test scenario for a specific device configuration
 */
export interface ResponsiveTestScenario {
  device: keyof typeof DEVICES;
  orientation: DeviceOrientation;
  step: number;
  action?: 'CLICK' | 'SCROLL' | 'INPUT';
  selector?: string;
  value?: string;
}

/**
 * Test result from a responsive test
 */
export interface ResponsiveTestResult {
  scenario: ResponsiveTestScenario;
  passed: boolean;
  elementChecks: Array<{
    selector: string;
    found: boolean;
    visible: boolean;
    interactable: boolean;
  }>;
  visualIssues: Array<{
    description: string;
    severity: 'low' | 'medium' | 'high';
    element: string;
  }>;
  screenshot?: string; // Base64 encoded screenshot
}

/**
 * Extracts the dimensions for a given device and orientation
 */
export function getDeviceDimensions(
  device: keyof typeof DEVICES, 
  orientation: DeviceOrientation = DeviceOrientation.PORTRAIT
): { width: number; height: number } {
  const { width, height } = DEVICES[device];
  
  if (orientation === DeviceOrientation.LANDSCAPE) {
    return { width: height, height: width };
  }
  
  return { width, height };
}

/**
 * Generates common test scenarios covering key device/orientation combinations
 */
export function generateTestScenarios(): ResponsiveTestScenario[] {
  const scenarios: ResponsiveTestScenario[] = [];
  
  // Generate scenarios for each device and orientation
  Object.keys(DEVICES).forEach(device => {
    // Test each booking step
    for (let step = 0; step < 4; step++) {
      // Portrait mode test
      scenarios.push({
        device: device as keyof typeof DEVICES,
        orientation: DeviceOrientation.PORTRAIT,
        step
      });
      
      // Landscape mode test for mobile and tablets
      if (device.includes('mobile') || device.includes('tablet')) {
        scenarios.push({
          device: device as keyof typeof DEVICES,
          orientation: DeviceOrientation.LANDSCAPE,
          step
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
    selector: SELECTORS.CALENDAR
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
    selector: `${SELECTORS.CLIENT_INFO} input[name="firstName"]`,
    value: 'Test User'
  });
  
  return scenarios;
}

/**
 * Identifies common responsive layout issues based on element visibility and position
 * This would be used in an actual browser environment (like Puppeteer)
 */
export function checkCommonLayoutIssues(
  elements: Record<string, { width: number; height: number; visible: boolean; x: number; y: number }>
): Array<{ description: string; severity: 'low' | 'medium' | 'high'; element: string }> {
  const issues: Array<{ description: string; severity: 'low' | 'medium' | 'high'; element: string }> = [];
  
  // Check for elements with zero width/height that should be visible
  Object.entries(elements).forEach(([selector, metrics]) => {
    if (metrics.visible && (metrics.width <= 0 || metrics.height <= 0)) {
      issues.push({
        description: `Element has zero dimensions but is marked as visible`,
        severity: 'high',
        element: selector
      });
    }
    
    // Check for elements positioned off-screen
    if (metrics.visible && (metrics.x < 0 || metrics.y < 0)) {
      issues.push({
        description: `Element is positioned off-screen (${metrics.x}, ${metrics.y})`,
        severity: 'medium',
        element: selector
      });
    }
    
    // Check for elements that are too small to be interactable on touch devices
    if (metrics.visible && (metrics.width < 44 || metrics.height < 44)) {
      issues.push({
        description: `Element may be too small for touch interaction (${metrics.width}x${metrics.height})`,
        severity: 'medium',
        element: selector
      });
    }
  });
  
  // Check for overlapping elements
  const elementEntries = Object.entries(elements);
  for (let i = 0; i < elementEntries.length; i++) {
    const [selectorA, metricsA] = elementEntries[i];
    for (let j = i + 1; j < elementEntries.length; j++) {
      const [selectorB, metricsB] = elementEntries[j];
      
      if (metricsA.visible && metricsB.visible) {
        const isOverlapping = 
          metricsA.x < metricsB.x + metricsB.width &&
          metricsA.x + metricsA.width > metricsB.x &&
          metricsA.y < metricsB.y + metricsB.height &&
          metricsA.y + metricsA.height > metricsB.y;
        
        if (isOverlapping) {
          issues.push({
            description: `Elements overlap: ${selectorA} and ${selectorB}`,
            severity: 'medium',
            element: `${selectorA}, ${selectorB}`
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
export function getStepSpecificSelectors(step: number): string[] {
  switch (step) {
    case 0: // Service Selection
      return [
        SELECTORS.SERVICE_SELECTION,
        `${SELECTORS.SERVICE_SELECTION} .service-card`,
        SELECTORS.NAVIGATION
      ];
    case 1: // Date Selection
      return [
        SELECTORS.DATE_SELECTION,
        SELECTORS.CALENDAR,
        SELECTORS.TIME_SLOTS,
        SELECTORS.NAVIGATION
      ];
    case 2: // Client Info
      return [
        SELECTORS.CLIENT_INFO,
        `${SELECTORS.CLIENT_INFO} form`,
        `${SELECTORS.CLIENT_INFO} .form-control`,
        SELECTORS.NAVIGATION
      ];
    case 3: // Confirmation
      return [
        SELECTORS.CONFIRMATION,
        `${SELECTORS.CONFIRMATION} .booking-summary`,
        `${SELECTORS.CONFIRMATION} .payment-section`,
        SELECTORS.NAVIGATION
      ];
    default:
      return [];
  }
}

/**
 * Generates a HTML report from test results
 */
export function generateResponsiveTestReport(results: ResponsiveTestResult[]): string {
  const passedTests = results.filter(r => r.passed).length;
  const totalTests = results.length;
  const passRate = Math.round((passedTests / totalTests) * 100);
  
  let reportHtml = `
    <html>
      <head>
        <title>Responsive Layout Test Results</title>
        <style>
          body { font-family: sans-serif; margin: 20px; }
          .header { display: flex; justify-content: space-between; align-items: center; }
          .summary { margin-bottom: 20px; }
          .test-case { margin-bottom: 30px; border: 1px solid #ccc; border-radius: 5px; padding: 15px; }
          .test-case.passed { border-left: 5px solid green; }
          .test-case.failed { border-left: 5px solid red; }
          .issues { margin-top: 10px; }
          .issue { padding: 5px; margin: 5px 0; }
          .issue.high { background-color: #ffdddd; }
          .issue.medium { background-color: #ffffcc; }
          .issue.low { background-color: #e6f3ff; }
          .screenshot { max-width: 100%; height: auto; margin-top: 15px; border: 1px solid #ddd; }
          .pass-rate { font-size: 24px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Responsive Layout Test Results</h1>
          <div class="pass-rate">Pass rate: ${passRate}% (${passedTests}/${totalTests})</div>
        </div>
        
        <div class="summary">
          <h2>Test Summary</h2>
          <p>Tests run across ${Object.keys(DEVICES).length} devices in various orientations and steps.</p>
        </div>
  `;
  
  // Add results
  results.forEach(result => {
    const device = DEVICES[result.scenario.device];
    const { width, height } = getDeviceDimensions(
      result.scenario.device, 
      result.scenario.orientation
    );
    
    reportHtml += `
      <div class="test-case ${result.passed ? 'passed' : 'failed'}">
        <h3>Test: ${device.name} (${result.scenario.orientation})</h3>
        <p>Step: ${result.scenario.step} (${['Service Selection', 'Date Selection', 'Client Info', 'Confirmation'][result.scenario.step]})</p>
        <p>Resolution: ${width}x${height}</p>
        
        <h4>Element Checks</h4>
        <table>
          <tr>
            <th>Element</th>
            <th>Found</th>
            <th>Visible</th>
            <th>Interactable</th>
          </tr>
    `;
    
    result.elementChecks.forEach(check => {
      reportHtml += `
        <tr>
          <td>${check.selector}</td>
          <td>${check.found ? '✓' : '✗'}</td>
          <td>${check.visible ? '✓' : '✗'}</td>
          <td>${check.interactable ? '✓' : '✗'}</td>
        </tr>
      `;
    });
    
    reportHtml += `</table>`;
    
    // Add issues if any
    if (result.visualIssues.length > 0) {
      reportHtml += `
        <h4>Visual Issues</h4>
        <div class="issues">
      `;
      
      result.visualIssues.forEach(issue => {
        reportHtml += `
          <div class="issue ${issue.severity}">
            <strong>${issue.severity.toUpperCase()}:</strong> ${issue.description} (${issue.element})
          </div>
        `;
      });
      
      reportHtml += `</div>`;
    }
    
    // Add screenshot if available
    if (result.screenshot) {
      reportHtml += `
        <h4>Screenshot</h4>
        <img class="screenshot" src="data:image/png;base64,${result.screenshot}" alt="Test screenshot" />
      `;
    }
    
    reportHtml += `</div>`;
  });
  
  reportHtml += `
      </body>
    </html>
  `;
  
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











