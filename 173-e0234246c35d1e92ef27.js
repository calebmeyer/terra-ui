(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1329:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(995),l=n.n(o),i=function(e){var t=e.url;return r.a.createElement(l.a,{name:"terra-i18n",version:"4.25.0",url:t})}},2438:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(0))&&a.__esModule?a:{default:a},o=n(7),l=n(389);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=c(t).call(this,e))||"object"!==i(r)&&"function"!=typeof r?s(a):r).state={areTranslationsLoaded:!1,locale:"en-US",messages:{}},n.handleLocaleChange=n.handleLocaleChange.bind(s(n)),n}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){(0,l.i18nLoader)(this.state.locale,this.setState,this)}},{key:"handleLocaleChange",value:function(e){(0,l.i18nLoader)(e.target.value,this.setState,this)}},{key:"render",value:function(){return this.state.areTranslationsLoaded?r.default.createElement(l.I18nProvider,{locale:this.state.locale,messages:this.state.messages},r.default.createElement("div",null,r.default.createElement("span",null," Example Message Format: "),r.default.createElement(o.FormattedMessage,{id:"Terra.ajax.error"})),r.default.createElement("p",null,r.default.createElement("span",null," Example Number Format: "),r.default.createElement(o.FormattedNumber,{value:parseFloat("1123432.123")})),r.default.createElement("p",null,r.default.createElement("span",null,"Example Date Format: "),r.default.createElement(o.FormattedDate,{value:new Date(1575476163287)})),r.default.createElement("label",{htmlFor:"locale"}," ","Current locale:",this.state.locale," "),r.default.createElement("select",{id:"locale",value:this.state.locale,onChange:this.handleLocaleChange},r.default.createElement("option",{value:"en"},"en"),r.default.createElement("option",{value:"en-GB"},"en-GB"),r.default.createElement("option",{value:"en-US"},"en-US"),r.default.createElement("option",{value:"de"},"de"),r.default.createElement("option",{value:"es"},"es"),r.default.createElement("option",{value:"fr"},"fr"),r.default.createElement("option",{value:"nl"},"nl"),r.default.createElement("option",{value:"pt"},"pt"))):r.default.createElement("div",null)}}])&&d(n.prototype,a),u&&d(n,u),t}(r.default.Component);t.default=function(){return r.default.createElement(u,null)}},3265:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var a=n(0),r=n.n(a),o=n(354),l=n(1329),i=n(2438),d=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function u(e){var t=e.components,n=s(e,["components"]);return Object(o.mdx)("wrapper",c({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport { FormattedMessage, FormattedDate, FormattedNumber } from \'react-intl\';\nimport { I18nProvider, i18nLoader } from \'terra-i18n\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      areTranslationsLoaded: false,\n      locale: \'en-US\',\n      messages: {},\n    };\n    this.handleLocaleChange = this.handleLocaleChange.bind(this);\n  }\n\n  componentDidMount() {\n    i18nLoader(this.state.locale, this.setState, this);\n  }\n\n  handleLocaleChange(e) {\n    i18nLoader(e.target.value, this.setState, this);\n  }\n\n  render() {\n    if (!this.state.areTranslationsLoaded) {\n      return <div />;\n    }\n    return (\n      <I18nProvider\n        locale={this.state.locale}\n        messages={this.state.messages}\n      >\n        <div>\n          <span> Example Message Format: </span>\n          <FormattedMessage id="Terra.ajax.error" />\n        </div>\n        <p>\n          <span> Example Number Format: </span>\n          <FormattedNumber value={parseFloat(\'1123432.123\')} />\n        </p>\n        <p>\n          <span>Example Date Format: </span>\n          <FormattedDate value={new Date(1575476163287)} />\n        </p>\n        <label htmlFor="locale">\n          {\' \'}\nCurrent locale:\n          {this.state.locale}\n          {\' \'}\n\n        </label>\n        <select id="locale" value={this.state.locale} onChange={this.handleLocaleChange}>\n          <option value="en">en</option>\n          <option value="en-GB">en-GB</option>\n          <option value="en-US">en-US</option>\n          <option value="de">de</option>\n          <option value="es">es</option>\n          <option value="fr">fr</option>\n          <option value="nl">nl</option>\n          <option value="pt">pt</option>\n        </select>\n      </I18nProvider>\n    );\n  }\n}\n\nexport default () => <Demo />;\n\n')))}u.isMDXComponent=!0;var m=n(994),b=n.n(m),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(b.a,{title:t||"I 18 N Demo",description:n,example:r.a.createElement(d.a,null),exampleSrc:r.a.createElement(u,null),isExpanded:a})},h=n(997),_=n.n(h);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=function(){return Object(o.mdx)(_.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=x(t,["components"]);return Object(o.mdx)("wrapper",g({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=x(t,["components"]);return Object(o.mdx)("wrapper",g({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The component that will be wrapped by i18n provider."))}return t.isMDXComponent=!0,t({})}},{name:"locale",type:function(){var e={};function t(t){var n=t.components,a=x(t,["components"]);return Object(o.mdx)("wrapper",g({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=x(t,["components"]);return Object(o.mdx)("wrapper",g({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The locale name."))}return t.isMDXComponent=!0,t({})}},{name:"messages",type:function(){var e={};function t(t){var n=t.components,a=x(t,["components"]);return Object(o.mdx)("wrapper",g({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"shape"),Object(o.mdx)("pre",null,Object(o.mdx)("code",g({parentName:"pre"},{className:"language-json"}),"{}\n")))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=x(t,["components"]);return Object(o.mdx)("wrapper",g({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Translations messages object."))}return t.isMDXComponent=!0,t({})}}]})};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var j={};function N(e){var t=e.components,n=y(e,["components"]);return Object(o.mdx)("wrapper",v({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-i18n"},"Terra I18n"),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("p",null,"This component is not intended for direct usage by developers. It is recommended to use the ",Object(o.mdx)("inlineCode",{parentName:"p"},"terra-base")," component instead which acts as an abstraction around terra-i18n and react-intl's Intl Provider component. See ",Object(o.mdx)("a",v({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-base"}),Object(o.mdx)("inlineCode",{parentName:"a"},"terra-base documentation"))," to get started."),Object(o.mdx)("p",null,"However, terra-i18n can be installed with ",Object(o.mdx)("a",v({parentName:"p"},{href:"https://www.npmjs.com/"}),"npmjs"),":"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-i18n"))),Object(o.mdx)("p",null,"The terra-i18n package provides internationalization for React components by loading translations and locale data on demand and providing the translated messages to the component. It does this by utilizing the ",Object(o.mdx)("a",v({parentName:"p"},{href:"https://github.com/yahoo/react-intl"}),Object(o.mdx)("inlineCode",{parentName:"a"},"react-intl"))," dependency to provide the formatted translation messages to the supplied React children. To enable this behavior, terra-i18n provides the ",Object(o.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," components."),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",v({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",v({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",v({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",v({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",v({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",v({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",v({parentName:"tr"},{align:null}),"react-intl"),Object(o.mdx)("td",v({parentName:"tr"},{align:null}),"^2.8.0")))),Object(o.mdx)("h2",{id:"i18nloader"},"i18nLoader"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," component guarantees that the Intl polyfill, locale data and translation messages are loaded before the translation-needing component is rendered. ",Object(o.mdx)("em",{parentName:"p"},"This loader should be utilized only once within an application, because all internationalization information is loaded into memory to remove the need to dynamically load locale data on the server.")),Object(o.mdx)("p",null,"Note: the ",Object(o.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," state object for the callback must contain the following keys to work properly:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"areTranslationsLoaded")," - ",Object(o.mdx)("em",{parentName:"li"},"boolean")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"locale")," - ",Object(o.mdx)("em",{parentName:"li"},"string")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"messages")," - ",Object(o.mdx)("em",{parentName:"li"},"key-value pairs such that the key is the message name and the value is the translation message"))),Object(o.mdx)("h2",{id:"i18nprovider"},"I18nProvider"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," component configures the react-intl's ",Object(o.mdx)("inlineCode",{parentName:"p"},"IntlProvider")," and supplies it with the translation-needing components such that the i18n context is accessible. Usually, one ",Object(o.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," will wrap an application's root component such that the entire application is within the same configured i18n context, however it is possible to render nested ",Object(o.mdx)("inlineCode",{parentName:"p"},"I18nProvider")," components to provide different, or modified i18n context."),Object(o.mdx)("h3",{id:"supported-locales"},"Supported Locales"),Object(o.mdx)("p",null,Object(o.mdx)("a",v({parentName:"p"},{href:"https://github.com/cerner/terra-aggregate-translations/blob/master/config/i18nSupportedLocales.js"}),"You can view a list of locales supported by Terra UI here.")),Object(o.mdx)("h3",{id:"non-supported-locales"},"Non-Supported Locales"),Object(o.mdx)("p",null,"It is possible to add and load non-supported locales with ",Object(o.mdx)("inlineCode",{parentName:"p"},"terra-i18n"),", however one must ensure the locales are supported by ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-intl"),", otherwise no locale-data will exist and loading the intl data will result in an error. Once confirmed that the locale is supported by ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-intl"),", one is responsible for including the appropriate translations messages for each terra component used in your application, otherwise the translations will fail and ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-intl")," will display the message name as the fallback."),Object(o.mdx)("h3",{id:"locale-fallback"},"Locale Fallback"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"i18nLoader")," loads internationalized information from the translationLoader and intlLoader modules, both which utilize a locale fallback strategy. This implemented fallback strategy when loading a locale is:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Try the regional locale (if applicable)"),Object(o.mdx)("li",{parentName:"ol"},"Try the base locale"),Object(o.mdx)("li",{parentName:"ol"},"Try the 'en' base locale"),Object(o.mdx)("li",{parentName:"ol"},"Throw an error if 'en' is not provided")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Note:")," This fallback strategy is only applied when an aggregated translation file does not exist. For example if the 'es' locale is loaded and the translation for ",Object(o.mdx)("inlineCode",{parentName:"p"},"Terra.button.close")," is missing, ",Object(o.mdx)("inlineCode",{parentName:"p"},"react-intl")," will display the ",Object(o.mdx)("inlineCode",{parentName:"p"},"Terra.button.close")," message name, not the english translation, because locale data was only loaded for 'es'. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"terra-i18n")," package does not support loading multiple locales at once. This ensures an application will never have a mix of 'es' and 'en' translations."),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",v({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",v({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",v({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",v({parentName:"li"},{href:"https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n"}),"react_on_rails Compatible")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",v({parentName:"li"},{href:"https://github.com/webpack/docs/wiki/configuration#outputpublicpath"}),"CND Compatible"))),Object(o.mdx)("p",null,Object(o.mdx)("a",v({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-i18n"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(f,{title:"I18nProvider Example",description:"Note: This is an example of a nested I18nProvider. The site overall is an example of using an application-level I18nProvider implemented through the terra-base component.",mdxType:"I18nDemo"}),Object(o.mdx)("h2",{id:"i18n-provider-props"},"I18n Provider Props"),Object(o.mdx)(O,{mdxType:"I18nPropsTable"}))}N.isMDXComponent=!0},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(2)),o=i(n(4)),l=i(n(999));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=o.default.bind(l.default),f={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},h=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=c(t).call(this,e))||"object"!==d(r)&&"function"!=typeof r?s(a):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(s(n)),n.handleCodeToggle=n.handleCodeToggle.bind(s(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),u(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:b("header")},a.default.createElement("h2",{className:b("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:b("description")},e):null}}]),u(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,r=e.exampleSrc,o=e.title,l=e.description,i=this.state,d=i.isExpanded,c=i.isBackgroundTransparent;return a.default.createElement("div",{className:b("template")},t.renderHeader(o),a.default.createElement("div",{className:b("content",{"dynamic-content":c})},t.renderDescription(l),n),r&&a.default.createElement("div",{className:b("footer")},a.default.createElement("div",{className:b("button-container")},a.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:b("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:b("chevron-right")}))),d&&a.default.createElement("div",{className:b("code")},r)))}}]),t}(a.default.Component);h.propTypes=f,h.defaultProps={isExpanded:!1};var _=h;t.default=_},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(2)),o=i(n(4)),l=i(n(996));function i(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(l.default),c={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.name,n=e.url,r=e.version;return a.default.createElement("div",{className:d("badge-container")},a.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(r))))};s.propTypes=c;var p=s;t.default=p},996:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},997:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(2)),o=i(n(4)),l=i(n(998));function i(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(l.default),c={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},s=function(e){var t=e.rows;return a.default.createElement("table",{className:d("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:d("tr")},a.default.createElement("th",{className:d("th")},"Prop Name"),a.default.createElement("th",{className:d("th")},"Type"),a.default.createElement("th",{className:d("th")},"Is Required"),a.default.createElement("th",{className:d("th")},"Default Value"),a.default.createElement("th",{className:d("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:d(["td","props-td"])},e.type()),a.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};s.propTypes=c;var p=s;t.default=p},998:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},999:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=173-e0234246c35d1e92ef27.js.map