(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(19));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M23.5 1.5C22.6.7 21.9 0 21.9 0H0v21.9l1.5 1.5 23.8 23.8c.8.8 2.2.8 3.1 0l18.9-18.9c.8-.8.8-2.2 0-3.1L23.5 1.5zm-9.8 16.7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"}))};u.displayName="IconTag",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var c=u;t.default=c},1353:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),o=n(995),l=n.n(o),u=function(e){var t=e.url;return a.a.createElement(l.a,{name:"terra-tag",version:"2.30.0",url:t})}},1505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(2)),o=i(n(4)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(20)),u=i(n(2968));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=o.default.bind(u.default),y={href:a.default.string,icon:a.default.element,onClick:a.default.func,onBlur:a.default.func,onFocus:a.default.func,onKeyUp:a.default.func,text:a.default.string.isRequired},h=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=f(t).call(this,e))||"object"!==p(a)&&"function"!=typeof a?_(r):a).state={focused:!1},n.handleKeyUp=n.handleKeyUp.bind(_(n)),n.handleOnBlur=n.handleOnBlur.bind(_(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(a=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===l.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,a=e.href,o=e.onClick,l=(e.onBlur,e.onFocus),u=(e.onKeyUp,s(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),c=g(["tag",{"is-focused":this.state.focused},{"is-interactive":a||o},u.className]),i=g("icon"),p=t?r.default.createElement("span",{className:i},t):null,m=a||o?a?"a":"button":"span";return r.default.createElement(m,d({},u,{className:c,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:o,onFocus:l,href:a}),p,n)}}])&&m(n.prototype,a),o&&m(n,o),t}(r.default.Component);h.propTypes=y;var v=h;t.default=v},2967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1330)),o=l(n(1505));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement(o.default,{text:"Default OnClick Tag",onClick:function(){return window.alert("Tag has been clicked!")}}),r.default.createElement(o.default,{icon:r.default.createElement(a.default,null),onClick:function(){return window.alert("Tag has been clicked!")},text:"Icon & Text OnClick Tag"}))};t.default=u},2968:function(e,t,n){e.exports={tag:"Tag-module__tag___3BFPB","is-interactive":"Tag-module__is-interactive___1MAkg","is-focused":"Tag-module__is-focused___3igsI",icon:"Tag-module__icon___15vYl"}},2969:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1330)),o=l(n(1505));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement(o.default,{href:"http://google.com",text:"HREF Tag"}),r.default.createElement(o.default,{icon:r.default.createElement(a.default,null),href:"http://google.com",text:"Icon & Text HREF Tag"}))};t.default=u},2970:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1330)),o=l(n(1505));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement(o.default,{text:"No OnClick/HREF Tag"}),r.default.createElement(o.default,{icon:r.default.createElement(a.default,null),text:"Icon & Text - No OnClick/HREF Tag"}))};t.default=u},3231:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var r=n(0),a=n.n(r),o=n(354),l=n(1353),u=n(2967),c=n.n(u);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function s(e){var t=e.components,n=p(e,["components"]);return Object(o.mdx)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagDefault = () => (\n  <div>\n    {/* eslint-disable no-alert */}\n    <Tag text=\"Default OnClick Tag\" onClick={() => window.alert('Tag has been clicked!')} />\n    <Tag icon={<IconTag />} onClick={() => window.alert('Tag has been clicked!')} text=\"Icon &amp; Text OnClick Tag\" />\n    {/* eslint-enable no-alert */}\n  </div>\n);\n\nexport default TagDefault;\n\n")))}s.isMDXComponent=!0;var m=n(994),f=n.n(m),_=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Tag Default",description:n,example:a.a.createElement(c.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})},b=n(2969),g=n.n(b);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function O(e){var t=e.components,n=h(e,["components"]);return Object(o.mdx)("wrapper",y({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",y({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport IconTag from \'terra-icon/lib/icon/IconTag\';\nimport Tag from \'terra-tag\';\n\nconst HrefTag = () => (\n  <div>\n    <Tag href="http://google.com" text="HREF Tag" />\n    <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" />\n  </div>\n);\n\nexport default HrefTag;\n\n')))}O.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Href Tag",description:n,example:a.a.createElement(g.a,null),exampleSrc:a.a.createElement(O,null),isExpanded:r})},T=n(2970),j=n.n(T);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P={};function N(e){var t=e.components,n=w(e,["components"]);return Object(o.mdx)("wrapper",E({},P,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",E({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagFallbacks = () => (\n  <div>\n    <Tag text=\"No OnClick/HREF Tag\" />\n    <Tag icon={<IconTag />} text=\"Icon &amp; Text - No OnClick/HREF Tag\" />\n  </div>\n);\n\nexport default TagFallbacks;\n\n")))}N.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Tag Fallbacks",description:n,example:a.a.createElement(j.a,null),exampleSrc:a.a.createElement(N,null),isExpanded:r})},C=n(997),M=n.n(C);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var X=function(){return Object(o.mdx)(M.a,{rows:[{name:"href",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the href. When set will render the component as an anchor tag."))}return t.isMDXComponent=!0,t({})}},{name:"icon",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An optional icon."))}return t.isMDXComponent=!0,t({})}},{name:"onClick",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when clicked."))}return t.isMDXComponent=!0,t({})}},{name:"onBlur",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when tag loses focus."))}return t.isMDXComponent=!0,t({})}},{name:"onFocus",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when tag gains focus."))}return t.isMDXComponent=!0,t({})}},{name:"onKeyUp",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when key is released."))}return t.isMDXComponent=!0,t({})}},{name:"text",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the tag text."))}return t.isMDXComponent=!0,t({})}}]})};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var q={};function R(e){var t=e.components,n=I(e,["components"]);return Object(o.mdx)("wrapper",B({},q,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-tag"},"Terra Tag"),Object(o.mdx)("p",null,"The tag component is used for tagging and provides users a way to trigger actions in the UI. Each tag should have text.\nIt can optionally display an icon along with the text."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",B({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-tag"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",B({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",B({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",B({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",B({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",B({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",B({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",B({parentName:"pre"},{className:"language-jsx"}),"import Tag from 'terra-tag';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("p",null,Object(o.mdx)("a",B({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-tag"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(_,{title:"Default Tag with onClick",mdxType:"TagDefault"}),Object(o.mdx)(x,{title:"Tag with href",mdxType:"TagHref"}),Object(o.mdx)(k,{title:"Tag with no onClick or href",description:"These styles are provided for when this compoment is missing recomended elements for best practice use.",mdxType:"TagFallbacks"}),Object(o.mdx)("h2",{id:"tag-props"},"Tag Props"),Object(o.mdx)(X,{mdxType:"TagPropsTable"}))}R.isMDXComponent=!0},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),o=u(n(4)),l=u(n(999));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(l.default),_={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=i(t).call(this,e))||"object"!==c(a)&&"function"!=typeof a?p(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(p(n)),n.handleCodeToggle=n.handleCodeToggle.bind(p(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),s(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),s(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,o=e.title,l=e.description,u=this.state,c=u.isExpanded,i=u.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(o),r.default.createElement("div",{className:f("content",{"dynamic-content":i})},t.renderDescription(l),n),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),c&&r.default.createElement("div",{className:f("code")},a)))}}]),t}(r.default.Component);b.propTypes=_,b.defaultProps={isExpanded:!1};var g=b;t.default=g},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),o=u(n(4)),l=u(n(996));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),i={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},p=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:c("badge-container")},r.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(a))))};p.propTypes=i;var d=p;t.default=d},996:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},997:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),o=u(n(4)),l=u(n(998));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),i={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},p=function(e){var t=e.rows;return r.default.createElement("table",{className:c("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:c("tr")},r.default.createElement("th",{className:c("th")},"Prop Name"),r.default.createElement("th",{className:c("th")},"Type"),r.default.createElement("th",{className:c("th")},"Is Required"),r.default.createElement("th",{className:c("th")},"Default Value"),r.default.createElement("th",{className:c("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:c(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:c(["td","props-td"])},e.type()),r.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};p.propTypes=i;var d=p;t.default=d},998:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},999:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=120-523719845ca06203b00b.js.map