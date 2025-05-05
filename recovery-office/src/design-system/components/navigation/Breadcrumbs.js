"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
// Import sacred geometry constants
// Import components
var Link_1 = require("./Link");
var botanical_1 = require("../botanical");
/**
 * Breadcrumbs Component
 *
 * A component for displaying breadcrumb navigation with sacred geometry
 * spacing and optional botanical separators.
 */
var Breadcrumbs = function (_a) {
    var items = _a.items, _b = _a.showHomeIcon, showHomeIcon = _b === void 0 ? true : _b, _c = _a.botanicalSeparator, botanicalSeparator = _c === void 0 ? false : _c, separator = _a.separator, _d = _a.truncate, truncate = _d === void 0 ? false : _d, _e = _a.maxItemWidth, maxItemWidth = _e === void 0 ? '200px' : _e, _f = _a.animated, animated = _f === void 0 ? true : _f, className = _a.className, maxVisibleItems = _a.maxVisibleItems, _g = _a["data-testid"], testId = _g === void 0 ? 'sacred-breadcrumbs' : _g;
    var _h = (0, react_1.useState)(items), visibleItems = _h[0], setVisibleItems = _h[1];
    // Responsive handling
    (0, react_1.useEffect)(function () {
        var _a;
        if (!maxVisibleItems) {
            setVisibleItems(items);
            return;
        }
        // If we need to collapse items
        if (items.length > maxVisibleItems) {
            var firstItem = (_a = items[0]) !== null && _a !== void 0 ? _a : 1;
            var lastItems = items.slice(-Math.max(1, maxVisibleItems - 1));
            // Create a collapsed version
            setVisibleItems(__spreadArray([
                firstItem,
                { label: '...', path: '', isActive: false }
            ], lastItems, true));
        }
        else {
            setVisibleItems(items);
        }
    }, [items, maxVisibleItems]);
    // Default separator
    var defaultSeparator = (<DefaultSeparator aria-hidden="true">/</DefaultSeparator>);
    // Botanical separator
    var botanicalSep = (<BotanicalSeparator aria-hidden="true">
      <botanical_1.OliveBranch size="xs" opacity={0.7} colorScheme="primary"/>
    </BotanicalSeparator>);
    // Determine which separator to use
    var activeSeparator = botanicalSeparator
        ? botanicalSep
        : separator || defaultSeparator;
    // Home icon
    var homeIcon = (<HomeIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </HomeIcon>);
    return (<Container className={className} data-testid={testId} $animated={animated}>
      <List>
        {visibleItems.map(function (item, index) {
            var isLast = index === visibleItems.length - 1;
            return (<React.Fragment key={"".concat(item.label, "-").concat(index)}>
              <ListItem $truncate={truncate}>
                <Link_1.default href={item.path} isActive={item.isActive || isLast} variant={isLast ? 'primary' : 'subtle'} underline="none" size="sm" withHoverEffect={!isLast}>
                  {index === 0 && showHomeIcon && item.label.toLowerCase() === 'home' ? (<span aria-label="Home">
                      {homeIcon}
                    </span>) : (<ItemText $truncate={truncate} $maxWidth={maxItemWidth}>
                      {item.label}
                    </ItemText>)}
                </Link_1.default>
              </ListItem>
              
              {/* Don't show separator after the last item */}
              {!isLast && activeSeparator}
            </React.Fragment>);
        })}
      </List>
    </Container>);
};
var Container = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* Base styles */\n  display: flex;\n  align-items: center;\n  font-size: ", "px; /* 8px */\n  color: ", ";\n  \n  /* Animation */\n  ", "\n"], ["\n  /* Base styles */\n  display: flex;\n  align-items: center;\n  font-size: ", "px; /* 8px */\n  color: ", ";\n  \n  /* Animation */\n  ", "\n"])), getFibonacciByIndex(6), function (props) { return props.theme.colors.text.secondary; }, function (_a) {
    var $animated = _a.$animated;
    return $animated && "\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n        transform: translateY(".concat(getFibonacciByIndex(4), "px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n    \n    animation: fadeIn 0.3s cubic-bezier(").concat(PHI_INVERSE, ", 0, ").concat(1 - PHI_INVERSE, ", 1);\n  ");
});
var List = styled_components_1.default.ol(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"])));
var ListItem = styled_components_1.default.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  \n  /* Truncate */\n  ", "\n"], ["\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  \n  /* Truncate */\n  ", "\n"])), function (_a) {
    var $truncate = _a.$truncate;
    return $truncate && "\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  ";
});
var ItemText = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var $truncate = _a.$truncate, $maxWidth = _a.$maxWidth;
    return $truncate && "\n    display: inline-block;\n    max-width: ".concat(typeof $maxWidth === 'number' ? "".concat($maxWidth, "px") : $maxWidth, ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  ");
});
var DefaultSeparator = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  margin: 0 ", "px; /* 0 5px */\n  color: ", ";\n  font-size: ", "px; /* 8px */\n"], ["\n  display: inline-flex;\n  align-items: center;\n  margin: 0 ", "px; /* 0 5px */\n  color: ", ";\n  font-size: ", "px; /* 8px */\n"])), getFibonacciByIndex(5), function (props) { return props.theme.colors.text.tertiary; }, getFibonacciByIndex(6));
var BotanicalSeparator = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 ", "px; /* 0 3px */\n  transform: rotate(", "deg);\n  width: ", "px; /* 8px */\n  height: ", "px; /* 8px */\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 ", "px; /* 0 3px */\n  transform: rotate(", "deg);\n  width: ", "px; /* 8px */\n  height: ", "px; /* 8px */\n"])), getFibonacciByIndex(4), PHI_INVERSE * 90, getFibonacciByIndex(6), getFibonacciByIndex(6));
var HomeIcon = styled_components_1.default.svg(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", "px; /* 13px */\n  height: ", "px; /* 13px */\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n"], ["\n  width: ", "px; /* 13px */\n  height: ", "px; /* 13px */\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n"])), getFibonacciByIndex(7), getFibonacciByIndex(7));
exports.default = Breadcrumbs;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
