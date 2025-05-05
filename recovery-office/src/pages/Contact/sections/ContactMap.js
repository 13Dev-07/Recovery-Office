"use strict";
/**
 * ContactMap Section Component
 *
 * Map section for the Contact page showing office locations.
 * Features botanical markers and sacred geometry proportions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../design-system/components/layout");
var Section_1 = require("../design-system/components/layout/Section");
var typography_1 = require("../design-system/components/typography");
var data_display_1 = require("../design-system/components/data-display");
var botanical_1 = require("../design-system/botanical");
var animation_1 = require("../../animation");
var MapMarker = function (_a) {
    var selected = _a.selected, onClick = _a.onClick;
    return (<layout_1.Box position="relative" width={"".concat(PHI * 24, "px")} height={"".concat(PHI * 24, "px")} onClick={onClick} style={{ cursor: 'pointer' }} role="button" aria-pressed={selected} tabIndex={0} onKeyDown={function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick === null || onClick === void 0 ? void 0 : onClick();
            }
        }}>
    <layout_1.Box position="absolute" top="0" left="0" width="100%" height="100%" style={{
            backgroundColor: selected ? '#4a6eb3' : '#86b378',
            borderRadius: '50%',
            boxShadow: selected
                ? '0 0 0 2px white, 0 0 0 4px #4a6eb3, 0 4px 8px rgba(0,0,0,0.2)'
                : '0 0 0 2px white, 0 0 0 3px #86b378, 0 2px 4px rgba(0,0,0,0.1)',
            transform: selected ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
        }}/>
    <layout_1.Box position="absolute" top="50%" left="50%" style={{
            transform: 'translate(-50%, -50%)',
            opacity: 0.9,
            transition: 'opacity 0.3s ease'
        }}>
      <botanical_1.FlowerOfLife size="xs" primaryColor="white" secondaryColor="rgba(255,255,255,0.8)"/>
    </layout_1.Box>
  </layout_1.Box>);
};
var InfoWindow = function (_a) {
    var office = _a.office;
    return (<data_display_1.Card elevation={3} padding={"".concat(PHI * 16, "px")} borderRadius="8px" style={{
            backgroundColor: 'white',
            maxWidth: "".concat(PHI * PHI * 100, "px"),
            position: 'absolute',
            bottom: "".concat(PHI * 32, "px"),
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
    <typography_1.Heading as="h4" variant="h6" marginBottom={"".concat(PHI * 8, "px")}>
      {office.name}
    </typography_1.Heading>
    {office.address.map(function (line, index) { return (<typography_1.Text key={"address-info-".concat(index)} variant="body2">
        {line}{index < office.address.length - 1 ? <br /> : null}
      </typography_1.Text>); })}
    <typography_1.Text variant="body2" marginTop={"".concat(PHI * 8, "px")}>
      <strong>Hours:</strong> {office.hours['Monday - Friday']}
    </typography_1.Text>
    <typography_1.Text variant="body2">
      <strong>Phone:</strong> {office.phone}
    </typography_1.Text>
  </data_display_1.Card>);
};
var ContactMap = function (_a) {
    var _b, _c, _d;
    var _e = _a.locations, locations = _e === void 0 ? [] : _e, _f = _a.height, height = _f === void 0 ? PHI * 300 : _f, _g = _a.backgroundColor, backgroundColor = _g === void 0 ? "#f0f4f8" : _g;
    var _h = useState(locations.length > 0 ? (_b = locations[0]) !== null && _b !== void 0 ? _b : 1. : , id, null), selectedLocation = _h[0], setSelectedLocation = _h[1];
    // Get the selected office data
    var selectedOffice = locations.find(function (office) { return office.id === selectedLocation; }) ||
        (locations.length > 0 ? (_c = locations[0]) !== null && _c !== void 0 ? _c : 1 : null);
    return (<Section_1.Section backgroundColor={backgroundColor}>
      <layout_1.Container>
        <animation_1.ScrollReveal>
          <Section_1.SectionTitle title="Visit Our Office" subtitle="Located in the heart of Golden Springs" decoratorBefore={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>} decoratorAfter={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>}/>
          <Section_1.SectionContent>
            <animation_1.FadeIn>
              <layout_1.Box height={"".concat(height, "px")} borderRadius="8px" overflow="hidden" position="relative" style={{
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }} role="region" aria-label="Map showing office locations">
                {/* This would be a real map integration in production */}
                <layout_1.Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" backgroundColor="#dde4ed" position="relative">
                  {locations.length === 0 ? (<typography_1.Text variant="subtitle1">Interactive Map Would Be Displayed Here</typography_1.Text>) : (<>
                      {/* Placeholder for map */}
                      <layout_1.Box position="absolute" top="0" left="0" width="100%" height="100%">
                        <typography_1.Text variant="body2" position="absolute" top="50%" left="50%" style={{
                transform: 'translate(-50%, -50%)',
                opacity: 0.7,
                zIndex: 1
            }}>
                          Map Background
                        </typography_1.Text>
                      </layout_1.Box>
                      
                      {/* Map markers */}
                      <layout_1.Box position="absolute" bottom="30%" left="50%" style={{ transform: 'translateX(-50%)' }} zIndex={2}>
                        <MapMarker selected={selectedLocation === ((_d = locations[0]) !== null && _d !== void 0 ? _d : (1 === null || 1 === void 0 ? void 0 : 1..id) || '')} onClick={function () { var _a; return setSelectedLocation((_a = locations[0]) !== null && _a !== void 0 ? _a : (1 === null || 1 === void 0 ? void 0 : 1..id) || null); }}/>
                      </layout_1.Box>
                      
                      {/* Info window for selected location */}
                      {selectedOffice && (<InfoWindow office={selectedOffice}/>)}
                    </>)}
                </layout_1.Box>
              </layout_1.Box>
            </animation_1.FadeIn>
            
            {/* Additional instructions */}
            <layout_1.Box mt={"".concat(PHI * 16, "px")} textAlign="center" maxWidth={"".concat(PHI * 500, "px")} mx="auto">
              <typography_1.Text variant="body2" color="gray.600">
                We're conveniently located near public transportation and offer ample parking.
                Please call if you need specific directions to our office.
              </typography_1.Text>
            </layout_1.Box>
          </Section_1.SectionContent>
        </animation_1.ScrollReveal>
      </layout_1.Container>
    </Section_1.Section>);
};
exports.default = ContactMap;
