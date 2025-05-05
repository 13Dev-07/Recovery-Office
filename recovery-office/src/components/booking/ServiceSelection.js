"use strict";
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
;
var BookingContext_1 = require("@context/BookingContext");
var styled_components_1 = require("styled-components");
// Mock services data (replace with API call in production)
var mockServices = [
    {
        id: '1',
        name: 'Initial Consultation',
        description: 'First-time assessment and treatment planning.',
        duration: 60,
        price: 120
    },
    {
        id: '2',
        name: 'Follow-up Session',
        description: 'Regular treatment session for existing clients.',
        duration: 45,
        price: 90
    },
    {
        id: '3',
        name: 'Deep Tissue Massage',
        description: 'Focused massage therapy for chronic muscle tension.',
        duration: 60,
        price: 100
    },
    {
        id: '4',
        name: 'Rehabilitation Package',
        description: '5-session package for comprehensive rehabilitation.',
        duration: 45,
        price: 400
    }
];
// Styled components using sacred geometry
var ServicesContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  width: 100%;\n  margin-bottom: ", "px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr));\n  gap: ", "px;\n  width: 100%;\n  margin-bottom: ", "px;\n"])), getFibonacciByIndex(8), getFibonacciByIndex(5), getFibonacciByIndex(7));
var ServiceCard = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  height: ", "px;\n  display: flex;\n  flex-direction: column;\n  \n  &:hover {\n    transform: scale(", ");\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n"], ["\n  padding: ", "px;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  cursor: pointer;\n  transition: all ", "ms ease-in-out;\n  height: ", "px;\n  display: flex;\n  flex-direction: column;\n  \n  &:hover {\n    transform: scale(", ");\n    box-shadow: 0 ", "px ", "px rgba(0, 0, 0, 0.1);\n  }\n"])), getFibonacciByIndex(5), getFibonacciByIndex(4), function (_a) {
    var selected = _a.selected, theme = _a.theme;
    return selected ? theme.colors.primary[500] : theme.colors.border.main;
}, function (_a) {
    var selected = _a.selected, theme = _a.theme;
    return selected ? theme.colors.primary[100] : theme.colors.background[100];
}, getFibonacciByIndex(5) * 10, getFibonacciByIndex(10), 1 + (1 / PHI) * 0.05, getFibonacciByIndex(3), getFibonacciByIndex(5));
var ServiceName = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0 0 ", "px 0;\n  font-size: ", "px;\n  color: ", ";\n"], ["\n  margin: 0 0 ", "px 0;\n  font-size: ", "px;\n  color: ", ";\n"])), getFibonacciByIndex(4), getFibonacciByIndex(5), function (_a) {
    var theme = _a.theme;
    return theme.colors.text.primary;
});
var ServiceDescription = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0 0 ", "px 0;\n  color: ", ";\n  flex-grow: 1;\n"], ["\n  margin: 0 0 ", "px 0;\n  color: ", ";\n  flex-grow: 1;\n"])), getFibonacciByIndex(4), function (_a) {
    var theme = _a.theme;
    return theme.colors.text.secondary;
});
var ServiceDetails = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: auto;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: auto;\n"])));
var ServiceDuration = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: ", "px;\n  color: ", ";\n"], ["\n  font-size: ", "px;\n  color: ", ";\n"])), getFibonacciByIndex(4), function (_a) {
    var theme = _a.theme;
    return theme.colors.text.secondary;
});
var ServicePrice = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-size: ", "px;\n  font-weight: bold;\n  color: ", ";\n"])), getFibonacciByIndex(5), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary[500];
});
var ContinueButton = styled_components_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  color: white;\n  border: none;\n  border-radius: ", "px;\n  font-size: ", "px;\n  cursor: pointer;\n  margin-top: ", "px;\n  transition: background-color ", "ms ease;\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:disabled {\n    background-color: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  padding: ", "px ", "px;\n  background-color: ", ";\n  color: white;\n  border: none;\n  border-radius: ", "px;\n  font-size: ", "px;\n  cursor: pointer;\n  margin-top: ", "px;\n  transition: background-color ", "ms ease;\n  \n  &:hover {\n    background-color: ", ";\n  }\n  \n  &:disabled {\n    background-color: ", ";\n    cursor: not-allowed;\n  }\n"])), getFibonacciByIndex(4), getFibonacciByIndex(6), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary[500];
}, getFibonacciByIndex(3), getFibonacciByIndex(5), getFibonacciByIndex(6), getFibonacciByIndex(5) * 10, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary[700];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text.disabled;
});
var ServiceSelection = function () {
    var _a = (0, BookingContext_1.useBooking)(), selectedService = _a.selectedService, setSelectedService = _a.setSelectedService, currentStep = _a.currentStep, setCurrentStep = _a.setCurrentStep;
    var _b = useState([]), services = _b[0], setServices = _b[1];
    var _c = React.useState(true), loading = _c[0], setLoading = _c[1];
    var _d = useState(null), error = _d[0], setError = _d[1];
    React.useEffect(function () {
        // In a real application, this would be an API call
        // For now, we'll simulate an API call with setTimeout
        var fetchServices = function () { return __awaiter(void 0, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        setLoading(true);
                        // Simulate API delay
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, getFibonacciByIndex(7)); })];
                    case 1:
                        // Simulate API delay
                        _a.sent();
                        setServices(mockServices);
                        setError(null);
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _a.sent();
                        setError('Failed to load services. Please try again.');
                        return [3 /*break*/, 4];
                    case 3:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchServices();
    }, []);
    var handleServiceSelection = function (service) {
        setSelectedService(service);
    };
    var handleContinue = function () {
        setCurrentStep(currentStep + 1);
    };
    if (loading) {
        return <div>Loading services...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    return (<div>
      <h2>Select a Service</h2>
      <ServicesContainer>
        {services.map(function (service) { return (<ServiceCard key={service.id} selected={(selectedService === null || selectedService === void 0 ? void 0 : selectedService.id) === service.id} onClick={function () { return handleServiceSelection(service); }}>
            <ServiceName>{service.name}</ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceDetails>
              <ServiceDuration>{service.duration} min</ServiceDuration>
              <ServicePrice>${service.price}</ServicePrice>
            </ServiceDetails>
          </ServiceCard>); })}
      </ServicesContainer>
      <ContinueButton onClick={handleContinue} disabled={!selectedService}>
        Continue
      </ContinueButton>
    </div>);
};
exports.default = ServiceSelection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
