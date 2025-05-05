"use strict";
/**
 * BugTrackingScript.ts
 *
 * A utility for tracking, categorizing, and reporting bugs discovered during testing
 * of the booking system. This script provides functions to systematically record
 * and organize issues to ensure they're properly addressed.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bugTracker = exports.BugTracker = exports.BookingStepId = exports.BugCategory = exports.BugSeverity = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
/**
 * Bug severity levels based on Fibonacci sequence for sacred geometry alignment
 */
var BugSeverity;
(function (BugSeverity) {
    BugSeverity[BugSeverity["CRITICAL"] = sacred_geometry_1.FIBONACCI[8]] = "CRITICAL";
    BugSeverity[BugSeverity["HIGH"] = sacred_geometry_1.FIBONACCI[7]] = "HIGH";
    BugSeverity[BugSeverity["MEDIUM"] = sacred_geometry_1.FIBONACCI[6]] = "MEDIUM";
    BugSeverity[BugSeverity["LOW"] = sacred_geometry_1.FIBONACCI[5]] = "LOW";
    BugSeverity[BugSeverity["TRIVIAL"] = sacred_geometry_1.FIBONACCI[4]] = "TRIVIAL"; // 3
})(BugSeverity || (exports.BugSeverity = BugSeverity = {}));
/**
 * Bug categories organized by system component
 */
var BugCategory;
(function (BugCategory) {
    BugCategory["UI_VISUAL"] = "UI/Visual";
    BugCategory["VALIDATION"] = "Form Validation";
    BugCategory["ACCESSIBILITY"] = "Accessibility";
    BugCategory["PERFORMANCE"] = "Performance";
    BugCategory["API_INTEGRATION"] = "API Integration";
    BugCategory["MOBILE_TABLET"] = "Mobile/Tablet";
    BugCategory["BROWSER_COMPATIBILITY"] = "Browser Compatibility";
    BugCategory["NAVIGATION"] = "Navigation/Flow";
    BugCategory["STATE_MANAGEMENT"] = "State Management";
    BugCategory["SACRED_GEOMETRY"] = "Sacred Geometry Implementation";
})(BugCategory || (exports.BugCategory = BugCategory = {}));
/**
 * Booking step identifiers
 */
var BookingStepId;
(function (BookingStepId) {
    BookingStepId["SERVICE_SELECTION"] = "service-selection";
    BookingStepId["DATE_SELECTION"] = "date-selection";
    BookingStepId["CLIENT_INFORMATION"] = "client-information";
    BookingStepId["CONFIRMATION"] = "confirmation";
})(BookingStepId || (exports.BookingStepId = BookingStepId = {}));
/**
 * Class for managing bug tracking during testing
 */
