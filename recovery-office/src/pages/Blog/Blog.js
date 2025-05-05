"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: This file contains direct window access without SSR checks
var React = require("react");
var react_1 = require("react");
;
var styled_components_1 = require("styled-components");
var react_intersection_observer_1 = require("react-intersection-observer");
// Import design system components
var Section_1 = require("../design-system/components/layout/Section");
var Container_1 = require("../design-system/components/layout/Container");
var Card_1 = require("../design-system/components/data-display/Card");
var Button_1 = require("../design-system/components/button/Button");
var animation_1 = require("../animation");
var botanical_1 = require("../design-system/botanical");
// Sample blog posts data (in a real app, this would come from an API)
var sampleBlogPosts = [
    {
        id: '1',
        title: 'Understanding Financial Recovery: A Comprehensive Guide',
        excerpt: 'Learn about the process of financial recovery, common scams, and how to protect yourself from future fraud.',
        content: 'Full content would be here...',
        author: 'Dr. Sarah Johnson',
        authorRole: 'Senior Financial Recovery Specialist',
        authorImage: '/assets/images/team/sarah-johnson.jpg',
        publishDate: '2023-06-15',
        readTime: 8,
        category: 'Financial Recovery',
        imageUrl: '/assets/images/blog/financial-recovery-guide.jpg',
        tags: ['Financial Recovery', 'Fraud Prevention', 'Investment Scams'],
        slug: 'understanding-financial-recovery-guide'
    },
    {
        id: '2',
        title: 'The Psychology of Investment Scams: Why People Fall Victim',
        excerpt: 'Explore the psychological tactics used by fraudsters and how to recognize manipulation techniques.',
        content: 'Full content would be here...',
        author: 'Dr. Michael Chen',
        authorRole: 'Behavioral Finance Expert',
        authorImage: '/assets/images/team/michael-chen.jpg',
        publishDate: '2023-05-22',
        readTime: 6,
        category: 'Psychology',
        imageUrl: '/assets/images/blog/psychology-of-scams.jpg',
        tags: ['Psychology', 'Investment Scams', 'Behavioral Finance'],
        slug: 'psychology-of-investment-scams'
    },
    {
        id: '3',
        title: 'Regulatory Framework: Your Rights in Financial Recovery',
        excerpt: 'Understand the legal framework surrounding financial recovery and your rights as a victim of fraud.',
        content: 'Full content would be here...',
        author: 'Elena Rodriguez',
        authorRole: 'Legal Compliance Director',
        authorImage: '/assets/images/team/elena-rodriguez.jpg',
        publishDate: '2023-04-10',
        readTime: 10,
        category: 'Legal',
        imageUrl: '/assets/images/blog/regulatory-framework.jpg',
        tags: ['Legal', 'Regulatory Compliance', 'Consumer Rights'],
        slug: 'regulatory-framework-financial-recovery'
    },
    {
        id: '4',
        title: 'Cryptocurrency Fraud: New Challenges in Financial Recovery',
        excerpt: 'Explore the unique challenges of recovering assets lost to cryptocurrency fraud and emerging solutions.',
        content: 'Full content would be here...',
        author: 'James Wilson',
        authorRole: 'Digital Asset Recovery Specialist',
        authorImage: '/assets/images/team/james-wilson.jpg',
        publishDate: '2023-03-18',
        readTime: 7,
        category: 'Cryptocurrency',
        imageUrl: '/assets/images/blog/cryptocurrency-fraud.jpg',
        tags: ['Cryptocurrency', 'Digital Assets', 'Blockchain'],
        slug: 'cryptocurrency-fraud-recovery'
    },
    {
        id: '5',
        title: 'Success Stories: Recovering $2.5M from an International Ponzi Scheme',
        excerpt: 'A detailed case study of how we helped a client recover significant assets from a complex international fraud.',
        content: 'Full content would be here...',
        author: 'Dr. Sarah Johnson',
        authorRole: 'Senior Financial Recovery Specialist',
        authorImage: '/assets/images/team/sarah-johnson.jpg',
        publishDate: '2023-02-05',
        readTime: 9,
        category: 'Case Studies',
        imageUrl: '/assets/images/blog/success-story-ponzi.jpg',
        tags: ['Case Studies', 'Ponzi Scheme', 'International Recovery'],
        slug: 'success-story-ponzi-scheme'
    },
    {
        id: '6',
        title: 'The Future of Financial Recovery: AI and Blockchain Solutions',
        excerpt: 'How emerging technologies are transforming the landscape of financial recovery and fraud prevention.',
        content: 'Full content would be here...',
        author: 'Dr. Michael Chen',
        authorRole: 'Behavioral Finance Expert',
        authorImage: '/assets/images/team/michael-chen.jpg',
        publishDate: '2023-01-12',
        readTime: 8,
        category: 'Technology',
        imageUrl: '/assets/images/blog/future-of-recovery.jpg',
        tags: ['Technology', 'AI', 'Blockchain', 'Future Trends'],
        slug: 'future-of-financial-recovery'
    }
];
// Styled components
var BlogPageContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  min-height: 100vh;\n  background-color: ", ";\n  padding-top: ", "px; // 34px\n  padding-bottom: ", "px; // 89px\n"], ["\n  width: 100%;\n  min-height: 100vh;\n  background-color: ", ";\n  padding-top: ", "px; // 34px\n  padding-bottom: ", "px; // 89px\n"])), function (props) { return props.theme.colors.background; }, getFibonacciByIndex(9), getFibonacciByIndex(11));
var BlogHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", "px; // 144px * 10 = 1440px\n  margin: 0 auto;\n  padding: 0 ", "px; // 13px\n  margin-bottom: ", "px; // 55px\n"], ["\n  width: 100%;\n  max-width: ", "px; // 144px * 10 = 1440px\n  margin: 0 auto;\n  padding: 0 ", "px; // 13px\n  margin-bottom: ", "px; // 55px\n"])), getFibonacciByIndex(12), getFibonacciByIndex(7), getFibonacciByIndex(10));
var BlogFilters = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ", "px; // 5px\n  margin-bottom: ", "px; // 21px\n  \n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ", "px; // 5px\n  margin-bottom: ", "px; // 21px\n  \n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"])), getFibonacciByIndex(5), getFibonacciByIndex(8));
var FilterButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "px; // 3px\n  padding: ", "px ", "px; // 5px 8px\n  font-size: ", "px; // ~9.9px\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(", ");\n  \n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "px; // 3px\n  padding: ", "px ", "px; // 5px 8px\n  font-size: ", "px; // ~9.9px\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(", ");\n  \n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var $active = _a.$active, theme = _a.theme;
    return $active ? theme.colors.primary : 'transparent';
}, function (_a) {
    var $active = _a.$active, theme = _a.theme;
    return $active ? theme.colors.background : theme.colors.text;
}, function (props) { return props.theme.colors.primary; }, getFibonacciByIndex(3), getFibonacciByIndex(4), getFibonacciByIndex(6), 16 / PHI, SACRED_EASINGS.standard.join(', '), function (_a) {
    var $active = _a.$active, theme = _a.theme;
    return $active ? theme.colors.primary : theme.colors.primary + '20';
});
var SearchContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  max-width: ", "px; // 55px * 10 = 550px\n  margin-bottom: ", "px; // 34px\n"], ["\n  position: relative;\n  width: 100%;\n  max-width: ", "px; // 55px * 10 = 550px\n  margin-bottom: ", "px; // 34px\n"])), getFibonacciByIndex(10) * 10, getFibonacciByIndex(9));
var SearchInput = styled_components_1.default.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  padding: ", "px ", "px; // 5px 13px\n  padding-left: ", "px; // 21px + 5px = 26px\n  border: 1px solid ", ";\n  border-radius: ", "px; // 3px\n  font-size: ", "px; // ~9.9px\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 ", "px ", "; // 2px\n  }\n"], ["\n  width: 100%;\n  padding: ", "px ", "px; // 5px 13px\n  padding-left: ", "px; // 21px + 5px = 26px\n  border: 1px solid ", ";\n  border-radius: ", "px; // 3px\n  font-size: ", "px; // ~9.9px\n  \n  &:focus {\n    outline: none;\n    border-color: ", ";\n    box-shadow: 0 0 0 ", "px ", "; // 2px\n  }\n"])), getFibonacciByIndex(5), getFibonacciByIndex(7), getFibonacciByIndex(8) + getFibonacciByIndex(5), function (props) { return props.theme.colors.border; }, getFibonacciByIndex(3), 16 / PHI, function (props) { return props.theme.colors.primary; }, getFibonacciByIndex(2), function (props) { return props.theme.colors.primary + '20'; });
var SearchIcon = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  left: ", "px; // 5px\n  top: 50%;\n  transform: translateY(-50%);\n  color: ", ";\n"], ["\n  position: absolute;\n  left: ", "px; // 5px\n  top: 50%;\n  transform: translateY(-50%);\n  color: ", ";\n"])), getFibonacciByIndex(5), function (props) { return props.theme.colors.text + '80'; });
var BlogGrid = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr)); // 55px * 5 = 275px\n  gap: ", "px; // 21px\n  width: 100%;\n  max-width: ", "px; // 144px * 10 = 1440px\n  margin: 0 auto;\n  padding: 0 ", "px; // 13px\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(", "px, 1fr)); // 55px * 5 = 275px\n  gap: ", "px; // 21px\n  width: 100%;\n  max-width: ", "px; // 144px * 10 = 1440px\n  margin: 0 auto;\n  padding: 0 ", "px; // 13px\n  \n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"])), getFibonacciByIndex(10) * 5, getFibonacciByIndex(8), getFibonacciByIndex(12), getFibonacciByIndex(7));
var BlogCard = (0, styled_components_1.default)(Card_1.Card)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: transform 0.3s cubic-bezier(", ");\n  \n  &:hover {\n    transform: translateY(-", "px); // -3px\n  }\n"], ["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: transform 0.3s cubic-bezier(", ");\n  \n  &:hover {\n    transform: translateY(-", "px); // -3px\n  }\n"])), SACRED_EASINGS.standard.join(', '), getFibonacciByIndex(3));
var BlogImage = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: 100%;\n  height: ", "px; // 34px * 5 = 170px\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  border-radius: ", "px ", "px 0 0; // 3px\n"], ["\n  width: 100%;\n  height: ", "px; // 34px * 5 = 170px\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  border-radius: ", "px ", "px 0 0; // 3px\n"])), getFibonacciByIndex(9) * 5, function (_a) {
    var $imageUrl = _a.$imageUrl;
    return $imageUrl;
}, getFibonacciByIndex(3), getFibonacciByIndex(3));
var BlogContent = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  padding: ", "px; // 13px\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n"], ["\n  padding: ", "px; // 13px\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n"])), getFibonacciByIndex(7));
var BlogCategory = styled_components_1.default.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: inline-block;\n  background-color: ", ";\n  color: ", ";\n  padding: ", "px ", "px; // 2px 5px\n  border-radius: ", "px; // 2px\n  font-size: ", "px; // ~6.1px\n  margin-bottom: ", "px; // 5px\n"], ["\n  display: inline-block;\n  background-color: ", ";\n  color: ", ";\n  padding: ", "px ", "px; // 2px 5px\n  border-radius: ", "px; // 2px\n  font-size: ", "px; // ~6.1px\n  margin-bottom: ", "px; // 5px\n"])), function (props) { return props.theme.colors.primary + '10'; }, function (props) { return props.theme.colors.primary; }, getFibonacciByIndex(2), getFibonacciByIndex(4), getFibonacciByIndex(2), 16 / (PHI * PHI), getFibonacciByIndex(4));
var BlogTitle = styled_components_1.default.h3(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: ", "px; // ~18px\n  margin-bottom: ", "px; // 5px\n  line-height: ", ";\n  color: ", ";\n"], ["\n  font-size: ", "px; // ~18px\n  margin-bottom: ", "px; // 5px\n  line-height: ", ";\n  color: ", ";\n"])), 16 * PHI_INVERSE + 8, getFibonacciByIndex(4), PHI, function (props) { return props.theme.colors.text; });
var BlogExcerpt = styled_components_1.default.p(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  font-size: ", "px; // ~9.9px\n  line-height: ", ";\n  color: ", ";\n  margin-bottom: ", "px; // 8px\n  flex-grow: 1;\n"], ["\n  font-size: ", "px; // ~9.9px\n  line-height: ", ";\n  color: ", ";\n  margin-bottom: ", "px; // 8px\n  flex-grow: 1;\n"])), 16 / PHI, PHI, function (props) { return props.theme.colors.text + 'CC'; }, getFibonacciByIndex(6));
var BlogMeta = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", "px; // 8px\n"], ["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", "px; // 8px\n"])), getFibonacciByIndex(6));
var AuthorImage = styled_components_1.default.img(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  width: ", "px; // 13px\n  height: ", "px; // 13px\n  border-radius: 50%;\n  margin-right: ", "px; // 5px\n"], ["\n  width: ", "px; // 13px\n  height: ", "px; // 13px\n  border-radius: 50%;\n  margin-right: ", "px; // 5px\n"])), getFibonacciByIndex(7), getFibonacciByIndex(7), getFibonacciByIndex(4));
var AuthorInfo = styled_components_1.default.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var AuthorName = styled_components_1.default.span(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  font-size: ", "px; // ~6.1px\n  font-weight: 600;\n  color: ", ";\n"], ["\n  font-size: ", "px; // ~6.1px\n  font-weight: 600;\n  color: ", ";\n"])), 16 / (PHI * PHI), function (props) { return props.theme.colors.text; });
var PublishDate = styled_components_1.default.span(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  font-size: ", "px; // ~3.8px\n  color: ", ";\n"], ["\n  font-size: ", "px; // ~3.8px\n  color: ", ";\n"])), 16 / (PHI * PHI * PHI), function (props) { return props.theme.colors.text + '99'; });
var ReadTime = styled_components_1.default.span(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  font-size: ", "px; // ~3.8px\n  color: ", ";\n  margin-left: auto;\n"], ["\n  font-size: ", "px; // ~3.8px\n  color: ", ";\n  margin-left: auto;\n"])), 16 / (PHI * PHI * PHI), function (props) { return props.theme.colors.text + '99'; });
var BlogTags = styled_components_1.default.div(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ", "px; // 3px\n  margin-top: auto;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ", "px; // 3px\n  margin-top: auto;\n"])), getFibonacciByIndex(3));
var BlogTag = styled_components_1.default.span(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  font-size: ", "px; // ~3.8px\n  color: ", ";\n  background-color: ", ";\n  padding: ", "px ", "px; // 2px 3px\n  border-radius: ", "px; // 2px\n"], ["\n  font-size: ", "px; // ~3.8px\n  color: ", ";\n  background-color: ", ";\n  padding: ", "px ", "px; // 2px 3px\n  border-radius: ", "px; // 2px\n"])), 16 / (PHI * PHI * PHI), function (props) { return props.theme.colors.text + '99'; }, function (props) { return props.theme.colors.background + 'DD'; }, getFibonacciByIndex(2), getFibonacciByIndex(3), getFibonacciByIndex(2));
var PaginationContainer = styled_components_1.default.div(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px; // 55px\n"], ["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px; // 55px\n"])), getFibonacciByIndex(10));
var PaginationButton = styled_components_1.default.button(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  width: ", "px; // 13px\n  height: ", "px; // 13px\n  border-radius: 50%;\n  background-color: ", ";\n  border: 1px solid ", ";\n  margin: 0 ", "px; // 3px\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(", ");\n  \n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  width: ", "px; // 13px\n  height: ", "px; // 13px\n  border-radius: 50%;\n  background-color: ", ";\n  border: 1px solid ", ";\n  margin: 0 ", "px; // 3px\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(", ");\n  \n  &:hover {\n    background-color: ", ";\n  }\n"])), getFibonacciByIndex(7), getFibonacciByIndex(7), function (_a) {
    var $active = _a.$active, theme = _a.theme;
    return $active ? theme.colors.primary : 'transparent';
}, function (props) { return props.theme.colors.primary; }, getFibonacciByIndex(3), SACRED_EASINGS.standard.join(', '), function (_a) {
    var $active = _a.$active, theme = _a.theme;
    return $active ? theme.colors.primary : theme.colors.primary + '20';
});
var BotanicalAccent = styled_components_1.default.div(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "%;\n  right: ", "%;\n  transform: translate(50%, -50%);\n  opacity: 0.1;\n  z-index: 0;\n"], ["\n  position: absolute;\n  top: ", "%;\n  right: ", "%;\n  transform: translate(50%, -50%);\n  opacity: 0.1;\n  z-index: 0;\n"])), PHI_INVERSE * 100, PHI_INVERSE * 100);
var BotanicalAccent2 = styled_components_1.default.div(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", "%;\n  left: ", "%;\n  transform: translate(-50%, 50%);\n  opacity: 0.1;\n  z-index: 0;\n"], ["\n  position: absolute;\n  bottom: ", "%;\n  left: ", "%;\n  transform: translate(-50%, 50%);\n  opacity: 0.1;\n  z-index: 0;\n"])), PHI_INVERSE * 100, PHI_INVERSE * 100);
// Blog page component
var Blog = function (_a) {
    var className = _a.className, style = _a.style;
    // State for filtered blog posts
    var _b = (0, react_1.useState)(sampleBlogPosts), filteredPosts = _b[0], setFilteredPosts = _b[1];
    var _c = (0, react_1.useState)(''), searchTerm = _c[0], setSearchTerm = _c[1];
    var _d = (0, react_1.useState)(null), activeCategory = _d[0], setActiveCategory = _d[1];
    var _e = (0, react_1.useState)(1), currentPage = _e[0], setCurrentPage = _e[1];
    // Get unique categories from blog posts
    var categories = Array.from(new Set(sampleBlogPosts.map(function (post) { return post.category; })));
    // Filter blog posts based on search term and category
    (0, react_1.useEffect)(function () {
        var filtered = sampleBlogPosts;
        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(function (post) {
                return post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.tags.some(function (tag) { return tag.toLowerCase().includes(searchTerm.toLowerCase()); });
            });
        }
        // Filter by category
        if (activeCategory) {
            filtered = filtered.filter(function (post) { return post.category === activeCategory; });
        }
        setFilteredPosts(filtered);
        setCurrentPage(1); // Reset to first page when filters change
    }, [searchTerm, activeCategory]);
    // Pagination
    var postsPerPage = 6;
    var totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    var indexOfLastPost = currentPage * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    var currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    // Handle page change
    var handlePageChange = function (pageNumber) {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // Intersection observer for animations
    var _f = (0, react_intersection_observer_1.useInView)({
        triggerOnce: true,
        threshold: 0.1
    }), headerRef = _f[0], headerInView = _f[1];
    var _g = (0, react_intersection_observer_1.useInView)({
        triggerOnce: true,
        threshold: 0.1
    }), gridRef = _g[0], gridInView = _g[1];
    return (<BlogPageContainer className={className} style={style}>
      <Container_1.Container>
        <BotanicalAccent>
          <botanical_1.BotanicalElement variant="flowerOfLife" size="xl" colorScheme="primary" withAnimation={true} animationType="reveal"/>
        </BotanicalAccent>
        
        <BotanicalAccent2>
          <botanical_1.BotanicalElement variant="oliveBranch" size="lg" colorScheme="primary" withAnimation={true} animationType="reveal"/>
        </BotanicalAccent2>
        
        <BlogHeader ref={headerRef}>
          <animation_1.FadeIn isVisible={headerInView} delay={0.1}>
            <Section_1.SectionTitle title="Recovery Office Blog" subtitle="Insights, guides, and success stories from our financial recovery experts" align="center" size="large"/>
          </animation_1.FadeIn>
          
          <animation_1.FadeIn isVisible={headerInView} delay={0.2}>
            <BlogFilters>
              <FilterButton $active={activeCategory === null} onClick={function () { return setActiveCategory(null); }}>
                All
              </FilterButton>
              {categories.map(function (category) { return (<FilterButton key={category} $active={activeCategory === category} onClick={function () { return setActiveCategory(category); }}>
                  {category}
                </FilterButton>); })}
            </BlogFilters>
          </animation_1.FadeIn>
          
          <animation_1.FadeIn isVisible={headerInView} delay={0.3}>
            <SearchContainer>
              <SearchIcon>🔍</SearchIcon>
              <SearchInput type="text" placeholder="Search articles..." value={searchTerm} onChange={function (e) { return setSearchTerm(e.target.value); }}/>
            </SearchContainer>
          </animation_1.FadeIn>
        </BlogHeader>
        
        <BlogGrid ref={gridRef}>
          <animation_1.ScrollReveal isVisible={gridInView} threshold={0.1} staggerChildren={0.1}>
            {currentPosts.map(function (post, index) { return (<BlogCard key={post.id}>
                <BlogImage $imageUrl={post.imageUrl}/>
                <BlogContent>
                  <BlogCategory>{post.category}</BlogCategory>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  
                  <BlogMeta>
                    <AuthorImage src={post.authorImage} alt={post.author}/>
                    <AuthorInfo>
                      <AuthorName>{post.author}</AuthorName>
                      <PublishDate>{new Date(post.publishDate).toLocaleDateString()}</PublishDate>
                    </AuthorInfo>
                    <ReadTime>{post.readTime} min read</ReadTime>
                  </BlogMeta>
                  
                  <BlogTags>
                    {post.tags.slice(0, 3).map(function (tag) { return (<BlogTag key={tag}>#{tag}</BlogTag>); })}
                  </BlogTags>
                  
                  <Button_1.Button variant="text" size="small" style={{ marginTop: "".concat(getFibonacciByIndex(5), "px"), alignSelf: 'flex-start' }}>
                    Read More
                  </Button_1.Button>
                </BlogContent>
              </BlogCard>); })}
          </animation_1.ScrollReveal>
        </BlogGrid>
        
        {totalPages > 1 && (<PaginationContainer>
            {Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (page) { return (<PaginationButton key={page} $active={currentPage === page} onClick={function () { return handlePageChange(page); }}/>); })}
          </PaginationContainer>)}
      </Container_1.Container>
    </BlogPageContainer>);
};
exports.default = Blog;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26;
