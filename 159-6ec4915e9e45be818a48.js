(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1321:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),a=n(995),l=n.n(a),i=function(e){var t=e.url;return o.a.createElement(l.a,{name:"terra-form-field",version:"3.34.0",url:t})}},2256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(355)),a=i(n(4)),l=i(n(2257));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=a.default.bind(l.default),f=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=c(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?p(r):o).state={isInvalid:!1},n.toggleIsInvalid=n.toggleIsInvalid.bind(p(n)),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(a=[{key:"toggleIsInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement(o.default,{label:"Field Label",help:"This is a standard, non-required field.",error:"Error Message",isInvalid:this.state.isInvalid},r.default.createElement("div",{className:m("field-content")},"Control Placeholder")),r.default.createElement(o.default,{label:"Field Label",help:"This is an optional field.",error:"Error Message",isInvalid:this.state.isInvalid,isInline:!0,showOptional:!0},r.default.createElement("div",{className:m("field-content")},"Control Placeholder")),r.default.createElement(o.default,{label:"Field Label",help:"This is a required field.",error:"Error Message",isInvalid:this.state.isInvalid,isInline:!0,required:!0},r.default.createElement("div",{className:m("field-content")},"Control Placeholder")),r.default.createElement(o.default,{label:"Field Label",help:"This is a required field, but the required indicator is hidden until the field is in error.",error:"Now the required indicator is showing because the field is in error.",isInvalid:this.state.isInvalid,isInline:!0,required:!0,hideRequired:!0},r.default.createElement("div",{className:m("field-content")},"Control Placeholder")),r.default.createElement("hr",null),r.default.createElement("p",null,"If a field is invalid, an error icon will be displayed.",r.default.createElement("button",{type:"button",onClick:this.toggleIsInvalid},"Toggle Invalid State")))}}])&&u(n.prototype,a),l&&u(n,l),t}(r.default.Component);t.default=f},2257:function(e,t,n){e.exports={"field-content":"FieldExamples-module__field-content___d6ez5"}},3259:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var r=n(0),o=n.n(r),a=n(354),l=n(1321),i=n(2256),d=n.n(i);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={};function s(e){var t=e.components,n=c(e,["components"]);return Object(a.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Field from \'terra-form-field\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FieldExamples.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nclass FieldExamples extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { isInvalid: false };\n    this.toggleIsInvalid = this.toggleIsInvalid.bind(this);\n  }\n\n  toggleIsInvalid() {\n    this.setState(prevState => ({ isInvalid: !prevState.isInvalid }));\n  }\n\n  render() {\n    return (\n      <div>\n        <Field\n          label="Field Label"\n          help="This is a standard, non-required field."\n          error="Error Message"\n          isInvalid={this.state.isInvalid}\n        >\n          <div className={cx(\'field-content\')}>Control Placeholder</div>\n        </Field>\n        <Field\n          label="Field Label"\n          help="This is an optional field."\n          error="Error Message"\n          isInvalid={this.state.isInvalid}\n          isInline\n          showOptional\n        >\n          <div className={cx(\'field-content\')}>Control Placeholder</div>\n        </Field>\n\n        <Field\n          label="Field Label"\n          help="This is a required field."\n          error="Error Message"\n          isInvalid={this.state.isInvalid}\n          isInline\n          required\n        >\n          <div className={cx(\'field-content\')}>Control Placeholder</div>\n        </Field>\n\n        <Field\n          label="Field Label"\n          help="This is a required field, but the required indicator is hidden until the field is in error."\n          error="Now the required indicator is showing because the field is in error."\n          isInvalid={this.state.isInvalid}\n          isInline\n          required\n          hideRequired\n        >\n          <div className={cx(\'field-content\')}>Control Placeholder</div>\n        </Field>\n        <hr />\n        <p>\nIf a field is invalid, an error icon will be displayed.\n          <button type="button" onClick={this.toggleIsInvalid}>Toggle Invalid State</button>\n        </p>\n      </div>\n    );\n  }\n}\nexport default FieldExamples;\n\n')))}s.isMDXComponent=!0;var m=n(994),f=n.n(m),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Field Examples",description:n,example:o.a.createElement(d.a,null),exampleSrc:o.a.createElement(s,null),isExpanded:r})},_=n(997),h=n.n(_);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=function(){return Object(a.mdx)(h.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The form control elements the Field contains."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error message for when the input is invalid. This will only be displayed if isInvalid is true."))}return t.isMDXComponent=!0,t({})}},{name:"errorIcon",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"<IconError />",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error Icon to display when the input is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Help element to display with the input."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"htmlFor",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The htmlFor attribute on the field label."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the field is an inline field."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The label of the form control children."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Attributes to attach to the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Set the max-width of a field using ",Object(a.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(a.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the field is required."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"style",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Provides first class prop for custom inline styles"))}return t.isMDXComponent=!0,t({})}}]})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={};function T(e){var t=e.components,n=g(e,["components"]);return Object(a.mdx)("wrapper",O({},j,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-field"},"Terra Form Field"),Object(a.mdx)("p",null,"The Form Field component handles the layout of the label, help text and error text associated with a form element. Additionally, it provides required, optional, and invalid indicators."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",O({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-field"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",O({parentName:"tr"},{align:null}),"Peer Dependency"),Object(a.mdx)("th",O({parentName:"tr"},{align:null}),"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",O({parentName:"tr"},{align:null}),"react"),Object(a.mdx)("td",O({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",O({parentName:"tr"},{align:null}),"react-dom"),Object(a.mdx)("td",O({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",O({parentName:"tr"},{align:null}),"react-intl"),Object(a.mdx)("td",O({parentName:"tr"},{align:null}),"^2.8.0")))),Object(a.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),Object(a.mdx)("p",null,"The Form-Field component must be composed inside the ",Object(a.mdx)("a",O({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"}),"Base")," component with a locale in order for it to load the correct translation strings."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),"import Field from 'terra-form-field';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(a.mdx)("p",null,Object(a.mdx)("a",O({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-field"}),"View component source code")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(b,{mdxType:"FieldExamples"}),Object(a.mdx)("h2",{id:"form-field-props"},"Form Field Props"),Object(a.mdx)(y,{mdxType:"FormFieldPropsTable"}))}T.isMDXComponent=!0},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(2)),a=i(n(4)),l=i(n(999));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=a.default.bind(l.default),b={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},_=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=u(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?c(r):o).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(c(n)),n.handleCodeToggle=n.handleCodeToggle.bind(c(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),s(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),s(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,o=e.exampleSrc,a=e.title,l=e.description,i=this.state,d=i.isExpanded,u=i.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(a),r.default.createElement("div",{className:f("content",{"dynamic-content":u})},t.renderDescription(l),n),o&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),d&&r.default.createElement("div",{className:f("code")},o)))}}]),t}(r.default.Component);_.propTypes=b,_.defaultProps={isExpanded:!1};var h=_;t.default=h},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(2)),a=i(n(4)),l=i(n(996));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(l.default),u={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.name,n=e.url,o=e.version;return r.default.createElement("div",{className:d("badge-container")},r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(o))))};c.propTypes=u;var p=c;t.default=p},996:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},997:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(2)),a=i(n(4)),l=i(n(998));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(l.default),u={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},c=function(e){var t=e.rows;return r.default.createElement("table",{className:d("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:d("tr")},r.default.createElement("th",{className:d("th")},"Prop Name"),r.default.createElement("th",{className:d("th")},"Type"),r.default.createElement("th",{className:d("th")},"Is Required"),r.default.createElement("th",{className:d("th")},"Default Value"),r.default.createElement("th",{className:d("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:d(["td","props-td"])},e.type()),r.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};c.propTypes=u;var p=c;t.default=p},998:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},999:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=159-6ec4915e9e45be818a48.js.map