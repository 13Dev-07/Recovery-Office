"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var footer_1 = require("../design-system/components/footer");
var Box_1 = require("../design-system/components/layout/Box");
var Text_1 = require("../design-system/components/typography/Text");
var botanical_1 = require("../design-system/components/botanical");
/**
 * Example demonstrating the use of all Footer components together
 * with sacred geometry principles for spacing and proportions.
 */
var FooterExample = function () {
    // Sample navigation links
    var primaryLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Contact', href: '/contact' }
    ];
    var resourceLinks = [
        { label: 'Recovery Blog', href: '/blog' },
        { label: 'Healing Resources', href: '/resources' },
        { label: 'Sacred Geometry Guide', href: '/sacred-geometry' },
        { label: 'Research Papers', href: '/research' }
    ];
    var legalLinks = [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Accessibility', href: '/accessibility' }
    ];
    // Sample social media links
    var socialLinks = [
        {
            platform: 'facebook',
            href: 'https://facebook.com/recoveryoffice',
            label: 'Recovery Office on Facebook',
            icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
      </svg>
        },
        {
            platform: 'twitter',
            href: 'https://twitter.com/recoveryoffice',
            label: 'Recovery Office on Twitter',
            icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
      </svg>
        },
        {
            platform: 'instagram',
            href: 'https://instagram.com/recoveryoffice',
            label: 'Recovery Office on Instagram',
            icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
        },
        {
            platform: 'linkedin',
            href: 'https://linkedin.com/company/recoveryoffice',
            label: 'Recovery Office on LinkedIn',
            icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
        }
    ];
    // Logo component
    var Logo = function () { return (<Box_1.Box mb={5}>
      <Text_1.Text as="h2" variant="h3" style={{ color: 'white' }}>
        Recovery Office
      </Text_1.Text>
      <Box_1.Box mt={2}>
        <Text_1.Text variant="body2" style={{ opacity: 0.8 }}>
          Healing through sacred geometry
        </Text_1.Text>
      </Box_1.Box>
    </Box_1.Box>); };
    // Handle newsletter subscription
    var handleNewsletterSubmit = function (email) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Simulate API call
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        console.log("Subscribed email: ".concat(email));
                        resolve();
                    }, 1000);
                })];
        });
    }); };
    return (<footer_1.Footer variant="dark" withBotanical={true} botanicalType="flowerOfLife" botanicalPosition="topRight" withWaveBorder={true} withLogo={true} logo={<Logo />} copyrightText="Recovery Office. All rights reserved." bottomContent={<Box_1.Box display="flex" flexDirection="row">
          {legalLinks.map(function (link, index) { return (<Box_1.Box key={"legal-".concat(index)} mr={index < legalLinks.length - 1 ? 3 : 0}>
              <Text_1.Text variant="body2" style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                <a href={link.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {link.label}
                </a>
              </Text_1.Text>
            </Box_1.Box>); })}
        </Box_1.Box>}>
      {/* First column - About */}
      <Box_1.Box>
        <Text_1.Text variant="body2" style={{ marginBottom: '16px' }}>
          Recovery Office is dedicated to providing holistic healing 
          through the application of sacred geometry principles in therapeutic practices.
          Our approach combines ancient wisdom with modern techniques for optimal recovery.
        </Text_1.Text>
        
        <footer_1.FooterSocial title="Connect with us" links={socialLinks} direction="horizontal" animated={true} circular={true}/>
      </Box_1.Box>

      {/* Second column - Quick Links */}
      <footer_1.FooterLinks title="Navigation" links={primaryLinks} spacing="md" withLinkDecoration={true}/>

      {/* Third column - Resources */}
      <footer_1.FooterLinks title="Resources" links={resourceLinks} description="Explore our healing resources and educational content" spacing="md" withLinkDecoration={true} linkIcon={<botanical_1.OliveBranch width={12} height={12} opacity={0.7}/>}/>

      {/* Fourth column - Newsletter */}
      <footer_1.FooterNewsletter title="Stay Connected" description="Subscribe to receive updates on new healing methodologies and events." placeholder="Your email address" buttonText="Subscribe" onSubmit={handleNewsletterSubmit} successMessage="Thank you! You're now subscribed to our newsletter.">
        <Text_1.Text variant="body2" style={{ opacity: 0.6, fontSize: '0.8rem' }}>
          We respect your privacy and will never share your information.
          You can unsubscribe at any time.
        </Text_1.Text>
      </footer_1.FooterNewsletter>
    </footer_1.Footer>);
};
exports.default = FooterExample;
