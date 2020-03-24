(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1359:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),l=n(995),o=n.n(l),u=function(e){var t=e.url;return a.a.createElement(o.a,{name:"terra-visually-hidden-text",version:"2.24.0",url:t})}},3026:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(164));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("p",null,"Focus in this section to hear screen reader only text",r.default.createElement(a.default,{tabIndex:"0",text:"This is read by a screen reader"}))}},3027:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(164));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return u(this,t),i(this,c(t).apply(this,arguments))}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(l=[{key:"componentDidMount",value:function(){this.visuallyHiddenText.innerText="Text written via refCallback innerText update"}},{key:"render",value:function(){var e=this;return r.default.createElement("p",null,"Visually Hidden Text which uses refCallback to write innerText",r.default.createElement(a.default,{refCallback:function(t){e.visuallyHiddenText=t}}))}}])&&d(n.prototype,l),o&&d(n,o),t}(r.default.Component);t.default=p},3247:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(0),a=n.n(r),l=n(354),o=n(1359),u=n(3026),d=n.n(u);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function p(e){var t=e.components,n=c(e,["components"]);return Object(l.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nexport default () => (\n  <p>\n     Focus in this section to hear screen reader only text\n    <VisuallyHiddenText tabIndex=\"0\" text=\"This is read by a screen reader\" />\n  </p>\n);\n\n")))}p.isMDXComponent=!0;var m=n(994),f=n.n(m),_=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Default Visually Hidden Text",description:n,example:a.a.createElement(d.a,null),exampleSrc:a.a.createElement(p,null),isExpanded:r})},b=n(3027),y=n.n(b);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function g(e){var t=e.components,n=h(e,["components"]);return Object(l.mdx)("wrapper",x({},v,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",x({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nclass Example extends React.Component {\n  componentDidMount() {\n    this.visuallyHiddenText.innerText = 'Text written via refCallback innerText update';\n  }\n\n  render() {\n    return (\n      <p>\n        Visually Hidden Text which uses refCallback to write innerText\n        <VisuallyHiddenText refCallback={(ref) => { this.visuallyHiddenText = ref; }} />\n      </p>\n    );\n  }\n}\n\nexport default Example;\n\n")))}g.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Ref Callback Visually Hidden Text",description:n,example:a.a.createElement(y.a,null),exampleSrc:a.a.createElement(g,null),isExpanded:r})},T=n(997),j=n.n(T);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P=function(){return Object(l.mdx)(j.a,{rows:[{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(l.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(l.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Callback ref to pass into the dom element. This is useful when using terra-visually-hidden-text as an aria-live container."))}return t.isMDXComponent=!0,t({})}},{name:"text",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(l.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(l.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Text to be read to the screen reader"))}return t.isMDXComponent=!0,t({})}}]})};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={};function S(e){var t=e.components,n=k(e,["components"]);return Object(l.mdx)("wrapper",N({},C,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(o.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-visually-hidden-text"},"Terra Visually Hidden Text"),Object(l.mdx)("p",null,"Visually Hidden Text is a component designed for screen readers that renders text on the dom, but is not visible to the UI. Some components such as badge will have a visual indication to note their hierarchy on the page, but that indication is lost when a screen reader is used on the web page. Visually Hidden text would allow your application to provide that additional context to a screen reader."),Object(l.mdx)("p",null,"Another reason for this component is when you want to produce more semantic markup for a screen reader only experience. Some various examples include:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"You may want to provide a visually hidden header to allow for better readability."),Object(l.mdx)("li",{parentName:"ul"},"You may need to provide different instructions for visual users vs non visual users."),Object(l.mdx)("li",{parentName:"ul"},"div nodes have a difficult understanding the aria-label attributes as well.")),Object(l.mdx)("p",null,"In these instances, it's recommended to use visually hidden text."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",N({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-visually-hidden-text"))))),Object(l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",N({parentName:"tr"},{align:null}),"Peer Dependency"),Object(l.mdx)("th",N({parentName:"tr"},{align:null}),"Version"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",N({parentName:"tr"},{align:null}),"react"),Object(l.mdx)("td",N({parentName:"tr"},{align:null}),"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",N({parentName:"tr"},{align:null}),"react-dom"),Object(l.mdx)("td",N({parentName:"tr"},{align:null}),"^16.8.5")))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",N({parentName:"pre"},{className:"language-jsx"}),"import VisuallyHiddenText from '../../../VisuallyHiddenText';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",N({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/features"}),"Cross-Browser Support"))),Object(l.mdx)("p",null,Object(l.mdx)("a",N({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-visually-hidden-text"}),"View component source code")),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(_,{title:"VisuallyHiddenText with empty string",mdxType:"DefaultVisuallyHiddenText"}),Object(l.mdx)(O,{title:"VisuallyHiddenText with ref Callback",mdxType:"RefCallbackVisuallyHiddenText"}),Object(l.mdx)("h2",{id:"visually-hidden-text-props"},"Visually Hidden Text Props"),Object(l.mdx)(P,{mdxType:"VisuallyHiddenTextPropsTable"}))}S.isMDXComponent=!0},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),l=u(n(4)),o=u(n(999));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=l.default.bind(o.default),_={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=i(t).call(this,e))||"object"!==d(a)&&"function"!=typeof a?c(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(c(n)),n.handleCodeToggle=n.handleCodeToggle.bind(c(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),p(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),p(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,l=e.title,o=e.description,u=this.state,d=u.isExpanded,i=u.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(l),r.default.createElement("div",{className:f("content",{"dynamic-content":i})},t.renderDescription(o),n),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),d&&r.default.createElement("div",{className:f("code")},a)))}}]),t}(r.default.Component);b.propTypes=_,b.defaultProps={isExpanded:!1};var y=b;t.default=y},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),l=u(n(4)),o=u(n(996));function u(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),i={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},c=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:d("badge-container")},r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(a))))};c.propTypes=i;var s=c;t.default=s},996:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},997:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),l=u(n(4)),o=u(n(998));function u(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),i={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},c=function(e){var t=e.rows;return r.default.createElement("table",{className:d("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:d("tr")},r.default.createElement("th",{className:d("th")},"Prop Name"),r.default.createElement("th",{className:d("th")},"Type"),r.default.createElement("th",{className:d("th")},"Is Required"),r.default.createElement("th",{className:d("th")},"Default Value"),r.default.createElement("th",{className:d("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:d(["td","props-td"])},e.type()),r.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};c.propTypes=i;var s=c;t.default=s},998:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},999:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=168-32a871404cc39bb6e1b5.js.map