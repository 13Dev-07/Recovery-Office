"use strict";
/**
 * Pages Export File
 *
 * This file provides centralized exports for all page components,
 * making it easier to import them throughout the application.
 *
 * Each page follows sacred geometry principles in its layout and design.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accessibility = exports.HIPAA = exports.Terms = exports.Privacy = exports.NotFound = exports.Booking = exports.FAQ = exports.Blog = exports.Contact = exports.About = exports.Services = exports.Home = void 0;
// Main Pages
var Home_1 = require("./Home");
Object.defineProperty(exports, "Home", { enumerable: true, get: function () { return Home_1.default; } });
var Services_1 = require("./Services");
Object.defineProperty(exports, "Services", { enumerable: true, get: function () { return Services_1.default; } });
var About_1 = require("./About");
Object.defineProperty(exports, "About", { enumerable: true, get: function () { return About_1.default; } });
var Contact_1 = require("./Contact");
Object.defineProperty(exports, "Contact", { enumerable: true, get: function () { return Contact_1.default; } });
var Blog_1 = require("./Blog");
Object.defineProperty(exports, "Blog", { enumerable: true, get: function () { return Blog_1.default; } });
var FAQ_1 = require("./FAQ");
Object.defineProperty(exports, "FAQ", { enumerable: true, get: function () { return FAQ_1.default; } });
var Booking_1 = require("./Booking");
Object.defineProperty(exports, "Booking", { enumerable: true, get: function () { return Booking_1.default; } });
var NotFound_1 = require("./NotFound");
Object.defineProperty(exports, "NotFound", { enumerable: true, get: function () { return NotFound_1.default; } });
// Legal Pages
__exportStar(require("./legal"), exports);
var Privacy_1 = require("./Privacy");
Object.defineProperty(exports, "Privacy", { enumerable: true, get: function () { return Privacy_1.default; } });
var Terms_1 = require("./Terms");
Object.defineProperty(exports, "Terms", { enumerable: true, get: function () { return Terms_1.default; } });
var HIPAA_1 = require("./HIPAA");
Object.defineProperty(exports, "HIPAA", { enumerable: true, get: function () { return HIPAA_1.default; } });
var Accessibility_1 = require("./Accessibility");
Object.defineProperty(exports, "Accessibility", { enumerable: true, get: function () { return Accessibility_1.default; } });
