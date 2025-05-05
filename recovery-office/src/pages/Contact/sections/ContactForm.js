"use strict";
/**
 * ContactForm Section Component
 *
 * Form section for the Contact page with Zod validation and sacred geometry principles.
 * Features responsive grid layout and validation feedback.
 */
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
var layout_1 = require("../design-system/components/layout");
var layout_2 = require("../design-system/components/layout");
var SectionTitle_1 = require("../../../design-system/components/typography/SectionTitle");
var botanical_1 = require("../design-system/botanical");
var form_1 = require("../../../design-system/components/form");
var button_1 = require("../design-system/components/button");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var zod_2 = require("zod");
var animation_1 = require("../../animation");
// Form validation schema using Zod
var contactFormSchema = zod_2.z.object({
    firstName: zod_2.z.string().min(2, "First name must be at least 2 characters"),
    lastName: zod_2.z.string().min(2, "Last name must be at least 2 characters"),
    email: zod_2.z.string().email("Please enter a valid email address"),
    phone: zod_2.z.string().optional(),
    subject: zod_2.z.string().min(3, "Please select a subject"),
    preferredContact: zod_2.z.enum(["email", "phone"], {
        errorMap: function () { return ({ message: "Please select a preferred contact method" }); }
    }),
    message: zod_2.z.string().min(10, "Message must be at least 10 characters"),
    gdprConsent: zod_2.z.literal(true, {
        errorMap: function () { return ({ message: "You must agree to our privacy policy" }); }
    })
});
var ContactForm = function (_a) {
    var onFormSubmit = _a.onFormSubmit;
    // React Hook Form setup with Zod resolver
    var _b = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(contactFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            preferredContact: 'email',
            message: '',
            gdprConsent: false
        }
    }), register = _b.register, handleSubmit = _b.handleSubmit, _c = _b.formState, errors = _c.errors, isSubmitting = _c.isSubmitting, isSubmitSuccessful = _c.isSubmitSuccessful, reset = _b.reset;
    // Form submission handler
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!onFormSubmit) return [3 /*break*/, 2];
                    return [4 /*yield*/, onFormSubmit(data)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: 
                // Default handler if no custom handler provided
                // Simulating API call with timeout
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000 * sacred_geometry_1.PHI); })];
                case 3:
                    // Default handler if no custom handler provided
                    // Simulating API call with timeout
                    _a.sent(); // Golden ratio timing
                    console.log('Form submitted:', data);
                    _a.label = 4;
                case 4:
                    // Reset form after successful submission
                    reset();
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error('Error submitting form:', error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (<animation_1.FadeIn>
      <layout_1.Box>
        <SectionTitle_1.SectionTitle title="Send Us a Message" subtitle="We'll respond within 24 hours" size="medium" align="left" decoratorBefore={<botanical_1.OliveBranch size="sm" opacity={0.3}/>}/>
        
        {isSubmitSuccessful ? (<layout_1.Box mt={4} p={4} borderRadius="8px" style={{
                backgroundColor: 'rgba(134, 179, 120, 0.1)',
                borderLeft: '4px solid #86b378'
            }}>
            <layout_1.Box fontSize="lg" fontWeight="600" color="#86b378" mb={2}>
              Message Sent Successfully
            </layout_1.Box>
            <layout_1.Box>
              Thank you for reaching out to us. We'll get back to you within 24 hours.
            </layout_1.Box>
            <button_1.Button variant="outline" size="medium" mt={3} onClick={function () { return reset(); }}>
              Send Another Message
            </button_1.Button>
          </layout_1.Box>) : (<layout_1.Box as="form" onSubmit={handleSubmit(onSubmit)} mt={4}>
            <layout_2.Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={"".concat(sacred_geometry_1.PHI * 16, "px")}>
              <form_1.FormControl isInvalid={!!errors.firstName}>
                <form_1.FormLabel htmlFor="firstName">First Name</form_1.FormLabel>
                <form_1.Input id="firstName" placeholder="Your first name" {...register('firstName')}/>
                {errors.firstName && <form_1.FormError>{errors.firstName.message}</form_1.FormError>}
              </form_1.FormControl>

              <form_1.FormControl isInvalid={!!errors.lastName}>
                <form_1.FormLabel htmlFor="lastName">Last Name</form_1.FormLabel>
                <form_1.Input id="lastName" placeholder="Your last name" {...register('lastName')}/>
                {errors.lastName && <form_1.FormError>{errors.lastName.message}</form_1.FormError>}
              </form_1.FormControl>
            </layout_2.Grid>

            <layout_2.Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={"".concat(sacred_geometry_1.PHI * 16, "px")} mt={4}>
              <form_1.FormControl isInvalid={!!errors.email}>
                <form_1.FormLabel htmlFor="email">Email</form_1.FormLabel>
                <form_1.Input id="email" placeholder="Your email address" type="email" {...register('email')}/>
                {errors.email && <form_1.FormError>{errors.email.message}</form_1.FormError>}
              </form_1.FormControl>

              <form_1.FormControl isInvalid={!!errors.phone}>
                <form_1.FormLabel htmlFor="phone">Phone (Optional)</form_1.FormLabel>
                <form_1.Input id="phone" placeholder="Your phone number" {...register('phone')}/>
                {errors.phone && <form_1.FormError>{errors.phone.message}</form_1.FormError>}
              </form_1.FormControl>
            </layout_2.Grid>

            <layout_2.Grid gridTemplateColumns={["1fr", null, "1fr 1fr"]} gap={"".concat(sacred_geometry_1.PHI * 16, "px")} mt={4}>
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

              <form_1.FormControl isInvalid={!!errors.preferredContact}>
                <form_1.FormLabel htmlFor="preferredContact">Preferred Contact Method</form_1.FormLabel>
                <form_1.Select id="preferredContact" {...register('preferredContact')}>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </form_1.Select>
                {errors.preferredContact && <form_1.FormError>{errors.preferredContact.message}</form_1.FormError>}
              </form_1.FormControl>
            </layout_2.Grid>

            <form_1.FormControl isInvalid={!!errors.message} mt={4}>
              <form_1.FormLabel htmlFor="message">Message</form_1.FormLabel>
              <form_1.TextArea id="message" placeholder="How can we help you?" rows={5} {...register('message')}/>
              {errors.message && <form_1.FormError>{errors.message.message}</form_1.FormError>}
            </form_1.FormControl>

            <form_1.FormControl isInvalid={!!errors.gdprConsent} mt={4}>
              <layout_1.Box display="flex" alignItems="start">
                <form_1.Checkbox id="gdprConsent" {...register('gdprConsent')} style={{ marginRight: '8px', marginTop: '4px' }}/>
                <form_1.FormLabel htmlFor="gdprConsent" style={{ marginBottom: 0 }}>
                  I agree to the processing of my personal data in accordance with the 
                  <a href="/legal/privacy-policy" style={{ color: '#4a6eb3', marginLeft: '4px' }}>
                    Privacy Policy
                  </a>
                </form_1.FormLabel>
              </layout_1.Box>
              {errors.gdprConsent && <form_1.FormError>{errors.gdprConsent.message}</form_1.FormError>}
            </form_1.FormControl>

            <layout_1.Box mt={"".concat(sacred_geometry_1.PHI * 24, "px")}>
              <button_1.Button type="submit" variant="primary" size="large" width="100%" isLoading={isSubmitting} disabled={isSubmitting} aria-label="Submit contact form">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button_1.Button>
            </layout_1.Box>
          </layout_1.Box>)}
      </layout_1.Box>
    </animation_1.FadeIn>);
};
exports.default = ContactForm;
