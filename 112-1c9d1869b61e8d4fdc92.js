(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1314:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),o=n.n(a),l=n(995),r=n.n(l),i=function(e){var t=e.url;return o.a.createElement(r.a,{name:"terra-dialog-modal",version:"3.31.0",url:t})}},1315:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(17)),l=a(n(23)),r=a(n(0)),i=a(n(229)),u=a(n(2)),d=a(n(4)),s=a(n(1477)),c=d.default.bind(s.default),p={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},m={ariaLabel:u.default.string.isRequired,header:u.default.element.isRequired,footer:u.default.element.isRequired,children:u.default.node,onRequestClose:u.default.func.isRequired,isOpen:u.default.bool,width:u.default.oneOf(Object.keys(p)),closeOnOutsideClick:u.default.bool,rootSelector:u.default.string},f=function(e){var t=e.header,n=e.footer,a=e.children,u=e.onRequestClose,d=e.isOpen,s=e.ariaLabel,m=e.width,f=e.closeOnOutsideClick,h=e.rootSelector,_=(0,l.default)(e,["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"]);if(!d)return null;var b=["dialog-modal-wrapper"];return m in p?b.push("width-".concat(p[m])):b.push("width-1120"),r.default.createElement(i.default,{ariaLabel:s,role:"dialog",classNameModal:c(b),isOpen:d,onRequestClose:u,zIndex:"7000",closeOnOutsideClick:f,rootSelector:h},r.default.createElement("div",(0,o.default)({},_,{className:c("dialog-modal-inner-wrapper",_.className)}),r.default.createElement("div",{className:c("dialog-modal-container")},r.default.createElement("div",null,t),r.default.createElement("div",{className:c("dialog-modal-body")},a),r.default.createElement("div",null,n))))};f.propTypes=m,f.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};var h=f;t.default=h},1477:function(e,t,n){e.exports={"dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___2mYU6","width-320":"DialogModal-module__width-320___icPja","width-480":"DialogModal-module__width-480___3wp-k","width-560":"DialogModal-module__width-560___3ACv-","width-640":"DialogModal-module__width-640___2TmhX","width-800":"DialogModal-module__width-800___1aWAR","width-960":"DialogModal-module__width-960___2HjUG","width-1120":"DialogModal-module__width-1120___39VNk","width-1280":"DialogModal-module__width-1280___M2KcN","width-1440":"DialogModal-module__width-1440___KapJB","width-1600":"DialogModal-module__width-1600___3DicF","width-1760":"DialogModal-module__width-1760___6UZyA","width-1920":"DialogModal-module__width-1920___3e7sk","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___2L8xm","dialog-modal-container":"DialogModal-module__dialog-modal-container___RbbyM","dialog-modal-header":"DialogModal-module__dialog-modal-header___1tLwD","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___2MCkU","dialog-modal-body":"DialogModal-module__dialog-modal-body___2nN7T"}},2184:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(24)),l=a(n(26)),r=a(n(27)),i=a(n(28)),u=a(n(30)),d=a(n(29)),s=a(n(0)),c=a(n(60)),p=a(n(83)),m=a(n(232)),f=a(n(1315)),h=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,r.default)(this,(0,i.default)(t).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,u.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,u.default)(e)),e}return(0,d.default)(t,e),(0,l.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(f.default,{ariaLabel:"Default Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement(p.default,{title:"Action Header used here",onClose:this.handleCloseModal}),footer:s.default.createElement(m.default,{start:"Action Footer used here"})},s.default.createElement("p",null,["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."])),s.default.createElement(c.default,{text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),t}(s.default.Component);t.default=h},2185:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(24)),l=a(n(26)),r=a(n(27)),i=a(n(28)),u=a(n(30)),d=a(n(29)),s=a(n(0)),c=a(n(60)),p=a(n(83)),m=a(n(232)),f=a(n(1315)),h=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,r.default)(this,(0,i.default)(t).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,u.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,u.default)(e)),e}return(0,d.default)(t,e),(0,l.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(f.default,{ariaLabel:"Dialog Modal With Long Text",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement(p.default,{title:"Action Header used here",onClose:this.handleCloseModal}),footer:s.default.createElement(m.default,{start:"Action Footer used here"}),width:"960"},s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e)),s.default.createElement(c.default,{text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),t}(s.default.Component);t.default=h},2186:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(24)),l=a(n(26)),r=a(n(27)),i=a(n(28)),u=a(n(30)),d=a(n(29)),s=a(n(0)),c=a(n(60)),p=a(n(4)),m=a(n(1315)),f=a(n(2187)),h=p.default.bind(f.default),_=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,r.default)(this,(0,i.default)(t).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,u.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,u.default)(e)),e}return(0,d.default)(t,e),(0,l.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(m.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement("div",{className:h("header")},"Custom Header",s.default.createElement(c.default,{id:"close-dialog-modal",text:"Close",className:h("close-button"),onClick:this.handleCloseModal})),footer:s.default.createElement("div",{className:h("footer")},"Custom Footer")},s.default.createElement("p",null,["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."])),s.default.createElement(c.default,{text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),t}(s.default.Component);t.default=_},2187:function(e,t,n){e.exports={header:"DialogModalWithCustomHeaderAndCustomFooter-module__header___3UMUn",footer:"DialogModalWithCustomHeaderAndCustomFooter-module__footer___3b-mD","close-button":"DialogModalWithCustomHeaderAndCustomFooter-module__close-button___IfSBe"}},3215:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n(0),o=n.n(a),l=n(354),r=n(1314),i=n(997),u=n.n(i);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=function(){return Object(l.mdx)(u.a,{rows:[{name:"ariaLabel",type:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Aria Label of the dialog modal."))}return t.isMDXComponent=!0,t({})}},{name:"header",type:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Header of the dialog modal."))}return t.isMDXComponent=!0,t({})}},{name:"footer",type:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Footer of the dialog modal."))}return t.isMDXComponent=!0,t({})}},{name:"children",type:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Contents of the dialog modal."))}return t.isMDXComponent=!0,t({})}},{name:"onRequestClose",type:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Callback function indicating a close condition was met."))}return t.isMDXComponent=!0,t({})}},{name:"isOpen",type:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Toggle to show dialog modal or not."))}return t.isMDXComponent=!0,t({})}},{name:"width",type:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",d({parentName:"pre"},{className:"language-json"}),'[\n "320",\n "640",\n "960",\n "1120",\n "1280",\n "1600"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'1120'",description:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Width of the dialog modal. Allows one of ",Object(l.mdx)("inlineCode",{parentName:"p"},"320"),", ",Object(l.mdx)("inlineCode",{parentName:"p"},"640"),", ",Object(l.mdx)("inlineCode",{parentName:"p"},"960"),", ",Object(l.mdx)("inlineCode",{parentName:"p"},"1120"),", ",Object(l.mdx)("inlineCode",{parentName:"p"},"1280"),", or ",Object(l.mdx)("inlineCode",{parentName:"p"},"1600"),"."),Object(l.mdx)("p",null,Object(l.mdx)("em",{parentName:"p"},"(Uses same sizes as terra-modal-manager: tiny:320, small:640, medium:960, default:1120, large:1280, huge:1600)")))}return t.isMDXComponent=!0,t({})}},{name:"closeOnOutsideClick",type:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"If set to true, the modal will close when a mouse click is triggered outside the modal."))}return t.isMDXComponent=!0,t({})}},{name:"rootSelector",type:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'#root'",description:function(){var e={};function t(t){var n=t.components,a=s(t,["components"]);return Object(l.mdx)("wrapper",d({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Used to select the root mount DOM node. This is used to help prevent focus from shifting outside of the DialogModal when it is opened."))}return t.isMDXComponent=!0,t({})}}]})},p=n(2184),m=n.n(p);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _={};function b(e){var t=e.components,n=h(e,["components"]);return Object(l.mdx)("wrapper",f({},_,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",f({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport ActionHeader from 'terra-action-header';\nimport ActionFooter from 'terra-action-footer';\nimport DialogModal from 'terra-dialog-modal';\n\nclass DefaultDialogModal extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    const paraOne = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',\n      'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',\n      'Integer congue feugiat ultricies.',\n      ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',\n      'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',\n      ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',\n      'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',\n      'Nam vehicula, arcu vitae egestas porttitor,',\n      'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];\n    return (\n      <div>\n        <DialogModal\n          ariaLabel=\"Default Dialog Modal\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          header={<ActionHeader title=\"Action Header used here\" onClose={this.handleCloseModal} />}\n          footer={<ActionFooter start=\"Action Footer used here\" />}\n        >\n          <p>{paraOne}</p>\n        </DialogModal>\n        <Button text=\"Trigger Dialog Modal\" onClick={this.handleOpenModal} />\n      </div>\n    );\n  }\n}\n\nexport default DefaultDialogModal;\n\n")))}b.isMDXComponent=!0;var g=n(994),v=n.n(g),O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.a.createElement(v.a,{title:t||"Default Dialog Modal",description:n,example:o.a.createElement(m.a,null),exampleSrc:o.a.createElement(b,null),isExpanded:a})},x=n(2185),y=n.n(x);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C={};function D(e){var t=e.components,n=j(e,["components"]);return Object(l.mdx)("wrapper",M({},C,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport ActionHeader from 'terra-action-header';\nimport ActionFooter from 'terra-action-footer';\nimport DialogModal from 'terra-dialog-modal';\n\nclass DialogModalWithLongText extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',\n      'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',\n      'Integer congue feugiat ultricies.',\n      ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',\n      'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',\n      ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',\n      'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',\n      'Nam vehicula, arcu vitae egestas porttitor,',\n      'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];\n    return (\n      <div>\n        <DialogModal\n          ariaLabel=\"Dialog Modal With Long Text\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          header={<ActionHeader title=\"Action Header used here\" onClose={this.handleCloseModal} />}\n          footer={<ActionFooter start=\"Action Footer used here\" />}\n          width=\"960\"\n        >\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n          <p>{text}</p>\n        </DialogModal>\n        <Button text=\"Trigger Dialog Modal\" onClick={this.handleOpenModal} />\n      </div>\n    );\n  }\n}\n\nexport default DialogModalWithLongText;\n\n")))}D.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.a.createElement(v.a,{title:t||"Dialog Modal With Long Text",description:n,example:o.a.createElement(y.a,null),exampleSrc:o.a.createElement(D,null),isExpanded:a})},T=n(2186),E=n.n(T);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k={};function q(e){var t=e.components,n=P(e,["components"]);return Object(l.mdx)("wrapper",w({},k,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",w({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport classNames from 'classnames/bind';\nimport DialogModal from 'terra-dialog-modal';\nimport styles from './DialogModalWithCustomHeaderAndCustomFooter.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DialogModalWithCustomHeaderAndCustomFooter extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',\n      'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',\n      'Integer congue feugiat ultricies.',\n      ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',\n      'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',\n      ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',\n      'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',\n      'Nam vehicula, arcu vitae egestas porttitor,',\n      'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];\n    return (\n      <div>\n        <DialogModal\n          ariaLabel=\"Dialog Modal\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          header={(\n            <div className={cx('header')}>\nCustom Header\n              <Button id=\"close-dialog-modal\" text=\"Close\" className={cx('close-button')} onClick={this.handleCloseModal} />\n            </div>\n)}\n          footer={<div className={cx('footer')}>Custom Footer</div>}\n        >\n          <p>{text}</p>\n        </DialogModal>\n        <Button text=\"Trigger Dialog Modal\" onClick={this.handleOpenModal} />\n      </div>\n    );\n  }\n}\n\nexport default DialogModalWithCustomHeaderAndCustomFooter;\n\n")))}q.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.a.createElement(v.a,{title:t||"Dialog Modal With Custom Header And Custom Footer",description:n,example:o.a.createElement(E.a,null),exampleSrc:o.a.createElement(q,null),isExpanded:a})};function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var R={};function A(e){var t=e.components,n=X(e,["components"]);return Object(l.mdx)("wrapper",L({},R,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(r.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-dialog-modal"},"Terra Dialog Modal"),Object(l.mdx)("p",null,"The Dialog Modal allows for disclosing accessible modals with dynamic heights. The components is placed at an 7000 z-index. The dialog modal should not be disclosed from the terra-modal-manager component. If you need to display another modal while using the modal manager, use the modal stacking functionality provided in terra-modal-manager or the terra-notification-dialog."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",L({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-dialog-modal"))))),Object(l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",L({parentName:"tr"},{align:null}),"Peer Dependency"),Object(l.mdx)("th",L({parentName:"tr"},{align:null}),"Version"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",L({parentName:"tr"},{align:null}),"react"),Object(l.mdx)("td",L({parentName:"tr"},{align:null}),"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",L({parentName:"tr"},{align:null}),"react-dom"),Object(l.mdx)("td",L({parentName:"tr"},{align:null}),"^16.8.5")))),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",L({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",L({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",L({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",L({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",L({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",L({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(O,{title:"Default Dialog Modal",mdxType:"DefaultDialogModal"}),Object(l.mdx)(N,{title:"Dialog Modal With Long Text",mdxType:"DialogModalWithLongText"}),Object(l.mdx)(S,{title:"Dialog Modal With Custom Header and Custom Footer",mdxType:"DialogModalWithCustomHeaderAndCustomFooter"}),Object(l.mdx)("h2",{id:"dialog-modal-props-table"},"Dialog Modal Props table"),Object(l.mdx)(c,{mdxType:"DialogModalPropsTable"}))}A.isMDXComponent=!0},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(2)),l=i(n(4)),r=i(n(999));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=l.default.bind(r.default),h={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},_=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=d(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?s(a):o).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(s(n)),n.handleCodeToggle=n.handleCodeToggle.bind(s(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),p(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:f("header")},a.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:f("description")},e):null}}]),p(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,o=e.exampleSrc,l=e.title,r=e.description,i=this.state,u=i.isExpanded,d=i.isBackgroundTransparent;return a.default.createElement("div",{className:f("template")},t.renderHeader(l),a.default.createElement("div",{className:f("content",{"dynamic-content":d})},t.renderDescription(r),n),o&&a.default.createElement("div",{className:f("footer")},a.default.createElement("div",{className:f("button-container")},a.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:f("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:f("chevron-right")}))),u&&a.default.createElement("div",{className:f("code")},o)))}}]),t}(a.default.Component);_.propTypes=h,_.defaultProps={isExpanded:!1};var b=_;t.default=b},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(2)),l=i(n(4)),r=i(n(996));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(r.default),d={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},s=function(e){var t=e.name,n=e.url,o=e.version;return a.default.createElement("div",{className:u("badge-container")},a.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(o))))};s.propTypes=d;var c=s;t.default=c},996:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},997:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(2)),l=i(n(4)),r=i(n(998));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(r.default),d={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},s=function(e){var t=e.rows;return a.default.createElement("table",{className:u("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:u("tr")},a.default.createElement("th",{className:u("th")},"Prop Name"),a.default.createElement("th",{className:u("th")},"Type"),a.default.createElement("th",{className:u("th")},"Is Required"),a.default.createElement("th",{className:u("th")},"Default Value"),a.default.createElement("th",{className:u("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:u(["td","props-td"])},e.type()),a.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};s.propTypes=d;var c=s;t.default=c},998:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},999:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=112-1c9d1869b61e8d4fdc92.js.map