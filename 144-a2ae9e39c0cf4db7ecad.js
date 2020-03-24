(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1320:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),a=n(995),d=n.n(a),u=function(e){var t=e.url;return o.a.createElement(d.a,{name:"terra-embedded-content-consumer",version:"3.22.0",url:t})}},1390:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(17)),a=r(n(23)),d=r(n(24)),u=r(n(26)),l=r(n(27)),s=r(n(28)),c=r(n(29)),m=r(n(0)),i=r(n(2)),p=n(231),f={src:i.default.string.isRequired,onMount:i.default.func,onLaunch:i.default.func,onAuthorize:i.default.func,options:i.default.object,eventHandlers:i.default.arrayOf(i.default.shape({key:i.default.string,handler:i.default.func}))},b=function(e){function t(){return(0,d.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.xfcFrame=p.Consumer.mount(this.embeddedContentWrapper,this.props.src,this.props.options),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,a.default)(t,["src","onMount","onLaunch","onAuthorize","options","eventHandlers"]));return m.default.createElement("div",(0,o.default)({},n,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),t}(m.default.Component);b.propTypes=f;var h=b;t.default=h},2234:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(1390));n(231).Consumer.init();var d=function(){return o.default.createElement(a.default,{src:"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider",options:{iframeAttrs:{title:"Basic content example"}}})};t.default=d},2235:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(1390));n(231).Consumer.init();var d=[{key:"EventA",handler:function(){document.getElementById("CustomEvent").style.border="thick dashed #0000FF"}}],u=function(){return o.default.createElement("div",{id:"CustomEvent"},o.default.createElement(a.default,{src:"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider",options:{iframeAttrs:{title:"Custom Event Example"}},eventHandlers:d}))};t.default=u},2236:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(24)),a=r(n(26)),d=r(n(27)),u=r(n(28)),l=r(n(30)),s=r(n(29)),c=r(n(0)),m=r(n(1390));n(231).Consumer.init();var i=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,d.default)(this,(0,u.default)(t).call(this,e))).onMount=n.onMount.bind((0,l.default)(n)),n.handleEventA=n.handleEventA.bind((0,l.default)(n)),n.handleEventB=n.handleEventB.bind((0,l.default)(n)),n}return(0,s.default)(t,e),(0,a.default)(t,[{key:"onMount",value:function(e){this.frame=e}},{key:"handleEventA",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #0000FF",this.frame.trigger("Event-Reply",{eventReply:"eventA",borderColor:"#0000FF"})}},{key:"handleEventB",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #00FF00",this.frame.trigger("Event-Reply",{eventReply:"eventB",borderColor:"#00FF00"})}},{key:"render",value:function(){var e=[{key:"EventA",handler:this.handleEventA},{key:"EventB",handler:this.handleEventB}];return c.default.createElement("div",{id:"CustomEvents"},c.default.createElement(m.default,{src:"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider",options:{iframeAttrs:{title:"Custom events example"}},onMount:this.onMount,eventHandlers:e}))}}]),t}(c.default.Component);t.default=i},2237:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(1390));n(231).Consumer.init();var d=function(e){var t=document.getElementById("data-embedded-consumer-data-status");if(t){var n=t.contentWindow.document.getElementById("DataStatus-LifeCycleStatuses");n&&e.forEach((function(e){var t,r;n.appendChild((t=e,(r=document.createElement("li")).appendChild(document.createTextNode(t)),r))}))}},u={secret:"OAuth Secret",iframeAttrs:{title:"Embedded application lifecycle example",id:"data-embedded-consumer-data-status"}},l=function(){setTimeout((function(){d(["Mounted"])}),2e3)},s=function(){setTimeout((function(){d(["Launched"])}),3e3)},c=function(){setTimeout((function(){d(["Authorized"])}),4e3)},m=function(){return o.default.createElement(a.default,{src:"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider",onMount:l,onLaunch:s,onAuthorize:c,options:u})};t.default=m},3206:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var r=n(0),o=n.n(r),a=n(354),d=n(1320),u=n(997),l=n.n(u);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=function(){return Object(a.mdx)(l.a,{rows:[{name:"src",type:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The source URL of the content to load."))}return t.isMDXComponent=!0,t({})}},{name:"onMount",type:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Notifies the component that the container has been mounted. Provides a reference\nto this component to allow triggering messages on the embedded application."))}return t.isMDXComponent=!0,t({})}},{name:"onLaunch",type:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Notifies the component that the container has been launched."))}return t.isMDXComponent=!0,t({})}},{name:"onAuthorize",type:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Notifies the component that the container has been authorized."))}return t.isMDXComponent=!0,t({})}},{name:"options",type:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The component can be configured with consumer frame options.\nSee xfc consumer configuration for details: ",Object(a.mdx)("a",s({parentName:"p"},{href:"https://github.com/cerner/xfc"}),"https://github.com/cerner/xfc")))}return t.isMDXComponent=!0,t({})}},{name:"eventHandlers",type:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"arrayOf"),Object(a.mdx)("pre",null,Object(a.mdx)("code",s({parentName:"pre"},{className:"language-json"}),'{\n "name": "shape",\n "value": {\n  "key": {\n   "name": "string",\n   "required": false\n  },\n  "handler": {\n   "name": "func",\n   "required": false\n  }\n }\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=c(t,["components"]);return Object(a.mdx)("wrapper",s({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A set of event handlers keyed by the event name.\nNote: Binding the event handler is necessary to make ",Object(a.mdx)("inlineCode",{parentName:"p"},"this")," work in the callback."))}return t.isMDXComponent=!0,t({})}}]})},i=n(2234),p=n.n(i);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h={};function v(e){var t=e.components,n=b(e,["components"]);return Object(a.mdx)("wrapper",f({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",f({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nimport { Consumer } from 'xfc';\n\nConsumer.init();\n\nconst BasicConsumer = () => (\n  <EmbeddedContentConsumer\n    src=\"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider\"\n    options={{ iframeAttrs: { title: 'Basic content example' } }}\n  />\n);\n\nexport default BasicConsumer;\n\n")))}v.isMDXComponent=!0;var _=n(994),y=n.n(_),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:t||"Basic Consumer",description:n,example:o.a.createElement(p.a,null),exampleSrc:o.a.createElement(v,null),isExpanded:r})},O=n(2235),g=n.n(O);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C={};function T(e){var t=e.components,n=j(e,["components"]);return Object(a.mdx)("wrapper",E({},C,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",E({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nimport { Consumer } from 'xfc';\n\nConsumer.init();\n\nconst eventHandlers = [{\n  key: 'EventA',\n  handler: () => {\n    document.getElementById('CustomEvent').style.border = 'thick dashed #0000FF';\n  },\n}];\n\nconst CustomEventConsumer = () => (\n  <div id=\"CustomEvent\">\n    <EmbeddedContentConsumer\n      src=\"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider\"\n      options={{ iframeAttrs: { title: 'Custom Event Example' } }}\n      eventHandlers={eventHandlers}\n    />\n  </div>\n);\n\nexport default CustomEventConsumer;\n\n")))}T.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:t||"Custom Event Consumer",description:n,example:o.a.createElement(g.a,null),exampleSrc:o.a.createElement(T,null),isExpanded:r})},N=n(2236),P=n.n(N);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var D={};function S(e){var t=e.components,n=k(e,["components"]);return Object(a.mdx)("wrapper",M({},D,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nimport { Consumer } from 'xfc';\n\nConsumer.init();\n\nclass CustomEventsConsumer extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.onMount = this.onMount.bind(this);\n    this.handleEventA = this.handleEventA.bind(this);\n    this.handleEventB = this.handleEventB.bind(this);\n  }\n\n  onMount(frame) {\n    this.frame = frame;\n  }\n\n  handleEventA() {\n    document.getElementById('CustomEvents').style.border = 'thick dashed #0000FF';\n    this.frame.trigger('Event-Reply', { eventReply: 'eventA', borderColor: '#0000FF' });\n  }\n\n  handleEventB() {\n    document.getElementById('CustomEvents').style.border = 'thick dashed #00FF00';\n    this.frame.trigger('Event-Reply', { eventReply: 'eventB', borderColor: '#00FF00' });\n  }\n\n  render() {\n    const eventHandlers = [\n      {\n        key: 'EventA',\n        handler: this.handleEventA,\n      },\n      {\n        key: 'EventB',\n        handler: this.handleEventB,\n      },\n    ];\n\n    return (\n      <div id=\"CustomEvents\">\n        <EmbeddedContentConsumer\n          src=\"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider\"\n          options={{ iframeAttrs: { title: 'Custom events example' } }}\n          onMount={this.onMount}\n          eventHandlers={eventHandlers}\n        />\n      </div>\n    );\n  }\n}\n\nexport default CustomEventsConsumer;\n\n")))}S.isMDXComponent=!0;var B=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:t||"Custom Events Consumer",description:n,example:o.a.createElement(P.a,null),exampleSrc:o.a.createElement(S,null),isExpanded:r})},L=n(2237),A=n.n(L);function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var I={};function q(e){var t=e.components,n=F(e,["components"]);return Object(a.mdx)("wrapper",X({},I,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",X({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nimport { Consumer } from 'xfc';\n\nConsumer.init();\n\nconst createListItem = (itemName) => {\n  const listItem = document.createElement('li');\n  listItem.appendChild(document.createTextNode(itemName));\n\n  return listItem;\n};\n\nconst appendLifeCycleStatuses = (statuses) => {\n  const frame = document.getElementById('data-embedded-consumer-data-status');\n  if (!frame) {\n    return;\n  }\n\n  const frameContent = frame.contentWindow.document.getElementById('DataStatus-LifeCycleStatuses');\n  if (frameContent) {\n    statuses.forEach((status) => { frameContent.appendChild(createListItem(status)); });\n  }\n};\n\nconst options = { secret: 'OAuth Secret', iframeAttrs: { title: 'Embedded application lifecycle example', id: 'data-embedded-consumer-data-status' } };\n\nconst onMount = () => {\n  setTimeout(() => { appendLifeCycleStatuses(['Mounted']); }, 2000);\n};\n\nconst onLaunch = () => {\n  setTimeout(() => { appendLifeCycleStatuses(['Launched']); }, 3000);\n};\n\nconst onAuthorize = () => {\n  setTimeout(() => { appendLifeCycleStatuses(['Authorized']); }, 4000);\n};\n\nconst DataStatusConsumer = () => (\n  <EmbeddedContentConsumer\n    src=\"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider\"\n    onMount={onMount}\n    onLaunch={onLaunch}\n    onAuthorize={onAuthorize}\n    options={options}\n  />\n);\n\nexport default DataStatusConsumer;\n\n")))}q.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:t||"Data Status Consumer",description:n,example:o.a.createElement(A.a,null),exampleSrc:o.a.createElement(q,null),isExpanded:r})};n(231);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var V={};function W(e){var t=e.components,n=H(e,["components"]);return Object(a.mdx)("wrapper",z({},V,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(d.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-embedded-content-consumer"},"Terra Embedded Content Consumer"),Object(a.mdx)("p",null,"The Embedded Content Consumer is the managed application component which is embedding web content within an iframe. The Embedded Content Consumer is responsible for the communication between its embedded content to its framework, such that interaction with embedded content appears seemless."),Object(a.mdx)("p",null,"Under the hood, the embedded-content-consumer utilizes an ",Object(a.mdx)("a",z({parentName:"p"},{href:"https://www.npmjs.com/package/xfc"}),Object(a.mdx)("inlineCode",{parentName:"a"},"XFC (Cross-Frame-Container)"))," Consumer to manage the iframe size and to listen for messages bridged out from the embedded content through an XFC provider."),Object(a.mdx)("p",null,"The embedded-content-consumer will use the messages sent from the embedded content to determine if updates are neeed within itself. Otherwise if the embedded content needs to be updated, embedded-content-consumer should send a reply message to the embedded content provider. Then, the embedded content will update itself when it receives the embedded-content-consumer message."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"Install with ",Object(a.mdx)("a",z({parentName:"p"},{href:"https://www.npmjs.com/"}),"npmjs"),":"),Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-embedded-content-consumer")))),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"Install the ",Object(a.mdx)("a",z({parentName:"p"},{href:"https://www.npmjs.com/package/xfc"}),Object(a.mdx)("inlineCode",{parentName:"a"},"xfc"))," peer dependency:"),Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install xfc --save-dev")))),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},"Then, initalize the XFC Consumer at the root of your application to use the ",Object(a.mdx)("inlineCode",{parentName:"p"},"terra-embedded-content-consumer"),". This will create an app broker to manage embedded applications."))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",z({parentName:"tr"},{align:null}),"Peer Dependency"),Object(a.mdx)("th",z({parentName:"tr"},{align:null}),"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",z({parentName:"tr"},{align:null}),"react"),Object(a.mdx)("td",z({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",z({parentName:"tr"},{align:null}),"react-dom"),Object(a.mdx)("td",z({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",z({parentName:"tr"},{align:null}),"xfc"),Object(a.mdx)("td",z({parentName:"tr"},{align:null}),"^1.2.1")))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",z({parentName:"pre"},{className:"language-jsx"}),"import { Consumer } from 'xfc';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nConsumer.init();\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",z({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",z({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",z({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(a.mdx)("p",null,Object(a.mdx)("a",z({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-embedded-content-consumer"}),"View Component Source Code")),Object(a.mdx)("p",null,"##Examples"),Object(a.mdx)(x,{title:"Basic Embedded Content Consumer",mdxType:"BasicConsumer"}),Object(a.mdx)(R,{title:"Embedded Content Consumer Lifecycle Statuses",mdxType:"DataStatusConsumer"}),Object(a.mdx)(w,{title:"Embedded Content Consumer that Listens for a Custom Event",mdxType:"CustomEventConsumer"}),Object(a.mdx)(B,{title:"Embedded Content Consumer with Seamless Communication",mdxType:"CustomEventsConsumer"}),Object(a.mdx)("h2",{id:"embedded-content-consumer-props-table"},"Embedded Content Consumer Props Table"),Object(a.mdx)(m,{mdxType:"EmbeddedContentConsumerPropsTable"}))}W.isMDXComponent=!0},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(2)),a=u(n(4)),d=u(n(999));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=a.default.bind(d.default),b={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=s(t).call(this,e))||"object"!==l(o)&&"function"!=typeof o?c(r):o).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(c(n)),n.handleCodeToggle=n.handleCodeToggle.bind(c(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),i(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),i(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,o=e.exampleSrc,a=e.title,d=e.description,u=this.state,l=u.isExpanded,s=u.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(a),r.default.createElement("div",{className:f("content",{"dynamic-content":s})},t.renderDescription(d),n),o&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),l&&r.default.createElement("div",{className:f("code")},o)))}}]),t}(r.default.Component);h.propTypes=b,h.defaultProps={isExpanded:!1};var v=h;t.default=v},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(2)),a=u(n(4)),d=u(n(996));function u(e){return e&&e.__esModule?e:{default:e}}var l=a.default.bind(d.default),s={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.name,n=e.url,o=e.version;return r.default.createElement("div",{className:l("badge-container")},r.default.createElement("a",{className:l("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:l("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:l("badge-version")},"v".concat(o))))};c.propTypes=s;var m=c;t.default=m},996:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},997:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(2)),a=u(n(4)),d=u(n(998));function u(e){return e&&e.__esModule?e:{default:e}}var l=a.default.bind(d.default),s={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},c=function(e){var t=e.rows;return r.default.createElement("table",{className:l("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:l("tr")},r.default.createElement("th",{className:l("th")},"Prop Name"),r.default.createElement("th",{className:l("th")},"Type"),r.default.createElement("th",{className:l("th")},"Is Required"),r.default.createElement("th",{className:l("th")},"Default Value"),r.default.createElement("th",{className:l("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:l(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:l(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:l(["td","props-td"])},e.type()),r.default.createElement("td",{className:l(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:l(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:l(["td","props-td"])},e.description()))}))))};c.propTypes=s;var m=c;t.default=m},998:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},999:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=144-a2ae9e39c0cf4db7ecad.js.map