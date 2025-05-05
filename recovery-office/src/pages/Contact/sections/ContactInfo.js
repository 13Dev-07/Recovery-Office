"use strict";
/**
 * ContactInfo Section Component
 *
 * Component for displaying office contact information with sacred geometry principles.
 * Features responsive layout and botanical elements.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../design-system/components/layout");
var data_display_1 = require("../design-system/components/data-display");
var SectionTitle_1 = require("../../../design-system/components/typography/SectionTitle");
var typography_1 = require("../design-system/components/typography");
var button_1 = require("../design-system/components/button");
var botanical_1 = require("../design-system/botanical");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var animation_1 = require("../../animation");
// Default office data
var defaultOffice = {
    id: 'main',
    name: 'Main Office',
    address: ['123 Harmony Way, Suite 618', 'Golden Springs, CA 91234'],
    email: 'info@recoveryoffice.com',
    phone: '(555) 123-4567',
    fax: '(555) 123-4568',
    hours: {
        'Monday - Friday': '9:00 AM - 6:00 PM',
        'Saturday': '10:00 AM - 3:00 PM',
        'Sunday': 'Closed'
    }
};
// Default social links
var defaultSocialLinks = [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/recovery-office' },
    { platform: 'Twitter', url: 'https://twitter.com/recovery_office' },
    { platform: 'Instagram', url: 'https://instagram.com/recovery_office' }
];
var ContactInfo = function (_a) {
    var _b = _a.office, office = _b === void 0 ? defaultOffice : _b, _c = _a.socialLinks, socialLinks = _c === void 0 ? defaultSocialLinks : _c;
    return (<animation_1.FadeIn>
      <layout_1.Box>
        <SectionTitle_1.SectionTitle title="Contact Information" subtitle="Ways to reach us" size="medium" align="left" decoratorBefore={<botanical_1.VesicaPiscis size="sm" opacity={0.3}/>}/>
        
        <layout_1.Box mt={4}>
          <data_display_1.Card elevation={2} padding={"".concat(sacred_geometry_1.PHI * 24, "px")} borderRadius="8px" style={{
            backgroundColor: 'white',
            borderLeft: "4px solid #4a6eb3"
        }}>
            <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
              <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                {office.name}
              </typography_1.Heading>
              {office.address.map(function (line, index) { return (<typography_1.Text key={"address-".concat(index)} variant="body2">
                  {line}{index < office.address.length - 1 ? <br /> : null}
                </typography_1.Text>); })}
            </layout_1.Box>
            
            <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
              <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                Contact Details
              </typography_1.Heading>
              <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                <typography_1.Text variant="subtitle2">Email:</typography_1.Text>
                <typography_1.Text variant="body2">
                  <a href={"mailto:".concat(office.email)} style={{ color: '#4a6eb3' }} aria-label={"Email us at ".concat(office.email)}>
                    {office.email}
                  </a>
                </typography_1.Text>
              </layout_1.Box>
              <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                <typography_1.Text variant="subtitle2">Phone:</typography_1.Text>
                <typography_1.Text variant="body2">
                  <a href={"tel:".concat(office.phone.replace(/[^0-9]/g, ''))} style={{ color: '#4a6eb3' }} aria-label={"Call us at ".concat(office.phone)}>
                    {office.phone}
                  </a>
                </typography_1.Text>
              </layout_1.Box>
              {office.fax && (<layout_1.Box>
                  <typography_1.Text variant="subtitle2">Fax:</typography_1.Text>
                  <typography_1.Text variant="body2">{office.fax}</typography_1.Text>
                </layout_1.Box>)}
            </layout_1.Box>
            
            <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
              <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                Hours of Operation
              </typography_1.Heading>
              {Object.entries(office.hours).map(function (_a, index) {
            var day = _a[0], hours = _a[1];
            return (<layout_1.Box key={day} marginBottom={index === Object.keys(office.hours).length - 1 ? 0 : "".concat(sacred_geometry_1.PHI * 4, "px")}>
                  <typography_1.Text variant="subtitle2" display="inline" marginRight={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    {day}:
                  </typography_1.Text>
                  <typography_1.Text variant="body2" display="inline">
                    {hours}
                  </typography_1.Text>
                </layout_1.Box>);
        })}
            </layout_1.Box>
            
            {socialLinks.length > 0 && (<layout_1.Box>
                <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                  Follow Us
                </typography_1.Heading>
                <layout_1.Box display="flex" gap={"".concat(sacred_geometry_1.PHI * 8, "px")} flexWrap="wrap">
                  {socialLinks.map(function (link) { return (<button_1.Button key={link.platform} variant="outline" size="small" as="a" href={link.url} target="_blank" rel="noopener noreferrer" aria-label={"Follow us on ".concat(link.platform)}>
                      {link.platform}
                    </button_1.Button>); })}
                </layout_1.Box>
              </layout_1.Box>)}
          </data_display_1.Card>
        </layout_1.Box>
      </layout_1.Box>
    </animation_1.FadeIn>);
};
exports.default = ContactInfo;
