(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1244:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(2)),n=u(a(4)),o=u(a(1944));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.default.bind(o.default),s={label:r.default.string.isRequired,textValue:r.default.string,children:r.default.node},i={textValue:"",children:void 0},p=function(e){var t,a=e.label,r=e.textValue,n=e.children,o=_(e,["label","textValue","children"]);return r||n?r&&(t=l.default.createElement("div",{className:c("value")},r)):t=l.default.createElement("div",{className:c("value")},"--"),l.default.createElement("div",d({},o,{className:c("label-value-view",o.className)}),l.default.createElement("div",{className:c("label")},a),t,n)};p.propTypes=s,p.defaultProps=i;var m=p;t.default=m},1245:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(4)),n=u(a(19)),o=u(a(1295));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var _=r.default.bind(o.default),c=function(e){var t=d({},e),a=_(["IconCritical",e.className]);return l.default.createElement(n.default,d({className:a},t),l.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),l.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};c.displayName="IconCritical",c.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var s=c;t.default=s},1295:function(e,t,a){e.exports={IconCritical:"IconCritical-module__IconCritical___1b2V4"}},1944:function(e,t,a){e.exports={"label-value-view":"LabelValueView-module__label-value-view___2nQ3w",label:"LabelValueView-module__label___1C_r_",value:"LabelValueView-module__value___1miy8"}},994:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(2)),n=u(a(4)),o=u(a(999));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function i(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=n.default.bind(o.default),f={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},b=function(e){function t(e){var a,l,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l=this,(a=!(r=_(t).call(this,e))||"object"!==d(r)&&"function"!=typeof r?c(l):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(c(a)),a.handleCodeToggle=a.handleCodeToggle.bind(c(a)),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),i(t,null,[{key:"renderHeader",value:function(e){return e?l.default.createElement("div",{className:m("header")},l.default.createElement("h2",{className:m("title")},e)):null}},{key:"renderDescription",value:function(e){return e?l.default.createElement("div",{className:m("description")},e):null}}]),i(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,a=e.example,r=e.exampleSrc,n=e.title,o=e.description,u=this.state,d=u.isExpanded,_=u.isBackgroundTransparent;return l.default.createElement("div",{className:m("template")},t.renderHeader(n),l.default.createElement("div",{className:m("content",{"dynamic-content":_})},t.renderDescription(o),a),r&&l.default.createElement("div",{className:m("footer")},l.default.createElement("div",{className:m("button-container")},l.default.createElement("button",{type:"button",className:m("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),l.default.createElement("button",{type:"button",className:m("code-toggle"),onClick:this.handleCodeToggle},l.default.createElement("span",{className:m("chevron-left")}),l.default.createElement("span",null,"Code"),l.default.createElement("span",{className:m("chevron-right")}))),d&&l.default.createElement("div",{className:m("code")},r)))}}]),t}(l.default.Component);b.propTypes=f,b.defaultProps={isExpanded:!1};var v=b;t.default=v},995:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(2)),n=u(a(4)),o=u(a(996));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),_={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.name,a=e.url,r=e.version;return l.default.createElement("div",{className:d("badge-container")},l.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},l.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(r))))};c.propTypes=_;var s=c;t.default=s},996:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},997:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(2)),n=u(a(4)),o=u(a(998));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),_={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},c=function(e){var t=e.rows;return l.default.createElement("table",{className:d("table")},l.default.createElement("thead",null,l.default.createElement("tr",{className:d("tr")},l.default.createElement("th",{className:d("th")},"Prop Name"),l.default.createElement("th",{className:d("th")},"Type"),l.default.createElement("th",{className:d("th")},"Is Required"),l.default.createElement("th",{className:d("th")},"Default Value"),l.default.createElement("th",{className:d("th")},"Description"))),l.default.createElement("tbody",null,t.map((function(e){return l.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},l.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),l.default.createElement("td",{className:d(["td","props-td"])},e.type()),l.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),l.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),l.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};c.propTypes=_;var s=c;t.default=s},998:function(e,t,a){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},999:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=17-4d529b70d3e5512ad47c.js.map