(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1290:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var a=r(0),n=r.n(a),o=r(995),d=r.n(o),u=function(t){var e=t.url;return n.a.createElement(d.a,{name:"terra-button-group",version:"3.33.0",url:e})}},3063:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return c}));r(0);var a=r(354),n=r(1290);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}function d(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u={};function c(t){var e=t.components,r=d(t,["components"]);return Object(a.mdx)("wrapper",o({},u,r,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)(n.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-button-group-upgrade-guide"},"Terra Button Group Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-2-to-3"},"Changes from 2 to 3"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"renamed"},"Renamed"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",o({parentName:"tr"},{align:null}),"Previous"),Object(a.mdx)("th",o({parentName:"tr"},{align:null}),"Updated"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-active-and-hover-background-color"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-selected-and-hover-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-active-and-hover-border-color"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-selected-and-hover-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-active-and-hover-color"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-selected-and-hover-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-active-and-focus-background-color"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-selected-and-focus-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-active-and-focus-border-color"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-selected-and-focus-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-active-and-focus-box-shadow"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-selected-and-focus-box-shadow")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-active-and-focus-color"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-button-group-button-selected-and-focus-color")))),Object(a.mdx)("h3",{id:"added"},"Added"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-and-hover-box-shadow"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-border-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-box-shadow"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-active-box-shadow")))}c.isMDXComponent=!0},995:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(r(0)),n=u(r(2)),o=u(r(4)),d=u(r(996));function u(t){return t&&t.__esModule?t:{default:t}}var c=o.default.bind(d.default),l={name:n.default.string.isRequired,url:n.default.string,version:n.default.string.isRequired},b=function(t){var e=t.name,r=t.url,n=t.version;return a.default.createElement("div",{className:c("badge-container")},a.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(e,"/v/").concat(n)},a.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(n))))};b.propTypes=l;var m=b;e.default=m},996:function(t,e,r){t.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}}}]);
//# sourceMappingURL=236-0b99b26e8325180b29ae.js.map