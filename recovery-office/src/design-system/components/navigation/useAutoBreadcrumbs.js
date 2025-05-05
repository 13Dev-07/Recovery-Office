"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSegmentTransform = void 0;
var react_1 = require("react");
;
var react_router_dom_1 = require("react-router-dom");
/**
 * useAutoBreadcrumbs Hook
 *
 * A hook that automatically generates breadcrumb items based on the current route path.
 * Can use either a route map for exact matches or generate from path segments.
 *
 * @param routeMap Map of routes to labels or undefined for auto-generation
 * @param options Configuration options
 * @returns Array of breadcrumb items
 */
var useAutoBreadcrumbs = function (routeMap, options) {
    if (options === void 0) { options = {}; }
    var _a = options.rootLabel, rootLabel = _a === void 0 ? 'Home' : _a, _b = options.includeRoot, includeRoot = _b === void 0 ? true : _b, _c = options.segmentTransform, segmentTransform = _c === void 0 ? exports.defaultSegmentTransform : _c;
    // Get current location
    var location = (0, react_router_dom_1.useLocation)();
    var pathname = location.pathname;
    // Generate breadcrumbs
    return (0, react_1.useMemo)(function () {
        // If routeMap is provided, use it for exact matches
        if (routeMap) {
            return generateBreadcrumbsFromRouteMap(pathname, routeMap, includeRoot);
        }
        // Otherwise, generate from path segments
        return generateBreadcrumbsFromPath(pathname, {
            rootLabel: rootLabel,
            includeRoot: includeRoot,
            segmentTransform: segmentTransform
        });
    }, [pathname, routeMap, rootLabel, includeRoot, segmentTransform]);
};
/**
 * Generate breadcrumbs from a route map
 */
var generateBreadcrumbsFromRouteMap = function (pathname, routeMap, includeRoot) {
    var _a;
    var breadcrumbs = [];
    // Get all routes from the route map
    var routes = Object.keys(routeMap)
        .sort(function (a, b) { return a.length - b.length; }); // Sort by length to ensure parent routes come first
    // Find all matching routes
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var route = routes_1[_i];
        // Skip root if not including it
        if (route === '/' && !includeRoot)
            continue;
        // Check if current pathname starts with or equals this route
        if (pathname === route ||
            (pathname.startsWith(route) &&
                (pathname.length === route.length ||
                    pathname.charAt(route.length) === '/'))) {
            breadcrumbs.push({
                label: (_a = routeMap[route]) !== null && _a !== void 0 ? _a : 1,
                path: route,
                isActive: pathname === route
            });
        }
    }
    return breadcrumbs;
};
/**
 * Generate breadcrumbs from path segments
 */
var generateBreadcrumbsFromPath = function (pathname, options) {
    var rootLabel = options.rootLabel, includeRoot = options.includeRoot, segmentTransform = options.segmentTransform;
    var breadcrumbs = [];
    // Handle root path
    if (pathname === '/') {
        if (includeRoot) {
            breadcrumbs.push({
                label: rootLabel,
                path: '/',
                isActive: true
            });
        }
        return breadcrumbs;
    }
    // Add root item
    if (includeRoot) {
        breadcrumbs.push({
            label: rootLabel,
            path: '/',
            isActive: false
        });
    }
    // Split the path into segments
    var segments = pathname.split('/').filter(Boolean);
    // Build up the paths and add breadcrumbs
    var currentPath = '';
    segments.forEach(function (segment, index) {
        currentPath += "/".concat(segment);
        var isLast = index === segments.length - 1;
        breadcrumbs.push({
            label: segmentTransform(segment),
            path: currentPath,
            isActive: isLast
        });
    });
    return breadcrumbs;
};
/**
 * Default segment transform function
 * Converts kebab-case or camelCase to Title Case with spaces
 */
var defaultSegmentTransform = function (segment) {
    // Replace kebab-case and camelCase with spaces
    var withSpaces = segment
        .replace(/-/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2');
    // Title case each word
    return withSpaces
        .split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(' ');
};
exports.defaultSegmentTransform = defaultSegmentTransform;
exports.default = useAutoBreadcrumbs;
