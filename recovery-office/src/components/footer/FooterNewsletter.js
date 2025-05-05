"use strict";
/**
 * FooterNewsletter Component
 *
 * Newsletter signup form in the footer, implementing sacred geometry principles
 * for layout, spacing, and animations.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.FooterNewsletter = void 0;
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var Box_1 = require("../design-system/components/layout/Box");
var Input_1 = require("../design-system/components/form/Input");
var Button_1 = require("../design-system/components/button/Button");
var FormControl_1 = require("../design-system/components/form/FormControl");
var FormLabel_1 = require("../design-system/components/form/FormLabel");
var Text_1 = require("../design-system/components/typography/Text");
var Heading_1 = require("../design-system/components/typography/Heading");
var Alert_1 = require("../design-system/components/feedback/Alert");
var services_1 = require("../../services");
var FadeIn_1 = require("@animation/FadeIn");
var NewsletterForm = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), SACRED_SPACING.sm);
var InputWrapper = (0, styled_components_1.default)(Box_1.Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", "px) {\n    flex-direction: column;\n    \n    button {\n      width: 100%;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", "px) {\n    flex-direction: column;\n    \n    button {\n      width: 100%;\n    }\n  }\n"])), SACRED_SPACING.sm, SACRED_SPACING.md, function (props) { return props.theme.breakpoints.sm; });
/**
 * FooterNewsletter Component
 *
 * Provides a newsletter subscription form in the footer.
 * Implements sacred geometry principles for spacing and animations.
 */
var FooterNewsletter = function (_a) {
    var className = _a.className;
    var _b = (0, react_1.useState)(''), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)('idle'), status = _c[0], setStatus = _c[1];
    var _d = (0, react_1.useState)(''), error = _d[0], setError = _d[1];
    /**
     * Handle form submission
     */
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!email) {
                        setError('Please enter your email address');
                        return [2 /*return*/];
                    }
                    setStatus('loading');
                    setError('');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, services_1.subscribeToNewsletter)({
                            email: email,
                            consent: true,
                        })];
                case 2:
                    _a.sent();
                    setStatus('success');
                    setEmail('');
                    // Reset success status after a time based on sacred timing
                    setTimeout(function () {
                        setStatus('idle');
                    }, SACRED_TIMING.slowest);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    setStatus('error');
                    setError(err_1 instanceof Error ? err_1.message : 'Failed to subscribe to newsletter');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<Box_1.Box className={className}>
      <Heading_1.Heading as="h4" fontfontSize="xs" mb={SACRED_SPACING.sm}>
        Newsletter
      </Heading_1.Heading>
      
      <Text_1.Text color="text.inverse" opacity={0.8} mb={SACRED_SPACING.md}>
        Subscribe to receive updates and exclusive content based on the Golden Ratio of valuable insights.
      </Text_1.Text>
      
      <NewsletterForm onSubmit={handleSubmit}>
        <FormControl_1.FormControl id="newsletter-email">
          <FormLabel_1.FormLabel srOnly>Email Address</FormLabel_1.FormLabel>
          <InputWrapper>
            <Input_1.Input type="email" placeholder="Your email address" value={email} onChange={function (e) { return setEmail(e.target.value); }} disabled={status === 'loading' || status === 'success'} aria-label="Email address for newsletter" required/>
            <Button_1.Button type="submit" variant="primary" size="md" isLoading={status === 'loading'} disabled={status === 'loading' || status === 'success'}>
              Subscribe
            </Button_1.Button>
          </InputWrapper>
        </FormControl_1.FormControl>
        
        {status === 'error' && (<FadeIn_1.FadeIn duration={SACRED_TIMING.medium}>
            <Alert_1.Alert status="error" title="Subscription Error" mt={SACRED_SPACING.md} fontSize="sm">
              {error || 'An error occurred. Please try again.'}
            </Alert_1.Alert>
          </FadeIn_1.FadeIn>)}
        
        {status === 'success' && (<FadeIn_1.FadeIn duration={SACRED_TIMING.medium}>
            <Alert_1.Alert status="success" title="Thank you for subscribing!" mt={SACRED_SPACING.md} fontSize="sm">
              Please check your inbox to confirm your subscription.
            </Alert_1.Alert>
          </FadeIn_1.FadeIn>)}
        
        <Text_1.Text fontSize="xs" mt={SACRED_SPACING.md} opacity={0.7} color="text.inverse">
          We respect your privacy and will never share your information.
        </Text_1.Text>
      </NewsletterForm>
    </Box_1.Box>);
};
exports.FooterNewsletter = FooterNewsletter;
exports.default = exports.FooterNewsletter;
var templateObject_1, templateObject_2;
