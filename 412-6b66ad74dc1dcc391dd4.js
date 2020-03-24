(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{3048:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));t(0);var o=t(354);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={};function s(e){var n=e.components,t=r(e,["components"]);return Object(o.mdx)("wrapper",a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"how-to-show-modal-content"},"How To Show Modal Content"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("a",a({parentName:"p"},{href:"/terra-ui/components/terra-application/application/reference/components/modal-manager"}),"ModalManager")," should be used to manage modal content presentation."),Object(o.mdx)("p",null,"A ModalManager should be rendered around content that requires modal disclosure capabilities. Multiple components can be wrapped with a single\nModalManager; every wrapped component (and their descendents) will communicate with the same ModalManager instance through the\n",Object(o.mdx)("a",a({parentName:"p"},{href:"/terra-ui/components/terra-application/application/reference/contexts/disclosure-manager-context"}),"DisclosureManagerContext"),"."),Object(o.mdx)("p",null,"Components rendered within the ModalManager's modal will be able to access the same Contexts as the ModalManager itself.\nAdditional Context providers rendered within the ModalManager's children will not be available to the modal components."),Object(o.mdx)("p",null,"The rendering of a ModalManager is typically an application-level concern. However, additional ModalManagers may be rendered to re-establish\nthe contexts available to disclosed contents. Before rendering a ModalManager yourself, please ensure that the application isn't already providing\na ModalManager that suits your component's needs."),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ApplicationBase from 'terra-application/lib/application-base';\nimport ModalManager from 'terra-application/lib/modal-manager';\n\nimport ComponentWithModal from './ComponentWithModal';\n\nconst ExampleApp = () => (\n  <ApplicationBase>\n    <ModalManager>\n      <ComponentWithModal />\n    </ModalManager>\n  </ApplicationBase>\n);\n\nexport default ExampleComponent;\n")),Object(o.mdx)("p",null,"Components rendered within a ModalManager should access the value provided by the DisclosureManagerContext. That value contains APIs used\nto communicate with the ModalManager and disclose additional content."),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React, { useContext } from 'react';\nimport { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';\n\nimport ModalContentComponent from './ModalContentComponent';\n\nconst ComponentWithModal = () => {\n  const disclosureManager = useContext(DisclosureManagerContext);\n\n  return (\n    <button\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'component-with-modal.modal-content',\n            component: <ModalContentComponent />,\n          },\n        });\n      }}\n    >\n      Show Modal\n    </button>\n  );\n};\n")),Object(o.mdx)("p",null,"Components that need more control over the presentation of the modal have access to additional APIs that are returned upon a successful disclosure."),Object(o.mdx)("pre",null,Object(o.mdx)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React, { useContext, useRef } from 'react';\nimport { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';\n\nimport ModalContentComponent from './ModalContentComponent';\n\nconst ComponentWithModal = () => {\n  const disclosureManager = useContext(DisclosureManagerContext);\n  const modalDismissRef = useRef();\n\n  return (\n    <button\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'component-with-modal.modal-content',\n            component: (\n              <ModalContentComponent\n                onSubmit={() => {\n                  if (modalDismissRef.current) {\n                    modalDismissRef.current();\n                    modalDismissRef.current = undefined;\n                  }\n                }}\n              />\n            ),\n          },\n        }).then(({ dismissDisclosure }) => {\n          modalDismissRef.current = dismissDisclosure;\n        });\n      }}\n    >\n      Show Modal\n    </button>\n  );\n};\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=412-6b66ad74dc1dcc391dd4.js.map