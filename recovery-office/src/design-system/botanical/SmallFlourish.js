"use strict";
/**
 * SmallFlourish Component
 *
 * A decorative botanical element that creates a small, elegant flourish
 * based on sacred geometry principles. These flourishes can be used
 * as subtle decorative elements throughout the application.
 *
 * The design uses golden ratio curves and Fibonacci spacing to create
 * a visually harmonious decoration.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var sacred_geometry_1 = require("../constants/sacred-geometry");
/**
 * Generates a decorative flourish SVG path using sacred geometry
 */
var generateSmallFlourish = function (variant, complexity, mirror, detailLevel) {
    var _a, _b, _c, _d;
    if (variant === void 0) { variant = 'curved'; }
    if (complexity === void 0) { complexity = 1; }
    if (mirror === void 0) { mirror = false; }
    if (detailLevel === void 0) { detailLevel = 1; }
    var elements = [];
    var viewBoxWidth = 100;
    var viewBoxHeight = 60;
    var centerX = viewBoxWidth / 2;
    var centerY = viewBoxHeight / 2;
    // Scale to fit within the viewBox
    var scale = 0.8;
    // Calculate the flourish dimensions
    switch (variant) {
        case 'curved': {
            // A curved flourish based on Fibonacci proportions
            var curveLength = viewBoxWidth * scale;
            var startX = mirror ? (viewBoxWidth - (viewBoxWidth * scale * 0.1)) : (viewBoxWidth * scale * 0.1);
            var startY = centerY;
            var endX = mirror ? (viewBoxWidth * scale * 0.1) : (viewBoxWidth - (viewBoxWidth * scale * 0.1));
            var endY = centerY;
            // Control points using golden ratio
            var cp1x = startX + (mirror ? -curveLength * 0.2 : curveLength * 0.2);
            var cp1y = startY - (viewBoxHeight * 0.3 * complexity);
            var cp2x = endX + (mirror ? curveLength * 0.2 : -curveLength * 0.2);
            var cp2y = endY - (viewBoxHeight * 0.3 * complexity);
            // Create the main flourish curve
            var flourishPath = "M ".concat(startX, ",").concat(startY, " C ").concat(cp1x, ",").concat(cp1y, " ").concat(cp2x, ",").concat(cp2y, " ").concat(endX, ",").concat(endY);
            elements.push(<path key="main-flourish" d={flourishPath} stroke="currentColor" strokeWidth={1} fill="none" strokeLinecap="round" className="flourish-main"/>);
            // Add decorative elements along the curve
            if (detailLevel > 0) {
                // Number of decorative elements based on complexity and Fibonacci
                var decorationCount = sacred_geometry_1.FIBONACCI[3 + Math.floor(complexity)]; // 3-8 elements
                for (var i = 0; i < decorationCount; i++) {
                    var t = i / (decorationCount - 1);
                    var mirroredT = mirror ? 1 - t : t;
                    // Calculate position along the cubic bezier curve
                    var decorX = calculateCubicBezierPoint(startX, cp1x, cp2x, endX, mirroredT);
                    var decorY = calculateCubicBezierPoint(startY, cp1y, cp2y, endY, mirroredT);
                    // Size based on golden ratio and position
                    var sizeMultiplier = Math.sin(t * Math.PI) * detailLevel;
                    var decorSize = 3 * sizeMultiplier;
                    // Create a decorative element (dot, small curve, etc.)
                    var shouldCreateLeaf = sacred_geometry_1.FIBONACCI.indexOf(i + 2) !== -1;
                    if (shouldCreateLeaf && detailLevel > 0.5) {
                        // Create a small leaf-like decoration
                        var angle = Math.atan2(calculateCubicBezierTangent(startY, cp1y, cp2y, endY, mirroredT), calculateCubicBezierTangent(startX, cp1x, cp2x, endX, mirroredT)) * (180 / Math.PI) + (mirror ? 180 : 0);
                        // Small curved line on alternating sides
                        var side = i % 2 === 0 ? 1 : -1;
                        var leafLength = decorSize * sacred_geometry_1.PHI;
                        elements.push(<g key={"decoration-".concat(i)} transform={"translate(".concat(decorX, ", ").concat(decorY, ") rotate(").concat(angle, ")")} className="flourish-decoration">
                <path d={"\n                    M 0,0 \n                    Q ".concat(leafLength * 0.5, ",").concat(side * leafLength * 0.3, " ").concat(leafLength, ",0\n                  ")} stroke="currentColor" strokeWidth={0.7 * detailLevel} fill="none" strokeLinecap="round"/>
              </g>);
                    }
                    else {
                        // Simple dot at Fibonacci positions
                        elements.push(<circle key={"dot-".concat(i)} cx={decorX} cy={decorY} r={0.8 * sizeMultiplier} fill="currentColor" className="flourish-dot"/>);
                    }
                }
            }
            break;
        }
        case 'angular':
            {
                // An angular flourish with golden ratio proportions
                var length_1 = viewBoxWidth * scale;
                var startX = mirror ? (viewBoxWidth - (viewBoxWidth * scale * 0.1)) : (viewBoxWidth * scale * 0.1);
                var startY = centerY;
                var endX = mirror ? (viewBoxWidth * scale * 0.1) : (viewBoxWidth - (viewBoxWidth * scale * 0.1));
                var endY = centerY;
                // Calculate points using golden ratio segments
                var points = [
                    { x: startX, y: startY },
                    { x: startX + (mirror ? -length_1 * 0.2 : length_1 * 0.2), y: startY - (viewBoxHeight * 0.15 * complexity) },
                    { x: startX + (mirror ? -length_1 * 0.4 : length_1 * 0.4), y: startY - (viewBoxHeight * 0.3 * complexity) },
                    { x: startX + (mirror ? -length_1 * 0.6 : length_1 * 0.6), y: startY - (viewBoxHeight * 0.15 * complexity * sacred_geometry_1.PHI_INVERSE) },
                    { x: startX + (mirror ? -length_1 * 0.8 : length_1 * 0.8), y: startY - (viewBoxHeight * 0.25 * complexity) },
                    { x: endX, y: endY }
                ];
                // Create the angular path
                var angularPath = "M ".concat((_a = points[0]) !== null && _a !== void 0 ? _a : 1.), x = void 0;
            }
            $;
            {
                (_b = points[0]) !== null && _b !== void 0 ? _b : 1.;
                y;
            }
            ";\n      for (let i = 1; i < points.length; i++) {\n        angularPath += ";
            L;
            $;
            {
                (_c = points[i]) !== null && _c !== void 0 ? _c : 1.;
                x;
            }
            $;
            {
                (_d = points[i]) !== null && _d !== void 0 ? _d : 1.;
                y;
            }
            ";\n      }\n      \n      elements.push(\n        <path\n          key=\"main-flourish\"\n          d={angularPath}\n          stroke=\"currentColor\"\n          strokeWidth={1}\n          fill=\"none\"\n          strokeLinecap=\"round\"\n          strokeLinejoin=\"round\"\n          className=\"flourish-main\"\n        />\n      );\n      \n      // Add decorative elements at the joints if detail level is high enough\n      if (detailLevel > 0.5) {\n        for (let i = 1; i < points.length - 1; i++) {\n          const decorSize = 2 * detailLevel * (i % 2 === 0 ? 1 : 0.7);\n          \n          elements.push(\n            <circle\n              key={";
            joint - $;
            {
                i;
            }
            "}\n              cx={points[i] ?? 1.x}\n              cy={points[i] ?? 1.y}\n              r={decorSize}\n              fill=\"currentColor\"\n              className=\"flourish-joint\"\n            />\n          );\n        }\n      }\n      break;\n    }\n    \n    case 'spiral': {\n      // A small spiral flourish based on golden ratio\n      const radius = (viewBoxHeight / 2) * 0.7 * complexity;\n      const centerOffsetX = mirror ? -viewBoxWidth * 0.2 : viewBoxWidth * 0.2;\n      \n      // Create a spiral path\n      let spiralPath = ";
            M;
            $;
            {
                centerX + centerOffsetX;
            }
            $;
            {
                centerY;
            }
            ";\n      \n      // Number of spiral segments based on complexity\n      const turns = 1 + complexity;\n      const segments = 30 * detailLevel;\n      \n      for (let i = 1; i <= segments; i++) {\n        const angle = (i / segments) * turns * Math.PI * 2;\n        const distance = radius * (1 - Math.exp(-angle * PHI_INVERSE * 0.3));\n        const x = centerX + centerOffsetX + (mirror ? -1 : 1) * distance * Math.cos(angle);\n        const y = centerY + distance * Math.sin(angle);\n        \n        spiralPath += ";
            L;
            $;
            {
                x;
            }
            $;
            {
                y;
            }
            ";\n      }\n      \n      elements.push(\n        <path\n          key=\"spiral-flourish\"\n          d={spiralPath}\n          stroke=\"currentColor\"\n          strokeWidth={1}\n          fill=\"none\"\n          strokeLinecap=\"round\"\n          className=\"flourish-spiral\"\n        />\n      );\n      \n      // Add a decorative dot at the center\n      elements.push(\n        <circle\n          key=\"spiral-center\"\n          cx={centerX + centerOffsetX}\n          cy={centerY}\n          r={1.5 * detailLevel}\n          fill=\"currentColor\"\n          className=\"flourish-center\"\n        />\n      );\n      break;\n    }\n    \n    case 'wave': {\n      // A wave flourish with golden ratio wave heights\n      const length = viewBoxWidth * scale;\n      const startX = mirror ? (viewBoxWidth - (viewBoxWidth * scale * 0.1)) : (viewBoxWidth * scale * 0.1);\n      const startY = centerY;\n      const endX = mirror ? (viewBoxWidth * scale * 0.1) : (viewBoxWidth - (viewBoxWidth * scale * 0.1));\n      const endY = centerY;\n      \n      // Wave parameters based on golden ratio\n      const waveCount = 1 + Math.floor(complexity * 2);\n      const waveHeight = (viewBoxHeight * 0.15) * complexity;\n      \n      // Create the wave path\n      let wavePath = ";
            M;
            $;
            {
                startX;
            }
            $;
            {
                startY;
            }
            ";\n      \n      for (let i = 0; i <= waveCount; i++) {\n        const t = i / waveCount;\n        const x = startX + (endX - startX) * t;\n        \n        // Alternate wave direction and decrease amplitude toward the ends\n        const amplitude = waveHeight * Math.sin(t * Math.PI);\n        const y = centerY + amplitude * (i % 2 === 0 ? 1 : -1);\n        \n        if (i === 0) {\n          wavePath += ";
            L;
            $;
            {
                x;
            }
            $;
            {
                y;
            }
            ";\n        } else {\n          // Control points for smooth wave\n          const cpx = startX + (endX - startX) * (t - 0.5 / waveCount);\n          const cpy = centerY + amplitude * (i % 2 === 0 ? -1 : 1);\n          \n          wavePath += ";
            Q;
            $;
            {
                cpx;
            }
            $;
            {
                cpy;
            }
            $;
            {
                x;
            }
            $;
            {
                y;
            }
            ";\n        }\n      }\n      \n      elements.push(\n        <path\n          key=\"wave-flourish\"\n          d={wavePath}\n          stroke=\"currentColor\"\n          strokeWidth={1}\n          fill=\"none\"\n          strokeLinecap=\"round\"\n          className=\"flourish-wave\"\n        />\n      );\n      \n      // Add decorative dots at wave peaks if detail level is high enough\n      if (detailLevel > 0.5) {\n        for (let i = 0; i < waveCount; i++) {\n          const t = (i + 0.5) / waveCount;\n          const x = startX + (endX - startX) * t;\n          \n          // Calculate peak position\n          const amplitude = waveHeight * Math.sin(t * Math.PI);\n          const y = centerY + amplitude * (i % 2 === 0 ? -1 : 1);\n          \n          elements.push(\n            <circle\n              key={";
            peak - $;
            {
                i;
            }
            "}\n              cx={x}\n              cy={y}\n              r={1.2 * detailLevel}\n              fill=\"currentColor\"\n              className=\"flourish-peak\"\n            />\n          );\n        }\n      }\n      break;\n    }\n  }\n  \n  return elements;\n};\n\n/**\n * Calculate a point on a cubic bezier curve at position t (0-1)\n */\nconst calculateCubicBezierPoint = (\n  p0: number,\n  p1: number,\n  p2: number,\n  p3: number,\n  t: number\n): number => {\n  const t2 = t * t;\n  const t3 = t2 * t;\n  const mt = 1 - t;\n  const mt2 = mt * mt;\n  const mt3 = mt2 * mt;\n  \n  return (\n    p0 * mt3 +\n    3 * p1 * mt2 * t +\n    3 * p2 * mt * t2 +\n    p3 * t3\n  );\n};\n\n/**\n * Calculate the tangent of a cubic bezier curve at position t (0-1)\n */\nconst calculateCubicBezierTangent = (\n  p0: number,\n  p1: number,\n  p2: number,\n  p3: number,\n  t: number\n): number => {\n  const t2 = t * t;\n  const mt = 1 - t;\n  const mt2 = mt * mt;\n  \n  return (\n    3 * mt2 * (p1 - p0) +\n    6 * mt * t * (p2 - p1) +\n    3 * t2 * (p3 - p2)\n  );\n};\n\n/**\n * SmallFlourish Component with ref forwarding\n * \n * Creates an elegant decorative flourish based on sacred geometry principles\n */\nexport const SmallFlourish = forwardRef<SVGSVGElement, SmallFlourishProps>(\n  ({ \n    variant = 'curved',\n    complexity = 1,\n    rotation = 0,\n    mirror = false,\n    detailLevel = 1,\n    viewBox = '0 0 100 60',\n    ...rest \n  }, ref) => {\n    return (\n      <BotanicalElement\n        viewBox={viewBox}\n        ref={ref}\n        {...rest}\n      >\n        <g \n          transform={";
            rotate($, { rotation: rotation }, 50, 30)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["}\n          style={{ transformOrigin: 'center' }}\n        >\n          {generateSmallFlourish(\n            variant,\n            complexity,\n            mirror,\n            detailLevel\n          )}\n        </g>\n      </BotanicalElement>\n    );\n  }\n);\n\nSmallFlourish.displayName = 'SmallFlourish';\n\nexport default SmallFlourish; \n\n\n\n\n\n\n\n\n\n\n"], ["}\n          style={{ transformOrigin: 'center' }}\n        >\n          {generateSmallFlourish(\n            variant,\n            complexity,\n            mirror,\n            detailLevel\n          )}\n        </g>\n      </BotanicalElement>\n    );\n  }\n);\n\nSmallFlourish.displayName = 'SmallFlourish';\n\nexport default SmallFlourish; \n\n\n\n\n\n\n\n\n\n\n"])));
    }
};
var templateObject_1;
