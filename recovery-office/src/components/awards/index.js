"use strict";
/**
 * Awards Components Exports
 *
 * This file exports all award-related components and their associated types.
 * These components are used to display awards, certifications, and recognitions
 * throughout the Recovery Office website.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwardsSection = exports.AwardsShowcase = exports.AwardBadge = void 0;
var AwardBadge_1 = require("./AwardBadge");
exports.AwardBadge = AwardBadge_1.default;
var AwardsShowcase_1 = require("./AwardsShowcase");
exports.AwardsShowcase = AwardsShowcase_1.default;
var AwardsSection_1 = require("./AwardsSection");
exports.AwardsSection = AwardsSection_1.default;
// Default export
exports.default = {
    AwardBadge: AwardBadge_1.default,
    AwardsShowcase: AwardsShowcase_1.default,
    AwardsSection: AwardsSection_1.default
};
