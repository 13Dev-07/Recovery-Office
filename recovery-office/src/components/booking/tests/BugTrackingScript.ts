/**
 * BugTrackingScript.ts
 * 
 * A utility for tracking, categorizing, and reporting bugs discovered during testing
 * of the booking system. This script provides functions to systematically record
 * and organize issues to ensure they're properly addressed.
 */

import fs from 'fs';
import path from 'path';
import { FIBONACCI } from '../../../constants/sacred-geometry';

/**
 * Bug severity levels based on Fibonacci sequence for sacred geometry alignment
 */
export enum BugSeverity {
  CRITICAL = FIBONACCI[8], // 21
  HIGH = FIBONACCI[7], // 13
  MEDIUM = FIBONACCI[6], // 8
  LOW = FIBONACCI[5], // 5
  TRIVIAL = FIBONACCI[4] // 3
}

/**
 * Bug categories organized by system component
 */
export enum BugCategory {
  UI_VISUAL = 'UI/Visual',
  VALIDATION = 'Form Validation',
  ACCESSIBILITY = 'Accessibility',
  PERFORMANCE = 'Performance',
  API_INTEGRATION = 'API Integration',
  MOBILE_TABLET = 'Mobile/Tablet',
  BROWSER_COMPATIBILITY = 'Browser Compatibility',
  NAVIGATION = 'Navigation/Flow',
  STATE_MANAGEMENT = 'State Management',
  SACRED_GEOMETRY = 'Sacred Geometry Implementation'
}

/**
 * Booking step identifiers
 */
export enum BookingStepId {
  SERVICE_SELECTION = 'service-selection',
  DATE_SELECTION = 'date-selection',
  CLIENT_INFORMATION = 'client-information',
  CONFIRMATION = 'confirmation'
}

/**
 * Supported device types for testing
 */
export interface TestDevice {
  name: string;
  width: number;
  height: number;
  userAgent?: string;
  deviceScaleFactor?: number;
}

/**
 * Test environment information
 */
export interface TestEnvironment {
  browser: string;
  browserVersion: string;
  os: string;
  device?: TestDevice;
  viewport?: { width: number; height: number };
}

/**
 * Bug report structure
 */
export interface BugReport {
  id: string;
  title: string;
  description: string;
  category: BugCategory;
  severity: BugSeverity;
  steps: string[];
  expectedResult: string;
  actualResult: string;
  affectedComponents: string[];
  bookingStep?: BookingStepId;
  environment: TestEnvironment;
  status: 'open' | 'in-progress' | 'fixed' | 'verified';
  createdAt: string;
  updatedAt: string;
  fixedAt?: string;
  screenshot?: string; // Base64 encoded or file path
  fixPR?: string; // Pull request link if available
}

/**
 * Class for managing bug tracking during testing
 */
export class BugTracker {
  private bugs: BugReport[] = [];
  private outputDir: string;
  private currentTestEnvironment: TestEnvironment;

  constructor(outputDir: string = './bug-reports') {
    this.outputDir = outputDir;
    
    // Create directory if it doesn't exist
    if (typeof window === 'undefined' && fs.existsSync) {
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
    }
    
    // Default test environment
    this.currentTestEnvironment = {
      browser: this.detectBrowser(),
      browserVersion: this.detectBrowserVersion(),
      os: this.detectOS()
    };
  }

  /**
   * Detect current browser
   */
  private detectBrowser(): string {
    if (typeof window === 'undefined') return 'Node.js';
    
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
    if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
    if (userAgent.indexOf('Safari') > -1) return 'Safari';
    if (userAgent.indexOf('Edge') > -1) return 'Edge';
    if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) return 'Internet Explorer';
    
