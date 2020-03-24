(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1166:function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var t=a(0),o=a.n(t),r=a(995),i=a.n(r),s=function(e){var n=e.url;return o.a.createElement(i.a,{name:"terra-disclosure-manager",version:"4.32.0",url:n})}},3094:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return p}));a(0);var t=a(354),o=a(1166);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s={};function p(e){var n=e.components,a=i(e,["components"]);return Object(t.mdx)("wrapper",r({},s,a,{components:n,mdxType:"MDXLayout"}),Object(t.mdx)(o.a,{mdxType:"Badge"}),Object(t.mdx)("h1",{id:"upgrade-guide---v2-to-v3"},"Upgrade Guide - v2 to v3"),Object(t.mdx)("p",null,"Versions 2.x of the DisclosureManager utilize prop injection to provide child components with functions used to change the DisclosureManager state. With versions 3.x, the DisclosureManager uses React's Context API instead of prop injection to provide those functions. Components that interact with a DisclosureManager (or one of Terra's provided implementations, ModalManager or SlidePanelManager) must be updated to continue getting access to the DisclosureManager APIs."),Object(t.mdx)("p",null,"Components today that receive an ",Object(t.mdx)("inlineCode",{parentName:"p"},"app")," prop from a DisclosureManager will need to use the ",Object(t.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()")," higher order component generator to interface with the DisclosureManager's context. Instead of a prop named ",Object(t.mdx)("inlineCode",{parentName:"p"},"app"),", components wrapped with ",Object(t.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()")," will receive a prop named ",Object(t.mdx)("inlineCode",{parentName:"p"},"disclosureManager"),". "),Object(t.mdx)("p",null,"The ",Object(t.mdx)("inlineCode",{parentName:"p"},"disclosureManager")," prop is equivalent to the previous ",Object(t.mdx)("inlineCode",{parentName:"p"},"app")," prop; it has just been renamed to better unify the consumer-facing API conventions with the DisclosureManager itself. As a result of this renaming, the ",Object(t.mdx)("inlineCode",{parentName:"p"},"terra-app-delegate")," package has been deprecated and is no longer used. The ",Object(t.mdx)("inlineCode",{parentName:"p"},"disclosureManagerShape")," object can be imported from the ",Object(t.mdx)("inlineCode",{parentName:"p"},"terra-disclosure-manager")," package instead for use in other propType declarations."),Object(t.mdx)("p",null,"With prop injection, the ",Object(t.mdx)("inlineCode",{parentName:"p"},"app")," prop was only provided to immediate children of the DisclosureManager. However, by using context, the ",Object(t.mdx)("inlineCode",{parentName:"p"},"disclosureManager")," value will be exposed to any children of the DisclosureManager that are wrapped with ",Object(t.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()"),". Components that are currently passing an ",Object(t.mdx)("inlineCode",{parentName:"p"},"app")," prop around to their own child components should be able to remove that logic and have those subsequent children interface with the context directly. Components that do not directly interact with the DisclosureManager should be able to safely ignore its existance."),Object(t.mdx)("p",null,"The below examples show contrasting v2.x and v3.x implementations of components that interact with a DisclosureManager (in this case, a ModalManager)."),Object(t.mdx)("pre",null,Object(t.mdx)("code",r({parentName:"pre"},{className:"language-diff"}),"/**\n * v2.x to v3.x\n */\n import Base from 'terra-base';\n import ModalManager from 'terra-modal-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Modal\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Modal\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'modal',\n          content: {\n            key: 'MY-MODAL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <ModalManager>\n       <MyComponent />\n     </ModalManager>\n   </Base>\n );\n")))}p.isMDXComponent=!0},995:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=s(a(0)),o=s(a(2)),r=s(a(4)),i=s(a(996));function s(e){return e&&e.__esModule?e:{default:e}}var p=r.default.bind(i.default),c={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},l=function(e){var n=e.name,a=e.url,o=e.version;return t.default.createElement("div",{className:p("badge-container")},t.default.createElement("a",{className:p("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},t.default.createElement("span",{className:p("badge-name")},a?"package":"npm"),t.default.createElement("span",{className:p("badge-version")},"v".concat(o))))};l.propTypes=c;var d=l;n.default=d},996:function(e,n,a){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}}}]);
//# sourceMappingURL=275-323f2fcbaf0095c2d93e.js.map