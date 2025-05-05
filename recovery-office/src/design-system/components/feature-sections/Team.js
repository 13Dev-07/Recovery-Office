"use strict";
/**
 * Team Component
 *
 * A feature section for displaying team members in a grid layout following sacred
 * geometry principles. The component supports various display styles and botanical
 * accents for visual harmony.
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var utils_1 = require("../utils");
var sacred_geometry_1 = require("../../../constants/sacred-geometry");
var Section_1 = require("../layout/Section");
var Card_1 = require("../data-display/Card");
var Text_1 = require("../typography/Text");
var Heading_1 = require("../typography/Heading");
var botanical_1 = require("../botanical");
var animation_1 = require("../animation");
var Button_1 = require("../button/Button");
// Section container with background styling
var TeamSection = (0, styled_components_1.default)(Section_1.Section)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  padding: ", "px 0;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background: ", ";\n  padding: ", "px 0;\n  overflow: hidden;\n"])), function (props) { return props.$backgroundColor || 'transparent'; }, (0, utils_1.getFibonacciByIndex)(8));
// Team grid with golden ratio proportions
var TeamGrid = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(", ", 1fr);\n  }\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(1, 1fr);\n    gap: ", "px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  gap: ", "px;\n  margin-top: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(", ", 1fr);\n  }\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(1, 1fr);\n    gap: ", "px;\n  }\n"])), function (props) { return props.$columns; }, (0, utils_1.getFibonacciByIndex)(6), (0, utils_1.getFibonacciByIndex)(7), function (props) { return props.theme.breakpoints.lg; }, function (props) { return Math.min(props.$columns - 1, 2); }, function (props) { return props.theme.breakpoints.md; }, (0, utils_1.getFibonacciByIndex)(5));
// Team member card with golden ratio proportions
var MemberCard = (0, styled_components_1.default)(Card_1.Card)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n  /* Use sacred proportions for padding */\n  padding: 0;\n  \n  /* Accent bar if color provided */\n  ", "\n  \n  /* Hover effect with sacred geometry timing */\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    transform: translateY(-", "px);\n  }\n"], ["\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n  /* Use sacred proportions for padding */\n  padding: 0;\n  \n  /* Accent bar if color provided */\n  ", "\n  \n  /* Hover effect with sacred geometry timing */\n  transition: transform 0.3s cubic-bezier(", ", 0, ", ", 1);\n  \n  &:hover {\n    transform: translateY(-", "px);\n  }\n"])), function (props) { return props.$accentColor && "\n    border-top: 3px solid ".concat(props.$accentColor, ";\n  "); }, sacred_geometry_1.PHI_INVERSE, sacred_geometry_1.PHI_INVERSE, (0, utils_1.getFibonacciByIndex)(2));
// Photo container with golden ratio aspect ratio
var PhotoContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  padding-top: ", "%; /* Golden ratio aspect ratio */\n  overflow: hidden;\n"], ["\n  position: relative;\n  width: 100%;\n  padding-top: ", "%; /* Golden ratio aspect ratio */\n  overflow: hidden;\n"])), sacred_geometry_1.PHI_INVERSE * 100);
var Photo = styled_components_1.default.img(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n"])));
// Content container with sacred spacing
var ContentContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: ", "px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"], ["\n  padding: ", "px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"])), (0, utils_1.getFibonacciByIndex)(5));
// Member name with proper typography
var MemberName = (0, styled_components_1.default)(Heading_1.Heading)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  \n  /* Apply sacred geometry to line height */\n  line-height: ", ";\n"], ["\n  margin-bottom: ", "px;\n  \n  /* Apply sacred geometry to line height */\n  line-height: ", ";\n"])), (0, utils_1.getFibonacciByIndex)(3), sacred_geometry_1.PHI);
// Member role with decreased opacity using golden ratio
var MemberRole = (0, styled_components_1.default)(Text_1.Text)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n  /* Apply golden ratio to opacity for visual harmony */\n  opacity: ", ";\n"], ["\n  margin-bottom: ", "px;\n  /* Apply golden ratio to opacity for visual harmony */\n  opacity: ", ";\n"])), (0, utils_1.getFibonacciByIndex)(4), sacred_geometry_1.PHI_INVERSE + 0.2);
// Bio text with proper line height
var MemberBio = (0, styled_components_1.default)(Text_1.Text)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: ", "px;\n  /* Apply sacred geometry to line height */\n  line-height: ", ";\n  flex: 1;\n"], ["\n  margin-top: ", "px;\n  /* Apply sacred geometry to line height */\n  line-height: ", ";\n  flex: 1;\n"])), (0, utils_1.getFibonacciByIndex)(4), sacred_geometry_1.PHI);
// Specialties list with sacred spacing
var SpecialtiesList = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-top: ", "px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: ", "px;\n"], ["\n  margin-top: ", "px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(4), (0, utils_1.getFibonacciByIndex)(2));
var SpecialtyTag = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: ", "px ", "px;\n  border-radius: ", "px;\n  font-size: 0.8em;\n"], ["\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: ", "px ", "px;\n  border-radius: ", "px;\n  font-size: 0.8em;\n"])), (0, utils_1.getFibonacciByIndex)(2), (0, utils_1.getFibonacciByIndex)(3), (0, utils_1.getFibonacciByIndex)(2));
// Links container with sacred spacing
var LinksContainer = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  gap: ", "px;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  gap: ", "px;\n  margin-top: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(3), (0, utils_1.getFibonacciByIndex)(4));
var SocialLink = styled_components_1.default.a(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.05);\n  color: ", ";\n  \n  &:hover {\n    background-color: ", ";\n    color: white;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.05);\n  color: ", ";\n  \n  &:hover {\n    background-color: ", ";\n    color: white;\n  }\n"])), (0, utils_1.getFibonacciByIndex)(5), (0, utils_1.getFibonacciByIndex)(5), function (props) { var _a; return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1; }, function (props) { var _a; return (_a = props.theme.colors.primary[500]) !== null && _a !== void 0 ? _a : 1; });
// List layout styles
var MemberListItem = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: ", "px;\n  \n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  margin-bottom: ", "px;\n  \n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"])), (0, utils_1.getFibonacciByIndex)(6), function (props) { return props.theme.breakpoints.md; });
var MemberListPhoto = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  width: ", "px;\n  min-width: ", "px;\n  height: ", "px;\n  overflow: hidden;\n  margin-right: ", "px;\n  border-radius: ", "px;\n  \n  @media (max-width: ", ") {\n    width: 100%;\n    min-width: auto;\n    height: auto;\n    aspect-ratio: ", ";\n    margin-right: 0;\n    margin-bottom: ", "px;\n  }\n  \n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center top;\n  }\n"], ["\n  width: ", "px;\n  min-width: ", "px;\n  height: ", "px;\n  overflow: hidden;\n  margin-right: ", "px;\n  border-radius: ", "px;\n  \n  @media (max-width: ", ") {\n    width: 100%;\n    min-width: auto;\n    height: auto;\n    aspect-ratio: ", ";\n    margin-right: 0;\n    margin-bottom: ", "px;\n  }\n  \n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center top;\n  }\n"])), (0, utils_1.getFibonacciByIndex)(9), (0, utils_1.getFibonacciByIndex)(9), (0, utils_1.getFibonacciByIndex)(9), (0, utils_1.getFibonacciByIndex)(6), (0, utils_1.getFibonacciByIndex)(2), function (props) { return props.theme.breakpoints.md; }, sacred_geometry_1.PHI, (0, utils_1.getFibonacciByIndex)(5));
var MemberListContent = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
// Featured layout styles
var FeaturedContainer = styled_components_1.default.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(7));
var FeaturedMember = styled_components_1.default.div(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: ", "px;\n  \n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  margin-bottom: ", "px;\n  \n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"])), (0, utils_1.getFibonacciByIndex)(7), function (props) { return props.theme.breakpoints.md; });
var FeaturedPhotoContainer = styled_components_1.default.div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  width: 40%;\n  padding-right: ", "px;\n  \n  @media (max-width: ", ") {\n    width: 100%;\n    padding-right: 0;\n    padding-bottom: ", "px;\n  }\n"], ["\n  width: 40%;\n  padding-right: ", "px;\n  \n  @media (max-width: ", ") {\n    width: 100%;\n    padding-right: 0;\n    padding-bottom: ", "px;\n  }\n"])), (0, utils_1.getFibonacciByIndex)(6), function (props) { return props.theme.breakpoints.md; }, (0, utils_1.getFibonacciByIndex)(6));
var FeaturedContentContainer = styled_components_1.default.div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var RegularTeamGrid = styled_components_1.default.div(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  @media (max-width: ", ") {\n    grid-template-columns: 1fr;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: ", "px;\n  \n  @media (max-width: ", ") {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  @media (max-width: ", ") {\n    grid-template-columns: 1fr;\n  }\n"])), (0, utils_1.getFibonacciByIndex)(6), function (props) { return props.theme.breakpoints.lg; }, function (props) { return props.theme.breakpoints.sm; });
// CTA container
var CTAContainer = styled_components_1.default.div(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n"])), (0, utils_1.getFibonacciByIndex)(7));
/**
 * Team component for displaying team members in various layouts,
 * following sacred geometry principles for spacing and proportions.
 */
var Team = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, members = _a.members, _b = _a.displayStyle, displayStyle = _b === void 0 ? 'grid' : _b, _c = _a.columns, columns = _c === void 0 ? 3 : _c, backgroundColor = _a.backgroundColor, _d = _a.showDetailedBio, showDetailedBio = _d === void 0 ? false : _d, _e = _a.animated, animated = _e === void 0 ? true : _e, botanical = _a.botanical, cta = _a.cta, className = _a.className, style = _a.style;
    /**
     * Get the appropriate social media icon based on link type
     */
    var getSocialIcon = function (type) {
        switch (type) {
            case 'linkedin':
                return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z"/>
          </svg>);
            case 'email':
                return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
          </svg>);
            case 'website':
                return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"/>
          </svg>);
            case 'twitter':
                return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
          </svg>);
            case 'instagram':
                return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"/>
          </svg>);
            default:
                return null;
        }
    };
    /**
     * Render an individual team member card
     */
    var renderMemberCard = function (member, index) {
        var content = (<MemberCard $accentColor={member.accentColor}>
        <PhotoContainer>
          <Photo src={member.photoUrl} alt={member.name}/>
        </PhotoContainer>
        
        <ContentContainer>
          <MemberName variant="h4">{member.name}</MemberName>
          <MemberRole variant="subtitle2">{member.role}</MemberRole>
          
          {showDetailedBio && member.bio && (<MemberBio variant="body2">{member.bio}</MemberBio>)}
          
          {member.specialties && member.specialties.length > 0 && (<SpecialtiesList>
              {member.specialties.map(function (specialty, idx) { return (<SpecialtyTag key={idx}>{specialty}</SpecialtyTag>); })}
            </SpecialtiesList>)}
          
          {member.links && member.links.length > 0 && (<LinksContainer>
              {member.links.map(function (link, idx) { return (<SocialLink key={idx} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label || link.type}>
                  {getSocialIcon(link.type)}
                </SocialLink>); })}
            </LinksContainer>)}
        </ContentContainer>
      </MemberCard>);
        if (animated) {
            return (<animation_1.ScaleFade key={member.id} delay={index * 0.1}>
          {content}
        </animation_1.ScaleFade>);
        }
        return <div key={member.id}>{content}</div>;
    };
    /**
     * Render a team member in list format
     */
    var renderMemberListItem = function (member, index) {
        var content = (<MemberListItem key={member.id}>
        <MemberListPhoto>
          <img src={member.photoUrl} alt={member.name}/>
        </MemberListPhoto>
        
        <MemberListContent>
          <MemberName variant="h4">{member.name}</MemberName>
          <MemberRole variant="subtitle2">{member.role}</MemberRole>
          
          {member.bio && (<MemberBio variant="body2">{member.bio}</MemberBio>)}
          
          {member.specialties && member.specialties.length > 0 && (<SpecialtiesList>
              {member.specialties.map(function (specialty, idx) { return (<SpecialtyTag key={idx}>{specialty}</SpecialtyTag>); })}
            </SpecialtiesList>)}
          
          {member.links && member.links.length > 0 && (<LinksContainer>
              {member.links.map(function (link, idx) { return (<SocialLink key={idx} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label || link.type}>
                  {getSocialIcon(link.type)}
                </SocialLink>); })}
            </LinksContainer>)}
        </MemberListContent>
      </MemberListItem>);
        if (animated) {
            return (<animation_1.FadeIn key={member.id} delay={index * 0.1}>
          {content}
        </animation_1.FadeIn>);
        }
        return content;
    };
    /**
     * Render team members in a grid layout
     */
    var renderGrid = function () {
        return (<TeamGrid $columns={columns}>
        {members.map(function (member, index) { return renderMemberCard(member, index); })}
      </TeamGrid>);
    };
    /**
     * Render team members in a list layout
     */
    var renderList = function () {
        return (<div>
        {members.map(function (member, index) { return renderMemberListItem(member, index); })}
      </div>);
    };
    /**
     * Render team with a featured member and grid
     */
    var renderFeatured = function () {
        if (members.length === 0)
            return null;
        var featured = members[0], rest = members.slice(1);
        return (<FeaturedContainer>
        <FeaturedMember>
          <FeaturedPhotoContainer>
            <PhotoContainer>
              <Photo src={featured.photoUrl} alt={featured.name}/>
            </PhotoContainer>
          </FeaturedPhotoContainer>
          
          <FeaturedContentContainer>
            <MemberName variant="h3">{featured.name}</MemberName>
            <MemberRole variant="subtitle1">{featured.role}</MemberRole>
            
            {featured.bio && (<MemberBio variant="body1">{featured.bio}</MemberBio>)}
            
            {featured.specialties && featured.specialties.length > 0 && (<SpecialtiesList>
                {featured.specialties.map(function (specialty, idx) { return (<SpecialtyTag key={idx}>{specialty}</SpecialtyTag>); })}
              </SpecialtiesList>)}
            
            {featured.links && featured.links.length > 0 && (<LinksContainer>
                {featured.links.map(function (link, idx) { return (<SocialLink key={idx} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label || link.type}>
                    {getSocialIcon(link.type)}
                  </SocialLink>); })}
              </LinksContainer>)}
          </FeaturedContentContainer>
        </FeaturedMember>
        
        {rest.length > 0 && (<RegularTeamGrid>
            {rest.map(function (member, index) { return renderMemberCard(member, index + 1); })}
          </RegularTeamGrid>)}
      </FeaturedContainer>);
    };
    /**
     * Render team based on the selected display style
     */
    var renderTeam = function () {
        switch (displayStyle) {
            case 'list':
                return renderList();
            case 'featured':
                return renderFeatured();
            case 'grid':
            default:
                return renderGrid();
        }
    };
    return (<TeamSection $backgroundColor={backgroundColor} className={className} style={style}>
      {botanical && (<botanical_1.BotanicalElement type={botanical.type} position={botanical.position} size={botanical.size} opacity={botanical.opacity}/>)}
      
      <Section_1.SectionTitle title={title} subtitle={subtitle} centered animated={animated}/>
      
      {renderTeam()}
      
      {cta && (<CTAContainer>
          <Button_1.Button variant={cta.variant || 'primary'} href={cta.url}>
            {cta.label}
          </Button_1.Button>
        </CTAContainer>)}
    </TeamSection>);
};
exports.default = Team;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22;
