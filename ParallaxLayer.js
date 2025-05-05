"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var ParallaxLayer = function (_a) {
    var children = _a.children, transformX = _a.transformX, transformY = _a.transformY, rest = __rest(_a, ["children", "transformX", "transformY"]);
    var combinedRef = (0, react_1.useRef)(null);
    return (<framer_motion_1.motion.div ref={combinedRef} style={{
            x: transformX,
            y: transformY,
            willChange: 'transform' // Performance optimization
        }} {...rest}>
      {children}
    </framer_motion_1.motion.div>);
};
exports.default = ParallaxLayer;
