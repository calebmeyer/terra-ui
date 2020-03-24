(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1183:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var r=t(0),n=t.n(r),i=t(995),l=t.n(i),d=function(e){var a=e.url;return n.a.createElement(l.a,{name:"terra-avatar",version:"2.36.0",url:a})}},3057:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return o}));t(0);var r=t(354),n=t(1183);function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d={};function o(e){var a=e.components,t=l(e,["components"]);return Object(r.mdx)("wrapper",i({},d,t,{components:a,mdxType:"MDXLayout"}),Object(r.mdx)(n.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-avatar-upgrade-guide"},"terra-avatar Upgrade Guide"),Object(r.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),Object(r.mdx)("h3",{id:"props"},"Props"),Object(r.mdx)("h4",{id:"removed"},"Removed"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"variant")," prop. Avatar is now split into three sub components - ",Object(r.mdx)("inlineCode",{parentName:"li"},"Avatar"),", ",Object(r.mdx)("inlineCode",{parentName:"li"},"Facility"),", and ",Object(r.mdx)("inlineCode",{parentName:"li"},"SharedUser"),". ",Object(r.mdx)("inlineCode",{parentName:"li"},"Avatar")," is the default export, while ",Object(r.mdx)("inlineCode",{parentName:"li"},"Facility")," and ",Object(r.mdx)("inlineCode",{parentName:"li"},"SharedUser")," are named exports.")),Object(r.mdx)("h4",{id:"added"},"Added"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"alt")," prop. Represents alternative text. This is required on all variants for accessibility."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"color")," prop. This controls theme specific colors. By default, it is set to ",Object(r.mdx)("inlineCode",{parentName:"li"},"auto"),". ",Object(r.mdx)("inlineCode",{parentName:"li"},"auto")," hashes the ",Object(r.mdx)("inlineCode",{parentName:"li"},"alt")," prop to generate a color. See prop tables for accepted values."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"hashValue")," prop. This value will be used in place of ",Object(r.mdx)("inlineCode",{parentName:"li"},"alt")," to generate a color. Use this if ",Object(r.mdx)("inlineCode",{parentName:"li"},"alt")," should not be used to generate a color."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"isDeceased")," prop. Applies deceased styles to the ",Object(r.mdx)("inlineCode",{parentName:"li"},"avatar")," variant."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"isAriaHidden")," prop. This controls whether to hide the component from accessibility. Use this when avatar is purely decorative in nature."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"size")," prop.")),Object(r.mdx)("h4",{id:"updated"},"Updated"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"initials")," prop now only accepts one or two letters.")),Object(r.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(r.mdx)("h4",{id:"renamed"},"Renamed"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",i({parentName:"tr"},{align:null}),"Previous"),Object(r.mdx)("th",i({parentName:"tr"},{align:null}),"Updated"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-avatar-icon-facility"),Object(r.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-avatar-icon-facility-background-image")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-avatar-icon-user"),Object(r.mdx)("td",i({parentName:"tr"},{align:null}),"--terra-avatar-icon-user-background-image")))),Object(r.mdx)("h4",{id:"removed-1"},"Removed"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-size"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-font-size-large"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-font-size-small")),Object(r.mdx)("h4",{id:"added-1"},"Added"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-height"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-width"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-icon-shared-user-background-image"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-initials-font-size"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-initials-font-weight"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-neutral-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-neutral-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-one-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-one-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-two-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-two-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-three-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-three-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-four-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-four-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-five-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-five-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-six-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-six-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-seven-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-seven-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-eight-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-eight-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-nine-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-nine-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-ten-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-ten-after-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-is-deceased-background-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-image-is-deceased-opacity"),Object(r.mdx)("li",{parentName:"ul"},"--terra-avatar-is-deceased-after-box-shadow")),Object(r.mdx)("h3",{id:"steps-to-uplift-to-v2"},"Steps to uplift to V2"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Use the default export for the ",Object(r.mdx)("inlineCode",{parentName:"li"},"Avatar")," variant. Use a named export for ",Object(r.mdx)("inlineCode",{parentName:"li"},"Facility")," and ",Object(r.mdx)("inlineCode",{parentName:"li"},"SharedUser")," variants."),Object(r.mdx)("li",{parentName:"ol"},"Specify alternative text, using the ",Object(r.mdx)("inlineCode",{parentName:"li"},"alt")," prop."),Object(r.mdx)("li",{parentName:"ol"},"Profit.")),Object(r.mdx)("h4",{id:"v1-code"},"V1 Code"),Object(r.mdx)("pre",null,Object(r.mdx)("code",i({parentName:"pre"},{className:"language-javascript"}),'import Avatar from \'terra-avatar\'\n\n<Avatar variant="Patient 1" initials="AAA" />\n<Avatar variant="facility" />\n')),Object(r.mdx)("h4",{id:"v2-code"},"V2 Code"),Object(r.mdx)("pre",null,Object(r.mdx)("code",i({parentName:"pre"},{className:"language-javascript"}),'import Avatar, { Facility } from \'terra-avatar\'\n\n<Avatar alt="Patient 1" initials="AA" />\n<Facility alt="Location 1" />\n')))}o.isMDXComponent=!0},995:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=d(t(0)),n=d(t(2)),i=d(t(4)),l=d(t(996));function d(e){return e&&e.__esModule?e:{default:e}}var o=i.default.bind(l.default),m={name:n.default.string.isRequired,url:n.default.string,version:n.default.string.isRequired},c=function(e){var a=e.name,t=e.url,n=e.version;return r.default.createElement("div",{className:o("badge-container")},r.default.createElement("a",{className:o("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},r.default.createElement("span",{className:o("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(n))))};c.propTypes=m;var p=c;a.default=p},996:function(e,a,t){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}}}]);
//# sourceMappingURL=226-e90e65c7c4c23b84e93b.js.map