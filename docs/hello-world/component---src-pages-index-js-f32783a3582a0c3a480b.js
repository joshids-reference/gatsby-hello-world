(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "LbRr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__("+ZDr");
var gatsby_link_default = /*#__PURE__*/__webpack_require__.n(gatsby_link);

// EXTERNAL MODULE: ./.cache/public-page-renderer.js
var public_page_renderer = __webpack_require__("lw3w");

// EXTERNAL MODULE: ./.cache/loader.js + 3 modules
var loader = __webpack_require__("emEt");

// CONCATENATED MODULE: ./.cache/gatsby-browser-entry.js
var prefetchPathname=loader["default"].enqueue;var StaticQueryContext=react_default.a.createContext({});function StaticQueryDataRenderer(_ref){var staticQueryData=_ref.staticQueryData,data=_ref.data,query=_ref.query,render=_ref.render;var finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return react_default.a.createElement(react_default.a.Fragment,null,finalData&&render(finalData),!finalData&&react_default.a.createElement("div",null,"Loading (StaticQuery)"));}var gatsby_browser_entry_StaticQuery=function StaticQuery(props){var data=props.data,query=props.query,render=props.render,children=props.children;return react_default.a.createElement(StaticQueryContext.Consumer,null,function(staticQueryData){return react_default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData});});};var gatsby_browser_entry_useStaticQuery=function useStaticQuery(query){if(typeof react_default.a.useContext!=="function"&&"production"==="development"){throw new Error("You're likely using a version of React that doesn't support Hooks\n"+"Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");}var context=react_default.a.useContext(StaticQueryContext);if(context[query]&&context[query].data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}
// CONCATENATED MODULE: ./src/components/header.js
/* harmony default export */ var header = __webpack_exports__["a"] = (function(props){return react_default.a.createElement("div",null,react_default.a.createElement("div",null,react_default.a.createElement(gatsby_link_default.a,{to:"/"},"Home")," | ",react_default.a.createElement(gatsby_link_default.a,{to:"/about/"},"About")," |"," ",react_default.a.createElement(gatsby_link_default.a,{to:"/contact/"},"Contact")),react_default.a.createElement("h1",null,props.headerText));});

/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LbRr");
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{color:"purple"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{headerText:"Gatsby!"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"says Darshan"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"https://source.unsplash.com/random/400x200",alt:""}));});

/***/ }),

/***/ "lw3w":
/***/ (function(module, exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};if(false){}else if(true){module.exports=preferDefault(__webpack_require__("rzlk"));}else{}

/***/ }),

/***/ "rzlk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("91GP");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IOVJ");
var ProdPageRenderer=function ProdPageRenderer(_ref){var location=_ref.location,pageResources=_ref.pageResources;if(!pageResources){return null;}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object.assign({location:location,pageResources:pageResources},pageResources.json));};/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-f32783a3582a0c3a480b.js.map