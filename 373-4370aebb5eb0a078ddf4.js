(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{3326:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));r(0);var o=r(354),n=r(997),a=r.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=function(){return Object(o.mdx)(a.a,{rows:[{name:"children",type:function(){var e={};function t(t){var r=t.components,n=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,n,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var r=t.components,n=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,n,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The components to be rendered within the context of the ApplicationLoadingOverlayProvider.\nComponents rendered here are able to interact with ApplicationLoadingOverlayProvider through\nthe ApplicationLoadingOverlayContext."))}return t.isMDXComponent=!0,t({})}},{name:"scrollRefCallback",type:function(){var e={};function t(t){var r=t.components,n=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,n,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var r=t.components,n=d(t,["components"]);return Object(o.mdx)("wrapper",l({},e,n,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A function to be called with the current ref of the scrollable element rendered within the\nApplicationLoadingOverlayProvider."))}return t.isMDXComponent=!0,t({})}}]})};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c={};function s(e){var t=e.components,r=u(e,["components"]);return Object(o.mdx)("wrapper",i({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"applicationloadingoverlayprovider"},"ApplicationLoadingOverlayProvider"),Object(o.mdx)("p",null,"The ApplicationLoadingOverlayProvider defines a container within which loading overlays may be presented."),Object(o.mdx)("p",null,"ApplicationLoadingOverlay components rendered by children of the ApplicationLoadingOverlayProvider will cause the\nApplicationLoadingOverlayProvider to render a loading overlay on top of those children. A single loading overlay will be rendered,\neven if multiple ApplicationLoadingOverlay components are rendered at the same time."),Object(o.mdx)("p",null,"The style of the overlay will be determined by the ",Object(o.mdx)("inlineCode",{parentName:"p"},"backgroundStyle")," prop specified for each ApplicationLoadingOverlay,\nwith the darkest specified style being honored."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Note: The ApplicationLoadingOverlayProvider has a default height of ",Object(o.mdx)("inlineCode",{parentName:"p"},"100%"),". This allows the overlay to be appropriately\npositioned over the rest of the provider's content. If a different height is desired, a custom class can be provied to\nthe ApplicationOverlayProvider to overwrite the default value.")),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import { ApplicationLoadingOverlayProvider } from 'terra-application/lib/application-loading-overlay';\n")),Object(o.mdx)("h2",{id:"props"},"Props"),Object(o.mdx)(p,{mdxType:"ApplicationLoadingOverlayProviderProps"}))}s.isMDXComponent=!0},997:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(r(0)),n=d(r(2)),a=d(r(4)),l=d(r(998));function d(e){return e&&e.__esModule?e:{default:e}}var p=a.default.bind(l.default),i={rows:n.default.arrayOf(n.default.shape({name:n.default.string,type:n.default.func,required:n.default.bool,defaultValue:n.default.string,description:n.default.func}))},u=function(e){var t=e.rows;return o.default.createElement("table",{className:p("table")},o.default.createElement("thead",null,o.default.createElement("tr",{className:p("tr")},o.default.createElement("th",{className:p("th")},"Prop Name"),o.default.createElement("th",{className:p("th")},"Type"),o.default.createElement("th",{className:p("th")},"Is Required"),o.default.createElement("th",{className:p("th")},"Default Value"),o.default.createElement("th",{className:p("th")},"Description"))),o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{className:p(["tr","props-tr"]),key:e.name},o.default.createElement("td",{className:p(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:p(["td","props-td"])},e.type()),o.default.createElement("td",{className:p(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:p(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:p(["td","props-td"])},e.description()))}))))};u.propTypes=i;var c=u;t.default=c},998:function(e,t,r){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}}}]);
//# sourceMappingURL=373-4370aebb5eb0a078ddf4.js.map