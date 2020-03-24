(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1189:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(0),a=n.n(o),r=n(995),i=n.n(r),l=function(e){var t=e.url;return a.a.createElement(i.a,{name:"terra-navigation-prompt",version:"1.28.0",url:t})}},2775:function(e,t,n){"use strict";var o=n(14),a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(93)),i=o(n(0)),l=a(n(2)),u=o(n(376)),c=function(e){var t=e.title,n=e.ariaLabel,o=(0,i.useState)(""),a=(0,r.default)(o,2),l=a[0],c=a[1];return i.default.createElement("div",null,i.default.createElement("p",null,t),l.length?i.default.createElement(u.default,{description:t}):void 0,i.default.createElement("input",{type:"text","aria-label":n,onChange:function(e){c(e.target.value)},value:l}),i.default.createElement("button",{type:"button",onClick:function(){c("")}},"Submit"))};c.propTypes={title:l.default.string,ariaLabel:l.default.string};var p=function(){var e=(0,i.useState)("Form 1"),t=(0,r.default)(e,2),n=t[0],o=t[1],a=(0,i.useState)([]),l=(0,r.default)(a,2),p=l[0],m=l[1];function s(e){o(e)}return i.default.createElement("div",null,i.default.createElement("h2",null,"Form Switcher"),i.default.createElement("p",null,"Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present."),i.default.createElement("button",{type:"button",disabled:"Form 1"===n||p.length,onClick:s.bind(null,"Form 1")},"Switch to Form 1"),i.default.createElement("button",{type:"button",disabled:"Form 2"===n||p.length,onClick:s.bind(null,"Form 2")},"Switch to Form 2"),i.default.createElement(u.NavigationPromptCheckpoint,{onPromptChange:function(e){m(e)}},i.default.createElement(c,{title:n,key:n,ariaLabel:n})))};t.default=p},3287:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var o=n(0),a=n.n(o),r=n(354),i=n(1189),l=n(2775),u=n.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={};function s(e){var t=e.components,n=p(e,["components"]);return Object(r.mdx)("wrapper",c({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        aria-label={ariaLabel}\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n  const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n    setActiveForm(formKey);\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n        onPromptChange={(prompts) => {\n          setActivePrompts(prompts);\n        }}\n      >\n        <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n\n")))}s.isMDXComponent=!0;var d=n(994),f=n.n(d),v=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.a.createElement(f.a,{title:t||"Implementation Guide Part 2",description:n,example:a.a.createElement(u.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:o})};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function _(e){var t=e.components,n=b(e,["components"]);return Object(r.mdx)("wrapper",g({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(i.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-navigation-prompt---implementation-guide"},"Terra Navigation Prompt - Implementation Guide"),Object(r.mdx)("h2",{id:"part-3---implementing-a-custom-prompt-solution"},"Part 3 - Implementing a Custom Prompt Solution"),Object(r.mdx)("p",null,"At this point, we realize that we do not want to ",Object(r.mdx)("strong",{parentName:"p"},"ever")," allow users to navigate away from a Form with unsaved state. We can do that by using the NavigationPromptCheckpoint's ",Object(r.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," prop."),Object(r.mdx)("pre",null,Object(r.mdx)("code",g({parentName:"pre"},{className:"language-diff"}),"- import React, { useState, useRef } from 'react';\n+ import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n+ const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n-   formCheckpointRef.current.resolvePrompts({\n-     title: 'Descriptive Notification Prompt Title',\n-     startMessage: 'Descriptive Notification Prompt Message',\n-     rejectButtonText: `Descriptive Reject Button Action`,\n-     acceptButtonText: 'Descriptive Accept Button Action',\n-     buttonOrder: 'acceptFirst',\n-   }).then(() => {\n      setActiveForm(formKey);\n-   });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n-     <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>\n+     <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 1'}\n+       disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 2'}\n+       disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n-       ref={formCheckpointRef}\n+       onPromptChange={(prompts) => {\n+         setActivePrompts(prompts);\n+       }}\n      >\n        <Form title={activeForm} key={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n")),Object(r.mdx)("p",null,"We remove the ",Object(r.mdx)("inlineCode",{parentName:"p"},"ref")," from the NavigationPromptCheckpoint and instead implement ",Object(r.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," to store the currently rendered NavigationPrompt's in the FormSwitcher's state. We disable the 'Switch to' buttons altogether if a NavigationPrompt is detected. We could also use this state to control other navigation-capable components, like client-side routers."),Object(r.mdx)("h2",{id:"examples"},"Examples"),Object(r.mdx)(v,{title:"Part 2 - Implementing a Custom Prompt Handler",mdxType:"ImplementationGuidePart2"}))}_.isMDXComponent=!0},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(2)),r=l(n(4)),i=l(n(999));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=r.default.bind(i.default),v={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},g=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=c(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?p(o):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(p(n)),n.handleCodeToggle=n.handleCodeToggle.bind(p(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),s(t,null,[{key:"renderHeader",value:function(e){return e?o.default.createElement("div",{className:f("header")},o.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?o.default.createElement("div",{className:f("description")},e):null}}]),s(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,r=e.title,i=e.description,l=this.state,u=l.isExpanded,c=l.isBackgroundTransparent;return o.default.createElement("div",{className:f("template")},t.renderHeader(r),o.default.createElement("div",{className:f("content",{"dynamic-content":c})},t.renderDescription(i),n),a&&o.default.createElement("div",{className:f("footer")},o.default.createElement("div",{className:f("button-container")},o.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:f("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:f("chevron-right")}))),u&&o.default.createElement("div",{className:f("code")},a)))}}]),t}(o.default.Component);g.propTypes=v,g.defaultProps={isExpanded:!1};var b=g;t.default=b},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(2)),r=l(n(4)),i=l(n(996));function l(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(i.default),c={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},p=function(e){var t=e.name,n=e.url,a=e.version;return o.default.createElement("div",{className:u("badge-container")},o.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},o.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:u("badge-version")},"v".concat(a))))};p.propTypes=c;var m=p;t.default=m},996:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},999:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=190-f6b4a053f5c5229976bc.js.map