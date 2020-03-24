(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1347:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),l=n(995),o=n.n(l),m=function(e){var t=e.url;return r.a.createElement(o.a,{name:"terra-spacer",version:"3.32.0",url:t})}},1609:function(e,t,n){},2894:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(60)),l=o(n(357));function o(e){return e&&e.__esModule?e:{default:e}}n(1609);var m=function(){return a.default.createElement("div",null,a.default.createElement(l.default,{className:"spacerdemodefault",paddingTop:"large+4",paddingBottom:"large+4",paddingLeft:"large+4",paddingRight:"large+4",isInlineBlock:!0},a.default.createElement(r.default,{text:"Default"})),a.default.createElement(l.default,{className:"spacerdemoprimary",paddingTop:"large+2",paddingBottom:"large+2",paddingLeft:"large+2",paddingRight:"large+2",isInlineBlock:!0},a.default.createElement(r.default,{text:"Emphasis",variant:"emphasis"})))};t.default=m},2895:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(60)),l=o(n(357));function o(e){return e&&e.__esModule?e:{default:e}}n(1609);var m=function(){return a.default.createElement("div",null,a.default.createElement(l.default,{className:"spacerdemoprimary",padding:"large small",margin:"medium large+1",isInlineBlock:!0},a.default.createElement(r.default,{text:"Shorthand"})),a.default.createElement(l.default,{className:"spacerdemodefault",paddingTop:"large",paddingBottom:"large",paddingLeft:"small",paddingRight:"small",marginTop:"medium",marginBottom:"medium",marginLeft:"large+1",marginRight:"large+1",isInlineBlock:!0},a.default.createElement(r.default,{text:"Longhand"})))};t.default=m},3237:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var a=n(0),r=n.n(a),l=n(354),o=n(1347),m=n(2894),d=n.n(m);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={};function i(e){var t=e.components,n=c(e,["components"]);return Object(l.mdx)("wrapper",p({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",p({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport \'terra-spacer/lib/terra-dev-site/doc/example/Spacer.module.scss\';\n\nconst SpacerExample = () => (\n  <div>\n    <Spacer className="spacerdemodefault" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" isInlineBlock>\n      <Button text="Default" />\n    </Spacer>\n    <Spacer className="spacerdemoprimary" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2" isInlineBlock>\n      <Button text="Emphasis" variant="emphasis" />\n    </Spacer>\n  </div>\n);\n\nexport default SpacerExample;\n\n')))}i.isMDXComponent=!0;var s=n(994),g=n.n(s),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(g.a,{title:t||"Spacer Example",description:n,example:r.a.createElement(d.a,null),exampleSrc:r.a.createElement(i,null),isExpanded:a})},b=n(2895),_=n.n(b);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var j={};function y(e){var t=e.components,n=O(e,["components"]);return Object(l.mdx)("wrapper",x({},j,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",x({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport \'terra-spacer/lib/terra-dev-site/doc/example/Spacer.module.scss\';\n\nconst SpacerShortVsLongHandExample = () => (\n  <div>\n    <Spacer className="spacerdemoprimary" padding="large small" margin="medium large+1" isInlineBlock>\n      <Button text="Shorthand" />\n    </Spacer>\n    <Spacer className="spacerdemodefault" paddingTop="large" paddingBottom="large" paddingLeft="small" paddingRight="small" marginTop="medium" marginBottom="medium" marginLeft="large+1" marginRight="large+1" isInlineBlock>\n      <Button text="Longhand" />\n    </Spacer>\n  </div>\n);\n\nexport default SpacerShortVsLongHandExample;\n\n')))}y.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(g.a,{title:t||"Spacer Short Vs Long Hand Example",description:n,example:r.a.createElement(_.a,null),exampleSrc:r.a.createElement(y,null),isExpanded:a})},h=n(997),N=n.n(h);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E=function(){return Object(l.mdx)(N.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Child Nodes."))}return t.isMDXComponent=!0,t({})}},{name:"margin",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets margin in a syntax similar to the standard CSS spec ",Object(l.mdx)("a",T({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin"}),"https://developer.mozilla.org/en-US/docs/Web/CSS/margin"),". One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"marginTop",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",T({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"marginBottom",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",T({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"marginLeft",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",T({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"marginRight",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",T({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"padding",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets padding in a syntax similar to the standard CSS spec ",Object(l.mdx)("a",T({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"}),"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"),". One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"paddingTop",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",T({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"paddingBottom",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",T({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"paddingLeft",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",T({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"paddingRight",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",T({parentName:"pre"},{className:"language-json"}),'[\n "none",\n "small-2",\n "small-1",\n "small",\n "medium",\n "large",\n "large+1",\n "large+2",\n "large+3",\n "large+4"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"SpacerSizes.NONE",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))}return t.isMDXComponent=!0,t({})}},{name:"isInlineBlock",type:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=S(t,["components"]);return Object(l.mdx)("wrapper",T({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets the display to be inline-block."))}return t.isMDXComponent=!0,t({})}}]})};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M={};function P(e){var t=e.components,n=D(e,["components"]);return Object(l.mdx)("wrapper",w({},M,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(o.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-spacer"},"Terra Spacer"),Object(l.mdx)("p",null,"This component is used to provide margin and/or padding space between two components based on the given values."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",w({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-spacer"))))),Object(l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",w({parentName:"tr"},{align:null}),"Peer Dependency"),Object(l.mdx)("th",w({parentName:"tr"},{align:null}),"Version"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"react"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"react-dom"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"^16.8.5")))),Object(l.mdx)("h2",{id:"naming-convention"},"Naming Convention"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",w({parentName:"tr"},{align:null}),"Spacing scale values"),Object(l.mdx)("th",w({parentName:"tr"},{align:null}),"Computed REM Value"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"none"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"0")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"small-2"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"0.2142857143rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"small-1"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"0.3571428571rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"small"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"0.5rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"medium"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"0.7142857143rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"large"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"0.8571428571rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"large+1"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"1.0714285714rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"large+2"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"1.4285714286rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"large+3"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"2.1428571429rem")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"large+4"),Object(l.mdx)("td",w({parentName:"tr"},{align:null}),"3.5714285714rem")))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",w({parentName:"pre"},{className:"language-jsx"}),"import Spacer from 'terra-spacer';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",w({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",w({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(l.mdx)("p",null,Object(l.mdx)("a",w({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-spacer"}),"View component source code")),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(f,{title:"Spacer",description:"Spacing default button with a padding value of large+4 and primary button with padding value of large+2",mdxType:"Spacer"}),Object(l.mdx)(v,{title:"Spacer Short Vs Long Hand",mdxType:"SpacerShortVsLongHand"}),Object(l.mdx)("h2",{id:"spacer-props"},"Spacer Props"),Object(l.mdx)(E,{mdxType:"SpacerPropsTable"}))}P.isMDXComponent=!0},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),r=m(n(2)),l=m(n(4)),o=m(n(999));function m(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=l.default.bind(o.default),f={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},b=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=p(t).call(this,e))||"object"!==d(r)&&"function"!=typeof r?c(a):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(c(n)),n.handleCodeToggle=n.handleCodeToggle.bind(c(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),i(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:g("header")},a.default.createElement("h2",{className:g("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:g("description")},e):null}}]),i(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,r=e.exampleSrc,l=e.title,o=e.description,m=this.state,d=m.isExpanded,p=m.isBackgroundTransparent;return a.default.createElement("div",{className:g("template")},t.renderHeader(l),a.default.createElement("div",{className:g("content",{"dynamic-content":p})},t.renderDescription(o),n),r&&a.default.createElement("div",{className:g("footer")},a.default.createElement("div",{className:g("button-container")},a.default.createElement("button",{type:"button",className:g("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:g("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:g("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:g("chevron-right")}))),d&&a.default.createElement("div",{className:g("code")},r)))}}]),t}(a.default.Component);b.propTypes=f,b.defaultProps={isExpanded:!1};var _=b;t.default=_},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),r=m(n(2)),l=m(n(4)),o=m(n(996));function m(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),p={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.name,n=e.url,r=e.version;return a.default.createElement("div",{className:d("badge-container")},a.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(r))))};c.propTypes=p;var u=c;t.default=u},996:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},997:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),r=m(n(2)),l=m(n(4)),o=m(n(998));function m(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),p={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},c=function(e){var t=e.rows;return a.default.createElement("table",{className:d("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:d("tr")},a.default.createElement("th",{className:d("th")},"Prop Name"),a.default.createElement("th",{className:d("th")},"Type"),a.default.createElement("th",{className:d("th")},"Is Required"),a.default.createElement("th",{className:d("th")},"Default Value"),a.default.createElement("th",{className:d("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:d(["td","props-td"])},e.type()),a.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};c.propTypes=p;var u=c;t.default=u},998:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},999:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=154-4567128a59c3db31f225.js.map