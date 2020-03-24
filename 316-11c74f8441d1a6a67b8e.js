(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{1333:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var r=a(0),t=a.n(r),o=a(995),s=a.n(o),l=function(e){var n=e.url;return t.a.createElement(s.a,{name:"terra-modal-manager",version:"6.29.0",url:n})}},3123:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return p}));a(0);var r=a(354),t=a(1333);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l={};function p(e){var n=e.components,a=s(e,["components"]);return Object(r.mdx)("wrapper",o({},l,a,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)(t.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-modal-manager---upgrade-guide"},"Terra Modal Manager - Upgrade Guide"),Object(r.mdx)("h2",{id:"upgrading-from-v3x-to-v4x"},"Upgrading from v3.x to v4.x"),Object(r.mdx)("p",null,"With the release of terra-disclosure-manager v3.x, the ModalManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. "),Object(r.mdx)("p",null,"The below example code details the changes necessary to interact with terra-modal-manager v4.x."),Object(r.mdx)("pre",null,Object(r.mdx)("code",o({parentName:"pre"},{className:"language-diff"}),"/**\n * v3.x to v4.x\n */\n import Base from 'terra-base';\n import ModalManager from 'terra-modal-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Modal\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Modal\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'modal',\n          content: {\n            key: 'MY-MODAL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <ModalManager>\n       <MyComponent />\n     </ModalManager>\n   </Base>\n );\n")))}p.isMDXComponent=!0},995:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=l(a(0)),t=l(a(2)),o=l(a(4)),s=l(a(996));function l(e){return e&&e.__esModule?e:{default:e}}var p=o.default.bind(s.default),c={name:t.default.string.isRequired,url:t.default.string,version:t.default.string.isRequired},d=function(e){var n=e.name,a=e.url,t=e.version;return r.default.createElement("div",{className:p("badge-container")},r.default.createElement("a",{className:p("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(t)},r.default.createElement("span",{className:p("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:p("badge-version")},"v".concat(t))))};d.propTypes=c;var i=d;n.default=i},996:function(e,n,a){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}}}]);
//# sourceMappingURL=316-11c74f8441d1a6a67b8e.js.map