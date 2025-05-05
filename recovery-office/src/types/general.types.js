"use strict";
/**
 * General Types
 *
 * This file contains shared type definitions used throughout the application.
 * These types incorporate sacred geometry principles where applicable.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSacredRatioMeasurement = exports.isResponsiveValue = void 0;
// Type guard for responsive value
var isResponsiveValue = function (value) {
    return typeof value === 'object' && value !== null && 'base' in value;
};
exports.isResponsiveValue = isResponsiveValue;
// Type guard for sacred ratio measurement
var isSacredRatioMeasurement = function (measurement) {
    return measurement.unit === 'ratio';
};
exports.isSacredRatioMeasurement = isSacredRatioMeasurement;