    return 'Unknown';
  }

  /**
   * Detect browser version
   */
  private detectBrowserVersion(): string {
    if (typeof window === 'undefined') return 'N/A';
    
    const userAgent = navigator.userAgent;
    let match;
    
    // Chrome
    match = userAgent.match(/Chrome\/(\d+\.\d+)/);
    if (match) return match[1];
    
    // Firefox
    match = userAgent.match(/Firefox\/(\d+\.\d+)/);
    if (match) return match[1];
    
    // Safari
    match = userAgent.match(/Version\/(\d+\.\d+).*Safari/);
    if (match) return match[1];
    
    // Edge
    match = userAgent.match(/Edge\/(\d+\.\d+)/);
    if (match) return match[1];
    
    return 'Unknown';
  }

  /**
   * Detect operating system
   */
  private detectOS(): string {
    if (typeof window === 'undefined') {
      return process.platform;
    }
    
    const userAgent = navigator.userAgent;
    
    if (userAgent.indexOf('Win') > -1) return 'Windows';
    if (userAgent.indexOf('Mac') > -1) return 'macOS';
    if (userAgent.indexOf('Linux') > -1) return 'Linux';
    if (userAgent.indexOf('Android') > -1) return 'Android';
    if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) return 'iOS';
    
    return 'Unknown';
  }

  /**
   * Set current test environment
   */
  public setTestEnvironment(environment: Partial<TestEnvironment>): void {
    this.currentTestEnvironment = {
      ...this.currentTestEnvironment,
      ...environment
    };
    
    // Update viewport if in browser
    if (typeof window !== 'undefined' && !environment.viewport) {
      this.currentTestEnvironment.viewport = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  }

  /**
   * Generate a unique ID for a bug report
   */
  private generateBugId(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `BUG-${timestamp}-${random}`;
  }

  /**
   * Report a new bug
   */
  public reportBug(bugData: Omit<BugReport, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'environment'>): BugReport {
    const now = new Date().toISOString();
    
    const bug: BugReport = {
      id: this.generateBugId(),
      ...bugData,
      status: 'open',
      environment: this.currentTestEnvironment,
      createdAt: now,
      updatedAt: now
    };
    
    this.bugs.push(bug);
    this.saveBugReport(bug);
    
    return bug;
  }

  /**
   * Update an existing bug report
   */
  public updateBug(bugId: string, updates: Partial<BugReport>): BugReport | null {
    const index = this.bugs.findIndex(bug => bug.id === bugId);
    
    if (index === -1) return null;
    
    const updatedBug: BugReport = {
      ...this.bugs[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    // If status changed to fixed, update fixedAt
    if (updates.status === 'fixed' && this.bugs[index].status !== 'fixed') {
      updatedBug.fixedAt = new Date().toISOString();
    }
    
    this.bugs[index] = updatedBug;
    this.saveBugReport(updatedBug);
    
    return updatedBug;
  }

  /**
   * Save a bug report to file
   */
  private saveBugReport(bug: BugReport): void {
    // Only run in Node.js environment
    if (typeof window === 'undefined' && fs.writeFileSync) {
      const filePath = path.join(this.outputDir, `${bug.id}.json`);
      fs.writeFileSync(filePath, JSON.stringify(bug, null, 2), 'utf8');
    }
  }

  /**
   * Get all bugs matching specific criteria
   */
  public getBugs(filters: Partial<{
    category: BugCategory;
    severity: BugSeverity;
    status: BugReport['status'];
    bookingStep: BookingStepId;
  }> = {}): BugReport[] {
    return this.bugs.filter(bug => {
      if (filters.category && bug.category !== filters.category) return false;
      if (filters.severity && bug.severity !== filters.severity) return false;
      if (filters.status && bug.status !== filters.status) return false;
      if (filters.bookingStep && bug.bookingStep !== filters.bookingStep) return false;
      return true;
    });
  }

  /**
   * Get bug statistics
   */
  public getStatistics(): {
    total: number;
    byStatus: Record<BugReport['status'], number>;
    byCategory: Record<BugCategory, number>;
    bySeverity: Record<BugSeverity, number>;
    byBookingStep: Record<string, number>;
  } {
    const stats = {
      total: this.bugs.length,
      byStatus: {
        open: 0,
        'in-progress': 0,
        fixed: 0,
        verified: 0
      },
      byCategory: Object.values(BugCategory).reduce((acc, category) => {
        acc[category] = 0;
        return acc;
      }, {} as Record<BugCategory, number>),
      bySeverity: {
        [BugSeverity.CRITICAL]: 0,
        [BugSeverity.HIGH]: 0,
        [BugSeverity.MEDIUM]: 0,
        [BugSeverity.LOW]: 0,
        [BugSeverity.TRIVIAL]: 0
      },
      byBookingStep: {
        [BookingStepId.SERVICE_SELECTION]: 0,
        [BookingStepId.DATE_SELECTION]: 0,
        [BookingStepId.CLIENT_INFORMATION]: 0,
        [BookingStepId.CONFIRMATION]: 0,
        'global': 0
      }
    };
    
    this.bugs.forEach(bug => {
      // Count by status
      stats.byStatus[bug.status]++;
      
      // Count by category
      stats.byCategory[bug.category]++;
      
      // Count by severity
      stats.bySeverity[bug.severity]++;
      
      // Count by booking step
      if (bug.bookingStep) {
        stats.byBookingStep[bug.bookingStep]++;
      } else {
        stats.byBookingStep['global']++;
      }
    });
    
    return stats;
  }

  /**
   * Generate a detailed bug report in markdown format
   */
  public generateReport(): string {
    const stats = this.getStatistics();
    const now = new Date().toISOString().split('T')[0];
    
    let report = `# Booking System Bug Report\n\n`;
    report += `Generated on: ${now}\n\n`;
    
    // Summary section
    report += `## Summary\n\n`;
    report += `- Total bugs: ${stats.total}\n`;
    report += `- Open: ${stats.byStatus.open}\n`;
    report += `- In progress: ${stats.byStatus['in-progress']}\n`;
    report += `- Fixed: ${stats.byStatus.fixed}\n`;
    report += `- Verified: ${stats.byStatus.verified}\n\n`;
    
    // Critical bugs section
    const criticalBugs = this.getBugs({ severity: BugSeverity.CRITICAL });
    if (criticalBugs.length > 0) {
      report += `## Critical Bugs (${criticalBugs.length})\n\n`;
      
      criticalBugs.forEach(bug => {
        report += `### ${bug.title} (${bug.id})\n\n`;
        report += `- **Status:** ${bug.status}\n`;
        report += `- **Category:** ${bug.category}\n`;
        report += `- **Affected Components:** ${bug.affectedComponents.join(', ')}\n`;
        report += `- **Description:** ${bug.description}\n\n`;
        
        if (bug.bookingStep) {
          report += `- **Booking Step:** ${bug.bookingStep}\n\n`;
        }
        
        report += `**Steps to Reproduce:**\n\n`;
        bug.steps.forEach((step, index) => {
          report += `${index + 1}. ${step}\n`;
        });
        report += `\n`;
        
        report += `**Expected Result:** ${bug.expectedResult}\n\n`;
        report += `**Actual Result:** ${bug.actualResult}\n\n`;
        
        if (bug.fixPR) {
          report += `**Fix PR:** ${bug.fixPR}\n\n`;
        }
        
        report += `---\n\n`;
      });
    }
    
    // Open bugs by category
    report += `## Open Bugs by Category\n\n`;
    
    Object.values(BugCategory).forEach(category => {
      const categoryBugs = this.getBugs({ category, status: 'open' });
      if (categoryBugs.length > 0) {
        report += `### ${category} (${categoryBugs.length})\n\n`;
        
        categoryBugs.forEach(bug => {
          report += `- **${bug.title}** (${bug.id}) - ${BugSeverity[bug.severity]} severity\n`;
          report += `  ${bug.description.substring(0, 100)}${bug.description.length > 100 ? '...' : ''}\n\n`;
        });
      }
    });
    
    return report;
  }

  /**
   * Save the complete bug report
   */
  public saveReport(): void {
    // Only run in Node.js environment
    if (typeof window === 'undefined' && fs.writeFileSync) {
      const report = this.generateReport();
      const now = new Date().toISOString().split('T')[0];
      const filePath = path.join(this.outputDir, `bug-report-${now}.md`);
      fs.writeFileSync(filePath, report, 'utf8');
      console.log(`Bug report saved to ${filePath}`);
    }
  }

  /**
   * Export all bug data to JSON file
   */
  public exportBugsToJson(): void {
    // Only run in Node.js environment
    if (typeof window === 'undefined' && fs.writeFileSync) {
      const filePath = path.join(this.outputDir, 'all-bugs.json');
      fs.writeFileSync(filePath, JSON.stringify(this.bugs, null, 2), 'utf8');
      console.log(`All bugs exported to ${filePath}`);
    }
  }

  /**
   * Helper method to quickly report common validation bugs
   */
  public reportValidationBug(
    field: string,
    bookingStep: BookingStepId,
    description: string,
    expectedResult: string,
    actualResult: string,
    severity: BugSeverity = BugSeverity.MEDIUM
  ): BugReport {
    return this.reportBug({
      title: `Validation error for ${field} in ${bookingStep} step`,
      description,
      category: BugCategory.VALIDATION,
      severity,
      steps: [
        `Navigate to the ${bookingStep} step`,
        `Attempt to input invalid data for ${field}`,
        `Observe validation behavior`
      ],
      expectedResult,
      actualResult,
      affectedComponents: [`${bookingStep}-step`, 'validation'],
      bookingStep
    });
  }

  /**
   * Helper method to quickly report common UI/visual bugs
   */
  public reportUIBug(
    component: string,
    bookingStep: BookingStepId | undefined,
    description: string,
    expectedResult: string,
    actualResult: string,
    severity: BugSeverity = BugSeverity.MEDIUM,
    environment?: Partial<TestEnvironment>
  ): BugReport {
    // Update environment if provided
    if (environment) {
      this.setTestEnvironment(environment);
    }
    
    return this.reportBug({
      title: `UI issue in ${component}${bookingStep ? ` (${bookingStep} step)` : ''}`,
      description,
      category: BugCategory.UI_VISUAL,
      severity,
      steps: [
        bookingStep ? `Navigate to the ${bookingStep} step` : 'Open the booking interface',
        `Observe the ${component} component`
      ],
      expectedResult,
      actualResult,
      affectedComponents: [component],
      bookingStep
    });
  }

  /**
   * Helper method to quickly report common accessibility bugs
   */
  public reportAccessibilityBug(
    issue: string,
    bookingStep: BookingStepId | undefined,
    description: string,
    expectedResult: string,
    actualResult: string,
    severity: BugSeverity = BugSeverity.HIGH
  ): BugReport {
    return this.reportBug({
      title: `Accessibility issue: ${issue}`,
      description,
      category: BugCategory.ACCESSIBILITY,
      severity,
      steps: [
        bookingStep ? `Navigate to the ${bookingStep} step` : 'Open the booking interface',
        `Test with screen reader or keyboard navigation`
      ],
      expectedResult,
      actualResult,
      affectedComponents: ['accessibility'],
      bookingStep
    });
  }
}

// Instance for use in testing
export const bugTracker = new BugTracker();

// Example usage:
/*
import { bugTracker, BugCategory, BugSeverity, BookingStepId } from './BugTrackingScript';

// Set test environment
bugTracker.setTestEnvironment({
  browser: 'Chrome',
  browserVersion: '90.0',
  device: {
    name: 'iPhone 12',
    width: 390,
    height: 844
  }
});

// Report a bug
bugTracker.reportBug({
  title: 'Calendar not rendering correctly on mobile',
  description: 'The calendar component overflows on small screens and horizontal scrolling is required',
  category: BugCategory.MOBILE_TABLET,
  severity: BugSeverity.HIGH,
  steps: [
    'Open booking system on iPhone 12',
    'Navigate to date selection step',
    'Observe calendar rendering'
  ],
  expectedResult: 'Calendar should fit completely within the screen width',
  actualResult: 'Calendar extends beyond screen width requiring horizontal scrolling',
  affectedComponents: ['Calendar', 'DateSelectionStep'],
  bookingStep: BookingStepId.DATE_SELECTION
});

// Report validation bug with helper method
bugTracker.reportValidationBug(
  'phone',
  BookingStepId.CLIENT_INFORMATION,
  'Phone number validation accepts invalid formats',
  'Should show error for invalid phone numbers',
  'Accepts "abc123" as a valid phone number',
  BugSeverity.MEDIUM
);

// Generate and save report
bugTracker.saveReport();
*/ 











