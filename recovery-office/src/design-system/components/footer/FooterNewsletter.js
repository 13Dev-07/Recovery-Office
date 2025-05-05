"use strict";
/**
 * FooterNewsletter Component
 *
 * A component that allows users to sign up for a newsletter in the footer.
 * Follows sacred geometry principles for spacing, proportions, and animation.
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
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var getFibonacciByIndex_1 = require("../../../utils/getFibonacciByIndex");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var Heading_1 = require("../typography/Heading");
var Text_1 = require("../typography/Text");
var Button_1 = require("../button/Button");
var Input_1 = require("../form/Input");
// Newsletter container with styling
var NewsletterContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n"], ["\n  padding: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(6), function (props) { var _a; return (_a = props.theme.colors.primary[800]) !== null && _a !== void 0 ? _a : 1; }, (0, getFibonacciByIndex_1.getFibonacciByIndex)(3));
// Newsletter title with appropriate spacing
var Title = (0, styled_components_1.default)(Heading_1.Heading)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  position: relative;\n  font-size: 1.2rem;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -", "px;\n    left: 0;\n    width: ", "%;\n    height: 2px;\n    background-color: ", ";\n    opacity: 0.6;\n  }\n"], ["\n  margin-bottom: ", "px;\n  position: relative;\n  font-size: 1.2rem;\n  \n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -", "px;\n    left: 0;\n    width: ", "%;\n    height: 2px;\n    background-color: ", ";\n    opacity: 0.6;\n  }\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), (0, getFibonacciByIndex_1.getFibonacciByIndex)(2), sacred_geometry_1.PHI_INVERSE * 100, function (props) { var _a; return (_a = props.theme.colors.primary[300]) !== null && _a !== void 0 ? _a : 1; });
// Newsletter description with reduced opacity
var Description = (0, styled_components_1.default)(Text_1.Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  opacity: ", ";\n"], ["\n  margin-bottom: ", "px;\n  opacity: ", ";\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(5), sacred_geometry_1.PHI_INVERSE);
// Form layout with golden ratio proportions
var Form = styled_components_1.default.form(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n  \n  @media (min-width: ", ") {\n    flex-direction: row;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n  \n  @media (min-width: ", ") {\n    flex-direction: row;\n  }\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(3), function (props) { return props.theme.breakpoints.sm; });
// Input container with flex ratio
var InputContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: ", ";\n"], ["\n  flex: ", ";\n"])), sacred_geometry_1.PHI);
// Button container with flex ratio
var ButtonContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: ", ";\n"], ["\n  flex: ", ";\n"])), sacred_geometry_1.PHI_INVERSE);
// Success message with animation
var SuccessMessage = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-top: ", "px;\n  opacity: ", ";\n  transform: translateY(", ");\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n"], ["\n  display: flex;\n  align-items: center;\n  margin-top: ", "px;\n  opacity: ", ";\n  transform: translateY(", ");\n  transition: all 0.3s cubic-bezier(", ", 0, ", ", 1);\n"])), (0, getFibonacciByIndex_1.getFibonacciByIndex)(4), function (props) { return props.$visible ? 1 : 0; }, function (props) { return props.$visible ? 0 : "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(2), "px"); }, sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE);
// Success icon
var CheckIcon = function () { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
  </svg>); };
/**
 * FooterNewsletter component for the footer area with sacred geometry principles
 * for spacing and animations.
 */
var FooterNewsletter = function (_a) {
    var title = _a.title, description = _a.description, className = _a.className;
    // State for form handling
    var _b = (0, react_1.useState)(''), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(false), isSubmitting = _c[0], setIsSubmitting = _c[1];
    var _d = (0, react_1.useState)(false), isSuccess = _d[0], setIsSuccess = _d[1];
    var _e = (0, react_1.useState)(null), error = _e[0], setError = _e[1];
    /**
     * Handle form submission
     */
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var emailRegex, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    // Validate email
                    if (!email.trim()) {
                        setError('Please enter your email address');
                        return [2 /*return*/];
                    }
                    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        setError('Please enter a valid email address');
                        return [2 /*return*/];
                    }
                    setIsSubmitting(true);
                    setError(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    // Simulate API call with timeout based on Fibonacci sequence
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, (0, getFibonacciByIndex_1.getFibonacciByIndex)(8)); })];
                case 2:
                    // Simulate API call with timeout based on Fibonacci sequence
                    _a.sent();
                    // Show success state
                    setIsSuccess(true);
                    setEmail('');
                    // Reset success state after delay
                    setTimeout(function () {
                        setIsSuccess(false);
                    }, (0, getFibonacciByIndex_1.getFibonacciByIndex)(10) * 100); // ~5.5 seconds
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    setError('Failed to subscribe. Please try again.');
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (<NewsletterContainer className={className}>
      <Title as="h4" variant="h6">{title}</Title>
      <Description>{description}</Description>
      
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input_1.Input type="email" value={email} onChange={function (e) {
            setEmail(e.target.value);
            setError(null);
        }} placeholder="Your email address" disabled={isSubmitting || isSuccess} isInvalid={!!error} isFullWidth/>
          {error && (<Text_1.Text color="error.500" fontSize="sm" mt={2}>
              {error}
            </Text_1.Text>)}
        </InputContainer>
        
        <ButtonContainer>
          <Button_1.Button type="submit" variant="accent" isLoading={isSubmitting} isDisabled={isSuccess} isFullWidth>
            Subscribe
          </Button_1.Button>
        </ButtonContainer>
      </Form>
      
      <SuccessMessage $visible={isSuccess}>
        <Text_1.Text color="success.500" fontSize="sm" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: "".concat((0, getFibonacciByIndex_1.getFibonacciByIndex)(3), "px"), color: 'currentColor' }}>
            <CheckIcon />
          </span>
          Thank you for subscribing!
        </Text_1.Text>
      </SuccessMessage>
    </NewsletterContainer>);
};
exports.default = FooterNewsletter;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
