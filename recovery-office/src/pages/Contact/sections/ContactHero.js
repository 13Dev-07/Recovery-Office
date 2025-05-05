"use strict";
/**
 * ContactHero Section Component
 *
 * Hero section for the Contact page following sacred geometry principles.
 * Features background image with overlay and botanical decorations.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var feature_sections_1 = require("../design-system/components/feature-sections");
var typography_1 = require("../design-system/components/typography");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var ContactHero = function (_a) {
    var _b = _a.backgroundImage, backgroundImage = _b === void 0 ? 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80' : _b;
    return (<feature_sections_1.Hero heading="Contact Us" subheading="Connect with our team of specialists" background={{
            image: backgroundImage,
            overlay: 'rgba(21, 45, 85, 0.7)'
        }} align="center" minHeight="50vh" // Height follows golden ratio proportions of the viewport
     animated={true} botanical={{
            type: 'flowerOfLife',
            position: 'bottomRight',
            opacity: 0.15,
            animated: true
        }}>
      <typography_1.Text variant="body1" style={{
            maxWidth: "".concat(sacred_geometry_1.PHI * 400, "px"), // Width using golden ratio
            margin: '0 auto',
            color: 'white'
        }}>
        Reach out to us with any questions about our services or to schedule 
        a consultation with one of our specialists.
      </typography_1.Text>
    </feature_sections_1.Hero>);
};
exports.default = ContactHero;
