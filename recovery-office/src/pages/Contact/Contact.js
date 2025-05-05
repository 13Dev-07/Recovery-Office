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
var feature_sections_1 = require("../design-system/components/feature-sections");
var botanical_1 = require("../design-system/botanical");
var layout_1 = require("../design-system/components/layout");
var Section_1 = require("../design-system/components/layout/Section");
var typography_1 = require("../design-system/components/typography");
var data_display_1 = require("../design-system/components/data-display");
var form_1 = require("../design-system/components/form");
var button_1 = require("../design-system/components/button");
var animation_1 = require("../../animation");
var sacred_geometry_1 = require("../constants/sacred-geometry");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("zod");
/**
 * Contact Page Component
 *
 * This component represents the contact page of the Recovery Office website.
 * It includes a contact form and office information.
 * Design follows sacred geometry principles throughout.
 */
var ContactPage = function () {
    // Hero section background
    var heroBackgroundUrl = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80';
    // Form validation schema using Zod
    var contactFormSchema = zod_1.z.object({
        name: zod_1.z.string().min(2, "Name must be at least 2 characters"),
        email: zod_1.z.string().email("Please enter a valid email address"),
        phone: zod_1.z.string().optional(),
        subject: zod_1.z.string().min(3, "Please select a subject"),
        message: zod_1.z.string().min(10, "Message must be at least 10 characters")
    });
    // React Hook Form setup
    var _a = (0, react_hook_form_1.useForm)(), register = _a.register, handleSubmit = _a.handleSubmit, _b = _a.formState, errors = _b.errors, isSubmitting = _b.isSubmitting, reset = _a.reset;
    // Form submission handler
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Simulating API call with timeout
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    // Simulating API call with timeout
                    _a.sent();
                    console.log('Form submitted:', data);
                    // Reset form after submission
                    reset();
                    // Show success message (in a real app, use a toast notification)
                    alert('Thank you for your message. We will get back to you soon.');
                    return [2 /*return*/];
            }
        });
    }); };
    return (<layout_1.Box as="main">
      {/* Hero Section */}
      <feature_sections_1.Hero heading="Contact Us" subheading="Connect with our team of specialists" background={{
            image: heroBackgroundUrl,
            overlay: 'rgba(21, 45, 85, 0.7)'
        }} align="center" minHeight="50vh" animated={true} botanical={{
            type: 'flowerOfLife',
            position: 'bottomRight',
            opacity: 0.15,
            animated: true
        }}>
        <typography_1.Text variant="body1" style={{ maxWidth: "".concat(sacred_geometry_1.PHI * 400, "px"), margin: '0 auto', color: 'white' }}>
          Reach out to us with any questions about our services or to schedule 
          a consultation with one of our specialists.
        </typography_1.Text>
      </feature_sections_1.Hero>

      {/* Contact Form Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#ffffff">
          <layout_1.Container>
            <layout_1.Grid gridTemplateColumns={["1fr", null, "".concat(sacred_geometry_1.PHI, "fr ").concat(sacred_geometry_1.PHI_INVERSE, "fr")]} gap={"".concat(sacred_geometry_1.PHI * 32, "px")} padding={"".concat(sacred_geometry_1.PHI * 24, "px 0")}>
              {/* Contact Form */}
              <layout_1.Box>
                <Section_1.SectionTitle title="Send Us a Message" subtitle="We'll respond within 24 hours" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
                
                <layout_1.Box as="form" onSubmit={handleSubmit(onSubmit)} mt={4}>
                  <layout_1.Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                    <form_1.FormControl isInvalid={!!errors.name}>
                      <form_1.FormLabel htmlFor="name">Name</form_1.FormLabel>
                      <form_1.Input id="name" placeholder="Your full name" {...register('name')}/>
                      {errors.name && <form_1.FormError>{errors.name.message}</form_1.FormError>}
                    </form_1.FormControl>

                    <form_1.FormControl isInvalid={!!errors.email}>
                      <form_1.FormLabel htmlFor="email">Email</form_1.FormLabel>
                      <form_1.Input id="email" placeholder="Your email address" type="email" {...register('email')}/>
                      {errors.email && <form_1.FormError>{errors.email.message}</form_1.FormError>}
                    </form_1.FormControl>
                  </layout_1.Grid>

                  <layout_1.Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={"".concat(sacred_geometry_1.PHI * 16, "px")} mt={4}>
                    <form_1.FormControl isInvalid={!!errors.phone}>
                      <form_1.FormLabel htmlFor="phone">Phone (Optional)</form_1.FormLabel>
                      <form_1.Input id="phone" placeholder="Your phone number" {...register('phone')}/>
                      {errors.phone && <form_1.FormError>{errors.phone.message}</form_1.FormError>}
                    </form_1.FormControl>

                    <form_1.FormControl isInvalid={!!errors.subject}>
                      <form_1.FormLabel htmlFor="subject">Subject</form_1.FormLabel>
                      <form_1.Select id="subject" {...register('subject')}>
                        <option value="">Select a subject</option>
                        <option value="consultation">Book a Consultation</option>
                        <option value="services">Services Inquiry</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                      </form_1.Select>
                      {errors.subject && <form_1.FormError>{errors.subject.message}</form_1.FormError>}
                    </form_1.FormControl>
                  </layout_1.Grid>

                  <form_1.FormControl isInvalid={!!errors.message} mt={4}>
                    <form_1.FormLabel htmlFor="message">Message</form_1.FormLabel>
                    <form_1.TextArea id="message" placeholder="How can we help you?" rows={5} {...register('message')}/>
                    {errors.message && <form_1.FormError>{errors.message.message}</form_1.FormError>}
                  </form_1.FormControl>

                  <layout_1.Box mt={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                    <button_1.Button type="submit" variant="primary" size="large" width="100%" isLoading={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button_1.Button>
                  </layout_1.Box>
                </layout_1.Box>
              </layout_1.Box>

              {/* Contact Information */}
              <layout_1.Box>
                <Section_1.SectionTitle title="Contact Information" subtitle="Ways to reach us" size="medium" align="left" decoratorBefore={<botanical_1.VesicaPiscis size="sm" opacity={0.3}/>}/>
                
                <layout_1.Box mt={4}>
                  <data_display_1.Card elevation={2} padding={"".concat(sacred_geometry_1.PHI * 24, "px")} borderRadius="8px" style={{
            backgroundColor: 'white',
            borderLeft: "4px solid #4a6eb3"
        }}>
                    <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                      <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                        Main Office
                      </typography_1.Heading>
                      <typography_1.Text variant="body2">
                        123 Harmony Way, Suite 618<br />
                        Golden Springs, CA 91234
                      </typography_1.Text>
                    </layout_1.Box>
                    
                    <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                      <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                        Contact Details
                      </typography_1.Heading>
                      <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                        <typography_1.Text variant="subtitle2">Email:</typography_1.Text>
                        <typography_1.Text variant="body2">
                          <a href="mailto:info@recoveryoffice.com" style={{ color: '#4a6eb3' }}>
                            info@recoveryoffice.com
                          </a>
                        </typography_1.Text>
                      </layout_1.Box>
                      <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                        <typography_1.Text variant="subtitle2">Phone:</typography_1.Text>
                        <typography_1.Text variant="body2">
                          <a href="tel:+1-555-123-4567" style={{ color: '#4a6eb3' }}>
                            (555) 123-4567
                          </a>
                        </typography_1.Text>
                      </layout_1.Box>
                      <layout_1.Box>
                        <typography_1.Text variant="subtitle2">Fax:</typography_1.Text>
                        <typography_1.Text variant="body2">(555) 123-4568</typography_1.Text>
                      </layout_1.Box>
                    </layout_1.Box>
                    
                    <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                      <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                        Hours of Operation
                      </typography_1.Heading>
                      <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 4, "px")}>
                        <typography_1.Text variant="subtitle2" display="inline" marginRight={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                          Monday - Friday:
                        </typography_1.Text>
                        <typography_1.Text variant="body2" display="inline">
                          9:00 AM - 6:00 PM
                        </typography_1.Text>
                      </layout_1.Box>
                      <layout_1.Box marginBottom={"".concat(sacred_geometry_1.PHI * 4, "px")}>
                        <typography_1.Text variant="subtitle2" display="inline" marginRight={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                          Saturday:
                        </typography_1.Text>
                        <typography_1.Text variant="body2" display="inline">
                          10:00 AM - 3:00 PM
                        </typography_1.Text>
                      </layout_1.Box>
                      <layout_1.Box>
                        <typography_1.Text variant="subtitle2" display="inline" marginRight={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                          Sunday:
                        </typography_1.Text>
                        <typography_1.Text variant="body2" display="inline">
                          Closed
                        </typography_1.Text>
                      </layout_1.Box>
                    </layout_1.Box>
                    
                    <layout_1.Box>
                      <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                        Follow Us
                      </typography_1.Heading>
                      <layout_1.Box display="flex" gap={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                        <button_1.Button variant="outline" size="small">LinkedIn</button_1.Button>
                        <button_1.Button variant="outline" size="small">Twitter</button_1.Button>
                        <button_1.Button variant="outline" size="small">Instagram</button_1.Button>
                      </layout_1.Box>
                    </layout_1.Box>
                  </data_display_1.Card>
                </layout_1.Box>
              </layout_1.Box>
            </layout_1.Grid>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>

      {/* Map Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#f0f4f8">
          <layout_1.Container>
            <Section_1.SectionTitle title="Visit Our Office" subtitle="Located in the heart of Golden Springs" decoratorBefore={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>} decoratorAfter={<botanical_1.FlowerOfLife size="sm" opacity={0.15}/>}/>
            <Section_1.SectionContent>
              <layout_1.Box height={"".concat(sacred_geometry_1.PHI * 300, "px")} borderRadius="8px" overflow="hidden" style={{
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
                {/* Map would go here - using a placeholder */}
                <layout_1.Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" backgroundColor="#dde4ed">
                  <typography_1.Text variant="subtitle1">Interactive Map Would Be Displayed Here</typography_1.Text>
                </layout_1.Box>
              </layout_1.Box>
            </Section_1.SectionContent>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>

      {/* FAQ Section */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="#ffffff">
          <layout_1.Container>
            <Section_1.SectionTitle title="Frequently Asked Questions" subtitle="Quick answers to common inquiries" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>} decoratorAfter={<botanical_1.OliveBranch size="sm" opacity={0.3} mirror/>}/>
            <Section_1.SectionContent>
              <layout_1.Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={"".concat(sacred_geometry_1.PHI * 24, "px")}>
                <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 16, "px")} borderRadius="8px">
                  <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    What are your hours of operation?
                  </typography_1.Heading>
                  <typography_1.Paragraph variant="body2">
                    We are open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 3:00 PM.
                    We are closed on Sundays and major holidays.
                  </typography_1.Paragraph>
                </data_display_1.Card>
                
                <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 16, "px")} borderRadius="8px">
                  <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    How do I schedule a consultation?
                  </typography_1.Heading>
                  <typography_1.Paragraph variant="body2">
                    You can schedule a consultation by calling our office, using our online booking system, 
                    or sending us a message through this contact form. We aim to respond to all inquiries within 24 hours.
                  </typography_1.Paragraph>
                </data_display_1.Card>
                
                <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 16, "px")} borderRadius="8px">
                  <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    Do you accept insurance?
                  </typography_1.Heading>
                  <typography_1.Paragraph variant="body2">
                    We accept most major insurance plans. Please contact our office with your insurance information, 
                    and we will verify your coverage and benefits before your appointment.
                  </typography_1.Paragraph>
                </data_display_1.Card>
                
                <data_display_1.Card padding={"".concat(sacred_geometry_1.PHI * 16, "px")} borderRadius="8px">
                  <typography_1.Heading as="h3" variant="h5" marginBottom={"".concat(sacred_geometry_1.PHI * 8, "px")}>
                    What if I need to cancel or reschedule?
                  </typography_1.Heading>
                  <typography_1.Paragraph variant="body2">
                    We understand that schedules change. We request at least 24 hours' notice for cancellations or 
                    rescheduling. You can call our office or use our online system to make these changes.
                  </typography_1.Paragraph>
                </data_display_1.Card>
              </layout_1.Grid>
              
              <layout_1.Box textAlign="center" marginTop={"".concat(sacred_geometry_1.PHI * 32, "px")}>
                <typography_1.Paragraph variant="body1" marginBottom={"".concat(sacred_geometry_1.PHI * 16, "px")}>
                  Have more questions? We're here to help.
                </typography_1.Paragraph>
                <button_1.Button variant="secondary" size="medium" href="/faq">
                  View All FAQs
                </button_1.Button>
              </layout_1.Box>
            </Section_1.SectionContent>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>

      {/* Booking CTA */}
      <animation_1.ScrollReveal>
        <Section_1.Section backgroundColor="linear-gradient(135deg, #4a6eb3 0%, #2a4073 100%)" style={{
            color: 'white',
            paddingTop: "".concat(sacred_geometry_1.PHI * 32, "px"),
            paddingBottom: "".concat(sacred_geometry_1.PHI * 32, "px")
        }}>
          <layout_1.Container>
            <layout_1.Box textAlign="center">
              <typography_1.Heading as="h2" variant="h2" style={{ color: 'white', marginBottom: "".concat(sacred_geometry_1.PHI * 16, "px") }}>
                Ready to Experience Our Approach?
              </typography_1.Heading>
              <typography_1.Text variant="body1" style={{
            maxWidth: "".concat(sacred_geometry_1.PHI * 500, "px"),
            margin: '0 auto',
            marginBottom: "".concat(sacred_geometry_1.PHI * 24, "px")
        }}>
                Schedule a consultation today and discover how our sacred geometry-based 
                approach can help you achieve balance and harmony.
              </typography_1.Text>
              <button_1.Button variant="accent" size="large" href="/booking">
                Book a Consultation
              </button_1.Button>
            </layout_1.Box>
          </layout_1.Container>
        </Section_1.Section>
      </animation_1.ScrollReveal>
    </layout_1.Box>);
};
exports.default = ContactPage;
