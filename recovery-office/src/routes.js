"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var animation_1 = require("./animation");
// Import pages
var pages_1 = require("./pages");
// Loading component
var Loading = function () { return (<div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
    Loading...
  </div>); };
var AppRoutes = function () {
    var location = (0, react_router_dom_1.useLocation)();
    return (<React.Suspense fallback={<Loading />}>
      <animation_1.FadeIn key={location.pathname}>
        <react_router_dom_1.Routes location={location}>
          {/* Main routes */}
          <react_router_dom_1.Route path="/" element={<pages_1.Home />}/>
          <react_router_dom_1.Route path="/services" element={<pages_1.Services />}/>
          <react_router_dom_1.Route path="/about" element={<pages_1.About />}/>
          <react_router_dom_1.Route path="/contact" element={<pages_1.Contact />}/>
          <react_router_dom_1.Route path="/blog" element={<pages_1.Blog />}/>
          <react_router_dom_1.Route path="/faq" element={<pages_1.FAQ />}/>
          <react_router_dom_1.Route path="/booking" element={<pages_1.Booking />}/>
          
          {/* Legal routes */}
          <react_router_dom_1.Route path="/privacy" element={<pages_1.Privacy />}/>
          <react_router_dom_1.Route path="/terms" element={<pages_1.Terms />}/>
          <react_router_dom_1.Route path="/hipaa" element={<pages_1.HIPAA />}/>
          <react_router_dom_1.Route path="/accessibility" element={<pages_1.Accessibility />}/>
          
          {/* 404 route */}
          <react_router_dom_1.Route path="*" element={<pages_1.NotFound />}/>
        </react_router_dom_1.Routes>
      </animation_1.FadeIn>
    </React.Suspense>);
};
exports.default = AppRoutes;
