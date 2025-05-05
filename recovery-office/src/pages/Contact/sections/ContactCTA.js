"use strict";
/**
 * ContactCTA Section Component
 *
 * Call-to-action section for the Contact page encouraging users to book a consultation.
 * Features gradient background and sacred geometry proportions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../../../design-system/components/layout");
var Section_1 = require("../../../design-system/components/layout/Section");
var typography_1 = require("../../../design-system/components/typography");
var button_1 = require("../../../design-system/components/button");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var animation_1 = require("../../../animation");
var ContactCTA = function (_a) {
    var _b = _a.heading, heading = _b === void 0 ? "Ready to Experience Our Approach?" : _b, _c = _a.subheading, subheading = _c === void 0 ? "Schedule a consultation today and discover how our sacred geometry-based approach can help you achieve balance and harmony." : _c, _d = _a.buttonText, buttonText = _d === void 0 ? "Book a Consultation" : _d, _e = _a.buttonLink, buttonLink = _e === void 0 ? "/booking" : _e, _f = _a.backgroundGradient, backgroundGradient = _f === void 0 ? "linear-gradient(135deg, #4a6eb3 0%, #2a4073 100%)" : _f;
    return (<animation_1.ScrollReveal>
      <Section_1.Section style={{
            background: backgroundGradient,
            color: 'white',
            paddingTop: "".concat(sacred_geometry_1.PHI * 32, "px"),
            paddingBottom: "".concat(sacred_geometry_1.PHI * 32, "px")
        }}>
        <layout_1.Container>
          <layout_1.Box textAlign="center">
            <typography_1.Heading as="h2" variant="h2" style={{
            color: 'white',
            marginBottom: "".concat(sacred_geometry_1.PHI * 16, "px")
        }}>
              {heading}
            </typography_1.Heading>
            <typography_1.Text variant="body1" style={{
            maxWidth: "".concat(sacred_geometry_1.PHI * 500, "px"),
            margin: '0 auto',
            marginBottom: "".concat(sacred_geometry_1.PHI * 24, "px")
        }}>
              {subheading}
            </typography_1.Text>
            <button_1.Button variant="accent" size="lg" href={buttonLink} aria-label={buttonText}>
              {buttonText}
            </button_1.Button>
          </layout_1.Box>
        </layout_1.Container>
      </Section_1.Section>
    </animation_1.ScrollReveal>);
};
exports.default = ContactCTA;