var BugTracker = /** @class */ (function () {
    function BugTracker(outputDir) {
        if (outputDir === void 0) { outputDir = './bug-reports'; }
        this.bugs = [];
        this.outputDir = outputDir;
        // Create directory if it doesn't exist
        if (typeof window === 'undefined' && fs_1.default.existsSync) {
            if (!fs_1.default.existsSync(outputDir)) {
                fs_1.default.mkdirSync(outputDir, { recursive: true });
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
    BugTracker.prototype.detectBrowser = function () {
        if (typeof window === 'undefined')
            return 'Node.js';
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf('Firefox') > -1)
            return 'Firefox';
        if (userAgent.indexOf('Chrome') > -1)
            return 'Chrome';
        if (userAgent.indexOf('Safari') > -1)
            return 'Safari';
        if (userAgent.indexOf('Edge') > -1)
            return 'Edge';
        if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1)
            return 'Internet Explorer';
        return 'Unknown';
    };
    /**
     * Detect browser version
     */
    BugTracker.prototype.detectBrowserVersion = function () {
        if (typeof window === 'undefined')
            return 'N/A';
        var userAgent = navigator.userAgent;
        var match;
        // Chrome
        match = userAgent.match(/Chrome\/(\d+\.\d+)/);
        if (match)
            return match[1];
        // Firefox
        match = userAgent.match(/Firefox\/(\d+\.\d+)/);
        if (match)
            return match[1];
        // Safari
        match = userAgent.match(/Version\/(\d+\.\d+).*Safari/);
        if (match)
            return match[1];
        // Edge
        match = userAgent.match(/Edge\/(\d+\.\d+)/);
        if (match)
            return match[1];
        return 'Unknown';
    };
    /**
     * Detect operating system
     */
    BugTracker.prototype.detectOS = function () {
        if (typeof window === 'undefined') {
            return process.platform;
        }
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf('Win') > -1)
            return 'Windows';
        if (userAgent.indexOf('Mac') > -1)
            return 'macOS';
        if (userAgent.indexOf('Linux') > -1)
            return 'Linux';
        if (userAgent.indexOf('Android') > -1)
            return 'Android';
        if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1)
            return 'iOS';
        return 'Unknown';
    };
    /**
     * Set current test environment
     */
    BugTracker.prototype.setTestEnvironment = function (environment) {
        this.currentTestEnvironment = __assign(__assign({}, this.currentTestEnvironment), environment);
        // Update viewport if in browser
        if (typeof window !== 'undefined' && !environment.viewport) {
            this.currentTestEnvironment.viewport = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    };
    /**
     * Generate a unique ID for a bug report
     */
    BugTracker.prototype.generateBugId = function () {
        var timestamp = Date.now();
        var random = Math.floor(Math.random() * 1000);
        return "BUG-".concat(timestamp, "-").concat(random);
    };
    /**
     * Report a new bug
     */
    BugTracker.prototype.reportBug = function (bugData) {
        var now = new Date().toISOString();
        var bug = __assign(__assign({ id: this.generateBugId() }, bugData), { status: 'open', environment: this.currentTestEnvironment, createdAt: now, updatedAt: now });
        this.bugs.push(bug);
        this.saveBugReport(bug);
        return bug;
    };
    /**
     * Update an existing bug report
     */
    BugTracker.prototype.updateBug = function (bugId, updates) {
        var index = this.bugs.findIndex(function (bug) { return bug.id === bugId; });
        if (index === -1)
            return null;
        var updatedBug = __assign(__assign(__assign({}, this.bugs[index]), updates), { updatedAt: new Date().toISOString() });
        // If status changed to fixed, update fixedAt
        if (updates.status === 'fixed' && this.bugs[index].status !== 'fixed') {
            updatedBug.fixedAt = new Date().toISOString();
        }
        this.bugs[index] = updatedBug;
        this.saveBugReport(updatedBug);
        return updatedBug;
    };
    /**
     * Save a bug report to file
     */
    BugTracker.prototype.saveBugReport = function (bug) {
        // Only run in Node.js environment
        if (typeof window === 'undefined' && fs_1.default.writeFileSync) {
            var filePath = path_1.default.join(this.outputDir, "".concat(bug.id, ".json"));
            fs_1.default.writeFileSync(filePath, JSON.stringify(bug, null, 2), 'utf8');
        }
    };
    /**
     * Get all bugs matching specific criteria
     */
    BugTracker.prototype.getBugs = function (filters) {
        if (filters === void 0) { filters = {}; }
        return this.bugs.filter(function (bug) {
            if (filters.category && bug.category !== filters.category)
                return false;
            if (filters.severity && bug.severity !== filters.severity)
                return false;
            if (filters.status && bug.status !== filters.status)
                return false;
            if (filters.bookingStep && bug.bookingStep !== filters.bookingStep)
                return false;
            return true;
        });
    };
    /**
     * Get bug statistics
     */
    BugTracker.prototype.getStatistics = function () {
        var _a, _b;
        var stats = {
            total: this.bugs.length,
            byStatus: {
                open: 0,
                'in-progress': 0,
                fixed: 0,
                verified: 0
            },
            byCategory: Object.values(BugCategory).reduce(function (acc, category) {
                acc[category] = 0;
                return acc;
            }, {}),
            bySeverity: (_a = {},
                _a[BugSeverity.CRITICAL] = 0,
                _a[BugSeverity.HIGH] = 0,
                _a[BugSeverity.MEDIUM] = 0,
                _a[BugSeverity.LOW] = 0,
                _a[BugSeverity.TRIVIAL] = 0,
                _a),
            byBookingStep: (_b = {},
                _b[BookingStepId.SERVICE_SELECTION] = 0,
                _b[BookingStepId.DATE_SELECTION] = 0,
                _b[BookingStepId.CLIENT_INFORMATION] = 0,
                _b[BookingStepId.CONFIRMATION] = 0,
                _b['global'] = 0,
                _b)
        };
        this.bugs.forEach(function (bug) {
            // Count by status
            stats.byStatus[bug.status]++;
            // Count by category
            stats.byCategory[bug.category]++;
            // Count by severity
            stats.bySeverity[bug.severity]++;
            // Count by booking step
            if (bug.bookingStep) {
                stats.byBookingStep[bug.bookingStep]++;
            }
            else {
                stats.byBookingStep['global']++;
            }
        });
        return stats;
    };
    /**
     * Generate a detailed bug report in markdown format
     */
    BugTracker.prototype.generateReport = function () {
        var _this = this;
        var stats = this.getStatistics();
        var now = new Date().toISOString().split('T')[0];
        var report = "# Booking System Bug Report\n\n";
        report += "Generated on: ".concat(now, "\n\n");
        // Summary section
        report += "## Summary\n\n";
        report += "- Total bugs: ".concat(stats.total, "\n");
        report += "- Open: ".concat(stats.byStatus.open, "\n");
        report += "- In progress: ".concat(stats.byStatus['in-progress'], "\n");
        report += "- Fixed: ".concat(stats.byStatus.fixed, "\n");
        report += "- Verified: ".concat(stats.byStatus.verified, "\n\n");
        // Critical bugs section
        var criticalBugs = this.getBugs({ severity: BugSeverity.CRITICAL });
        if (criticalBugs.length > 0) {
            report += "## Critical Bugs (".concat(criticalBugs.length, ")\n\n");
            criticalBugs.forEach(function (bug) {
                report += "### ".concat(bug.title, " (").concat(bug.id, ")\n\n");
                report += "- **Status:** ".concat(bug.status, "\n");
                report += "- **Category:** ".concat(bug.category, "\n");
                report += "- **Affected Components:** ".concat(bug.affectedComponents.join(', '), "\n");
                report += "- **Description:** ".concat(bug.description, "\n\n");
                if (bug.bookingStep) {
                    report += "- **Booking Step:** ".concat(bug.bookingStep, "\n\n");
                }
                report += "**Steps to Reproduce:**\n\n";
                bug.steps.forEach(function (step, index) {
                    report += "".concat(index + 1, ". ").concat(step, "\n");
                });
                report += "\n";
                report += "**Expected Result:** ".concat(bug.expectedResult, "\n\n");
                report += "**Actual Result:** ".concat(bug.actualResult, "\n\n");
                if (bug.fixPR) {
                    report += "**Fix PR:** ".concat(bug.fixPR, "\n\n");
                }
                report += "---\n\n";
            });
        }
        // Open bugs by category
        report += "## Open Bugs by Category\n\n";
        Object.values(BugCategory).forEach(function (category) {
            var categoryBugs = _this.getBugs({ category: category, status: 'open' });
            if (categoryBugs.length > 0) {
                report += "### ".concat(category, " (").concat(categoryBugs.length, ")\n\n");
                categoryBugs.forEach(function (bug) {
                    report += "- **".concat(bug.title, "** (").concat(bug.id, ") - ").concat(BugSeverity[bug.severity], " severity\n");
                    report += "  ".concat(bug.description.substring(0, 100)).concat(bug.description.length > 100 ? '...' : '', "\n\n");
                });
            }
        });
        return report;
    };
    /**
     * Save the complete bug report
     */
    BugTracker.prototype.saveReport = function () {
        // Only run in Node.js environment
        if (typeof window === 'undefined' && fs_1.default.writeFileSync) {
            var report = this.generateReport();
            var now = new Date().toISOString().split('T')[0];
            var filePath = path_1.default.join(this.outputDir, "bug-report-".concat(now, ".md"));
            fs_1.default.writeFileSync(filePath, report, 'utf8');
            console.log("Bug report saved to ".concat(filePath));
        }
    };
    /**
     * Export all bug data to JSON file
     */
    BugTracker.prototype.exportBugsToJson = function () {
        // Only run in Node.js environment
        if (typeof window === 'undefined' && fs_1.default.writeFileSync) {
            var filePath = path_1.default.join(this.outputDir, 'all-bugs.json');
            fs_1.default.writeFileSync(filePath, JSON.stringify(this.bugs, null, 2), 'utf8');
            console.log("All bugs exported to ".concat(filePath));
        }
    };
    /**
     * Helper method to quickly report common validation bugs
     */
    BugTracker.prototype.reportValidationBug = function (field, bookingStep, description, expectedResult, actualResult, severity) {
        if (severity === void 0) { severity = BugSeverity.MEDIUM; }
        return this.reportBug({
            title: "Validation error for ".concat(field, " in ").concat(bookingStep, " step"),
            description: description,
            category: BugCategory.VALIDATION,
            severity: severity,
            steps: [
                "Navigate to the ".concat(bookingStep, " step"),
                "Attempt to input invalid data for ".concat(field),
                "Observe validation behavior"
            ],
            expectedResult: expectedResult,
            actualResult: actualResult,
            affectedComponents: ["".concat(bookingStep, "-step"), 'validation'],
            bookingStep: bookingStep
        });
    };
    /**
     * Helper method to quickly report common UI/visual bugs
     */
    BugTracker.prototype.reportUIBug = function (component, bookingStep, description, expectedResult, actualResult, severity, environment) {
        if (severity === void 0) { severity = BugSeverity.MEDIUM; }
        // Update environment if provided
        if (environment) {
            this.setTestEnvironment(environment);
        }
        return this.reportBug({
            title: "UI issue in ".concat(component).concat(bookingStep ? " (".concat(bookingStep, " step)") : ''),
            description: description,
            category: BugCategory.UI_VISUAL,
            severity: severity,
            steps: [
                bookingStep ? "Navigate to the ".concat(bookingStep, " step") : 'Open the booking interface',
                "Observe the ".concat(component, " component")
            ],
            expectedResult: expectedResult,
            actualResult: actualResult,
            affectedComponents: [component],
            bookingStep: bookingStep
        });
    };
    /**
     * Helper method to quickly report common accessibility bugs
     */
    BugTracker.prototype.reportAccessibilityBug = function (issue, bookingStep, description, expectedResult, actualResult, severity) {
        if (severity === void 0) { severity = BugSeverity.HIGH; }
        return this.reportBug({
            title: "Accessibility issue: ".concat(issue),
            description: description,
            category: BugCategory.ACCESSIBILITY,
            severity: severity,
            steps: [
                bookingStep ? "Navigate to the ".concat(bookingStep, " step") : 'Open the booking interface',
                "Test with screen reader or keyboard navigation"
            ],
            expectedResult: expectedResult,
            actualResult: actualResult,
            affectedComponents: ['accessibility'],
            bookingStep: bookingStep
        });
    };
    return BugTracker;
}());
exports.BugTracker = BugTracker;
// Instance for use in testing
exports.bugTracker = new BugTracker();
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
