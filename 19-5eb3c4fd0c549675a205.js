(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1014:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(0)),r=a(l(2)),i=a(l(4)),d=a(l(1225)),o=a(l(1226));function a(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function f(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var b=i.default.bind(d.default),_={checked:r.default.bool,defaultChecked:r.default.bool,id:r.default.string,inputAttrs:r.default.object,disabled:r.default.bool,isInline:r.default.bool,isLabelHidden:r.default.bool,labelText:r.default.node.isRequired,labelTextAttrs:r.default.object,name:r.default.string,onBlur:r.default.func,onChange:r.default.func,onFocus:r.default.func,value:r.default.string},h={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},p=function(e){var t=e.checked,l=e.defaultChecked,r=e.inputAttrs,i=e.id,d=e.disabled,a=e.isInline,_=e.isLabelHidden,h=e.labelText,p=e.labelTextAttrs,m=e.name,v=e.onBlur,g=e.onChange,x=e.onFocus,k=e.value,O=f(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),y=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){s(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},r);void 0!==t?y.checked=t:y.defaultChecked=l;var C=b(["checkbox",{"is-inline":a},O.className]),j=b(["label",{"is-disabled":d},{"is-mobile":o.default.isConsideredMobileDevice()},p.className]),w=b(["native-input",r.className]),E=b(["label-text",{"is-hidden":_},{"is-mobile":o.default.isConsideredMobileDevice()}]),F=null;return _?(y["aria-label"]=h,F=n.default.createElement("span",u({},p,{className:E}))):F=n.default.createElement("span",u({},p,{className:E}),h),n.default.createElement("div",u({},O,{className:C}),n.default.createElement("label",{htmlFor:i,className:j},n.default.createElement("input",u({},y,{type:"checkbox",id:i,disabled:d,name:m,value:k,onChange:g,onFocus:x,onBlur:v,className:w})),F))};p.propTypes=_,p.defaultProps=h,p.isCheckbox=!0;var m=p;t.default=m},1225:function(e,t,l){e.exports={checkbox:"Checkbox-module__checkbox___HI9Vi",label:"Checkbox-module__label___3E8fg","is-mobile":"Checkbox-module__is-mobile___frQvN","native-input":"Checkbox-module__native-input___GvkXw","label-text":"Checkbox-module__label-text___fY5lt","is-hidden":"Checkbox-module__is-hidden___26Rqh","is-disabled":"Checkbox-module__is-disabled___WSQKG","is-inline":"Checkbox-module__is-inline___1jo0Z"}},1226:function(e,t,l){"use strict";var n={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=n},1228:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(l(0)),r=c(l(2)),i=c(l(4)),d=c(l(95)),o=c(l(164)),a=l(7),u=c(l(1479));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var b=i.default.bind(u.default),_={children:r.default.node,error:r.default.node,help:r.default.node,hideRequired:r.default.bool,isInline:r.default.bool,isInvalid:r.default.bool,isLegendHidden:r.default.bool,legend:r.default.node.isRequired,legendAttrs:r.default.object,required:r.default.bool,showOptional:r.default.bool},h=function(e){var t=e.children,l=e.error,r=e.help,i=e.hideRequired,u=e.isInvalid,c=e.isInline,_=e.isLegendHidden,h=e.legend,p=e.legendAttrs,m=e.required,v=e.showOptional,g=f(e,["children","error","help","hideRequired","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"]),x=b(["checkbox-field",{"is-inline":c},g.className]),k=b(["legend",p.className]),O="terra-checkbox-field-description-".concat((0,d.default)()),y=r?"terra-checkbox-field-description-help-".concat((0,d.default)()):"",C=l?"terra-checkbox-field-description-error-".concat((0,d.default)()):"",j="".concat(O," ").concat(C," ").concat(y),w=n.default.createElement("legend",{id:O,className:b(["legend-group",{"legend-group-hidden":_}])},n.default.createElement("div",s({},p,{className:k}),u&&n.default.createElement("span",{className:b("error-icon")}),m&&(u||!i)&&n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{"aria-hidden":"true",className:b("required")},"*"),n.default.createElement(a.FormattedMessage,{id:"Terra.form.field.required"},(function(e){return n.default.createElement(o.default,{text:e})}))),h,m&&!u&&i&&n.default.createElement("span",{className:b("required-hidden")},"*"),v&&!m&&n.default.createElement(a.FormattedMessage,{id:"Terra.form.field.optional"},(function(e){return n.default.createElement("span",{className:b("optional")},e)})),!u&&n.default.createElement("span",{className:b("error-icon-hidden")}))),E=n.default.Children.map(t,(function(e){return e&&e.type.isCheckbox?n.default.cloneElement(e,{inputAttrs:{"aria-describedby":j}}):e}));return n.default.createElement("fieldset",s({},g,{className:x}),w,E,u&&l&&n.default.createElement("div",{id:C,className:b("error-text")},l),r&&n.default.createElement("div",{id:y,className:b("help-text")},r))};h.propTypes=_,h.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};var p=h;t.default=p},1479:function(e,t,l){e.exports={"checkbox-field":"CheckboxField-module__checkbox-field___5Sv7A","is-inline":"CheckboxField-module__is-inline___3YtVY","legend-group":"CheckboxField-module__legend-group___31N8E","legend-group-hidden":"CheckboxField-module__legend-group-hidden___2XqRE",legend:"CheckboxField-module__legend___1AD_E","error-icon":"CheckboxField-module__error-icon___3b2n7","error-icon-hidden":"CheckboxField-module__error-icon-hidden___39GCO",required:"CheckboxField-module__required___2s5jT","required-hidden":"CheckboxField-module__required-hidden___1aFQv",optional:"CheckboxField-module__optional___1bUeR","help-text":"CheckboxField-module__help-text___13q50","error-text":"CheckboxField-module__error-text___1hb1p"}}}]);
//# sourceMappingURL=19-5eb3c4fd0c549675a205.js.map