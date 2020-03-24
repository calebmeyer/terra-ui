(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var r=l(n(0)),a=l(n(2)),i=l(n(4)),o=l(n(1185));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=i.default.bind(o.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var g={small:2,medium:5,large:10},y={ariaLabel:a.default.string,defaultValue:a.default.string,disabled:a.default.bool,isAutoResizable:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,name:a.default.string,onChange:a.default.func,onFocus:a.default.func,placeholder:a.default.string,required:a.default.bool,rows:a.default.number,size:a.default.oneOf(["small","medium","large","full"]),value:a.default.string,refCallback:a.default.func,disableResize:a.default.bool},O={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,placeholder:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},x=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=f(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?b(r):a).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),n.onChange=n.onChange.bind(b(n)),n.onFocus=n.onFocus.bind(b(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||g[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.name,i=n.required,o=(n.onChange,n.onFocus,n.placeholder),l=n.isAutoResizable,u=n.isIncomplete,p=n.isInvalid,f=n.value,b=n.defaultValue,h=n.rows,y=n.size,O=n.ariaLabel,x=n.refCallback,_=n.disableResize,j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(n,["name","required","onChange","onFocus","placeholder","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"])),w=v(["textarea",{"form-error":p},{"form-incomplete":u&&i&&!p},{"full-size":"full"===y},{resizable:l&&!this.isMobileDevice},{"no-resize":_},j.className]);j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=O||j["aria-label"]:O&&(e=O),j["aria-label"]=e,i&&(j["aria-required"]="true");var T=h||g[y];return void 0!==f?j.value=f:j.defaultValue=b,r.default.createElement("textarea",s({},j,{ref:function(e){t.textarea=e,x&&x(e)},name:a,onFocus:this.onFocus,onChange:this.onChange,placeholder:o,required:i,rows:T,className:w}))}}])&&p(n.prototype,a),i&&p(n,i),t}(r.default.Component);x.propTypes=y,x.defaultProps=O,x.isTextarea=!0;var _=x;t.default=_},1029:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),i=u(n(359)),o=u(n(355)),l=u(n(1015));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={inputId:a.default.string.isRequired,label:a.default.node.isRequired,defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,error:a.default.node,errorIcon:a.default.element,help:a.default.node,hideRequired:a.default.bool,inputAttrs:a.default.object,isIncomplete:a.default.bool,isInline:a.default.bool,isInvalid:a.default.bool,isLabelHidden:a.default.bool,labelAttrs:a.default.object,maxWidth:a.default.string,onChange:a.default.func,placeholder:a.default.string,required:a.default.bool,showOptional:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number])},m={defaultValue:void 0,disabled:!1,error:null,errorIcon:r.default.createElement(i.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,showOptional:!1,value:void 0},p=function(e){var t,n=e.defaultValue,a=e.disabled,i=e.error,u=e.errorIcon,c=e.help,m=e.hideRequired,p=e.inputAttrs,f=e.inputId,b=e.isIncomplete,h=e.isInline,v=e.isInvalid,g=e.isLabelHidden,y=e.label,O=e.labelAttrs,x=e.maxWidth,_=e.required,j=e.showOptional,w=e.onChange,T=e.placeholder,E=e.value,F=d(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","required","showOptional","onChange","placeholder","value"]);return c&&i&&v?t="".concat(f,"-error ").concat(f,"-help"):(c&&(t="".concat(f,"-help")),i&&v&&(t="".concat(f,"-error"))),r.default.createElement(o.default,s({},F,{label:y,labelAttrs:O,error:i,errorIcon:u,help:c,hideRequired:m,required:_,showOptional:j,isInvalid:v,isInline:h,isLabelHidden:g,htmlFor:f,maxWidth:x}),r.default.createElement(l.default,s({},p,{disabled:p.disabled||a,id:f,isIncomplete:b,onChange:w,placeholder:T||p.placeholder,value:E,defaultValue:n,"aria-describedby":t})))};p.propTypes=c,p.defaultProps=m;var f=p;t.default=f},1185:function(e,t,n){e.exports={textarea:"Textarea-module__textarea___1cA7J","full-size":"Textarea-module__full-size___39LhZ","no-resize":"Textarea-module__no-resize___3JpeK",resizable:"Textarea-module__resizable___1CQUn","form-error":"Textarea-module__form-error___1KRBv","form-incomplete":"Textarea-module__form-incomplete___791M-"}},1486:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(163)),i=r(n(24)),o=r(n(26)),l=r(n(27)),u=r(n(28)),s=r(n(30)),d=r(n(29)),c=r(n(1325)),m=r(n(1326)),p=r(n(0)),f=n(1016),b=r(n(1010)),h=r(n(1029)),v=r(n(60)),g=r(n(357));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(){var e=(0,m.default)(c.default.mark((function e(t){var n;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){return e("TerraUser"!==t?"":"Name is Unavailable")})),e.next=3,n;case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){function t(e){var n;return(0,i.default)(this,t),(n=(0,l.default)(this,(0,u.default)(t).call(this,e))).state={},n.submitForm=n.submitForm.bind((0,s.default)(n)),n.renderForm=n.renderForm.bind((0,s.default)(n)),n}return(0,d.default)(t,e),(0,o.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return p.default.createElement("form",{noValidate:!0,onSubmit:t},p.default.createElement(f.Field,{name:"user_name",validate:x},(function(e){var t=e.input,n=e.meta;return p.default.createElement(b.default,{inputId:"user-name",label:"User Name",error:n.error,isInvalid:n.submitFailed&&!n.valid,required:!0,help:"TerraUser is not available",inputAttrs:O({placeholder:"Description"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value})})),p.default.createElement(f.Field,{name:"description"},(function(e){var t=e.input,n=e.meta;return p.default.createElement(h.default,{inputId:"description-field",label:"Description",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:O({placeholder:"Description"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),p.default.createElement(v.default,{text:"Submit",type:v.default.Opts.Types.SUBMIT}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}},{key:"render",value:function(){return p.default.createElement(g.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var t={};return e.description||(t.description="Required"),e.user_name||(t.user_name="Required"),t}}))}}]),t}(p.default.Component);t.default=_},1508:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1486),o=n.n(i),l=n(354);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function c(e){var t=e.components,n=s(e,["components"]);return Object(l.mdx)("wrapper",u({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n    this.renderForm = this.renderForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              required\n              help=\"TerraUser is not available\"\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n            />\n          )}\n        </Field>\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <TextareaField\n              inputId=\"description-field\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n      </Spacer>\n    );\n  }\n}\n\n")))}c.isMDXComponent=!0;var m=n(994),p=n.n(m);t.a=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(p.a,{title:t||"Default Form Validation",description:n,example:a.a.createElement(o.a,null),exampleSrc:a.a.createElement(c,null),isExpanded:r})}},3108:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(0);var r=n(354),a=n(1252),i=n(1508);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function s(e){var t=e.components,n=l(e,["components"]);return Object(r.mdx)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(a.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"form-validation"},"Form Validation"),Object(r.mdx)("p",null,"Terra recommends using ",Object(r.mdx)("a",o({parentName:"p"},{href:"https://github.com/final-form/react-final-form"}),"react-final-form")," to write form validations for components. This package contains several different hooks and functionality for performing validations at various levels which include:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Validating onChange"),Object(r.mdx)("li",{parentName:"ul"},"Validating onSubmit"),Object(r.mdx)("li",{parentName:"ul"},"Validating Synchronously (Such as for unique user name implementations)"),Object(r.mdx)("li",{parentName:"ul"},"Restricting inputs to a particular format.")),Object(r.mdx)("p",null,"For other functionality that is provided, consult ",Object(r.mdx)("a",o({parentName:"p"},{href:"https://github.com/final-form/react-final-form"}),"react-final-form documentation"),"."),Object(r.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Install from ",Object(r.mdx)("a",o({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-validation"))))),Object(r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",o({parentName:"tr"},{align:null}),"Peer Dependency"),Object(r.mdx)("th",o({parentName:"tr"},{align:null}),"Version"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",o({parentName:"tr"},{align:null}),"final-form"),Object(r.mdx)("td",o({parentName:"tr"},{align:null}),"^4.6.0")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",o({parentName:"tr"},{align:null}),"react"),Object(r.mdx)("td",o({parentName:"tr"},{align:null}),"^16.8.5")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",o({parentName:"tr"},{align:null}),"react-dom"),Object(r.mdx)("td",o({parentName:"tr"},{align:null}),"^16.8.5")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",o({parentName:"tr"},{align:null}),"react-final-form"),Object(r.mdx)("td",o({parentName:"tr"},{align:null}),">=5.0.2 <7.0.0")))),Object(r.mdx)("h2",{id:"integration-with-terra"},"Integration with Terra"),Object(r.mdx)("p",null,"To easily integrate react-final-form with Terra form elements, we have created individual Field components inside of terra-form-input (InputField), terra-form-textarea (TextareaField), terra-form-radio (RadioField) and terra-form-checkbox (CheckboxField). For integrating with terra-form-select components, a Select element can be combined with a terra-form-field component. There are future enhancements to add a Field component to terra-form-select."),Object(r.mdx)("p",null,"For all of these field components, the isInvalid and error props of the Fields will be set from the data coming from react-final-form."),Object(r.mdx)("h2",{id:"usage"},"Usage"),Object(r.mdx)("p",null,"react-final-form consists of a wrapping Form element that houses the validation logic, and Field elements that validate individual inputs of a given form."),Object(r.mdx)("p",null,"To start, you need to import the Form component from react-final-form, and set the onSubmit and render props of the Form. onSubmit is a function with a single argument that is an object of the submitted form values, and the render function is essentially a function that returns a native form rendered in react. The render function has several different props provided by react-final-form that can be used for creating your forms (see ",Object(r.mdx)("a",o({parentName:"p"},{href:"https://github.com/final-form/react-final-form#formrenderprops"}),"form render props")," for all possible options). One thing to note is that inside the render function, handleSubmit needs to be passed into the native form component as well."),Object(r.mdx)("p",null,"When rendering individual fields inside the form, there are a few things that need to be done. The first is to create a Field component using the Field object from react-final-form, and setting the name, initial value, and validate props. Then inside the Field children, render a function with the arguments input and meta. The input prop contains information specific to the event such as value and name, and meta includes information related to field errors, submission state, validity status. You can view more of the provided attributes ",Object(r.mdx)("a",o({parentName:"p"},{href:"https://github.com/final-form/react-final-form#fieldrenderprops"}),"here"),". For immediate use, make sure that the function returns a form element with the onChange, value, and other input attributes set appropriately."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"NOTE:")," When using ",Object(r.mdx)("a",o({parentName:"p"},{href:"https://github.com/final-form/react-final-form"}),"react-final-form")," for validation, we recommend disabling HTML5 form validation by adding the ",Object(r.mdx)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate"}),Object(r.mdx)("inlineCode",{parentName:"a"},"noValidate")," boolean attribute")," to your form element."),Object(r.mdx)("pre",null,Object(r.mdx)("code",o({parentName:"pre"},{className:"language-html"}),"<form noValidate>\n")),Object(r.mdx)("p",null,"See links in the sidebar for working with additional validation events and writing custom validations."),Object(r.mdx)("p",null,Object(r.mdx)("a",o({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-form-validation"}),"View Component Source Code")),Object(r.mdx)("h2",{id:"examples"},"Examples"),Object(r.mdx)(i.a,{title:"Basic Form Validation Example",mdxType:"DefaultFormValidation"}))}s.isMDXComponent=!0},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(2)),i=l(n(4)),o=l(n(999));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=i.default.bind(o.default),b={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},h=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=s(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?d(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(d(n)),n.handleCodeToggle=n.handleCodeToggle.bind(d(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,i=e.title,o=e.description,l=this.state,u=l.isExpanded,s=l.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(i),r.default.createElement("div",{className:f("content",{"dynamic-content":s})},t.renderDescription(o),n),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),u&&r.default.createElement("div",{className:f("code")},a)))}}]),t}(r.default.Component);h.propTypes=b,h.defaultProps={isExpanded:!1};var v=h;t.default=v},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(2)),i=l(n(4)),o=l(n(996));function l(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(o.default),s={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},d=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:u("badge-container")},r.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(a))))};d.propTypes=s;var c=d;t.default=c},996:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},999:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=165-9e955cbeab4f48eed875.js.map