(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),i=l(n(19));function l(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M48 22.7L37.4 12.1c-1.3-1.3-3.6-1.3-4.9 0l-3.8 3.8 2.1 2.1 3.8-3.8c.1-.1.3-.1.4-.1s.2 0 .4.1L43 22c-1.2-.6-2.8-1-4.8-1-6.7 0-9.7 1.4-10.9 3.8-1-.4-2.2-.7-3.3-.7s-2.3.2-3.3.7C19.5 22.4 16.5 21 9.8 21c-2 0-3.6.3-4.8 1l7.7-7.7c.2-.2.5-.2.7 0l3.8 3.8 2.1-2.1-3.8-3.8c-1.4-1.4-3.6-1.4-4.9 0L0 22.7V26l1.7 1.7v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8c.8-.4 1.7-.6 2.7-.6s1.9.2 2.7.6v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8L48 26v-3.3zM11.5 34.2c-3.4 0-7.1-2.3-7.1-5.6 0-3.2.9-4.9 5.4-4.9 8.8 0 8.8 2.3 8.8 4.9 0 3.3-3.7 5.6-7.1 5.6zm25 0c-3.4 0-7.1-2.3-7.1-5.6 0-2.6 0-4.9 8.8-4.9 3.5 0 5.4.8 5.4 4.9 0 3.3-3.8 5.6-7.1 5.6z"}))};o.displayName="IconGlasses",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=o;t.default=c},1294:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),i=n.n(a),l=n(995),r=n.n(l),o=function(e){var t=e.url;return i.a.createElement(r.a,{name:"terra-clinical-detail-view",version:"3.16.0",url:t})}},1441:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),i=s(n(2)),l=s(n(4)),r=s(n(1945)),o=s(n(1946)),c=s(n(1576));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.default.bind(r.default),f={title:i.default.string,secondaryTitles:i.default.arrayOf(i.default.string),subtitles:i.default.arrayOf(i.default.string),accessory:i.default.element,graph:i.default.element,details:i.default.arrayOf(i.default.element),footer:i.default.string,isDivided:i.default.bool,isSmallerTitles:i.default.bool},v={title:void 0,secondaryTitles:[],subtitles:[],graph:void 0,accessory:void 0,details:[],footer:void 0,isDivided:!0,isSmallerTitles:!1},b=function(e){var t=e.title,n=e.secondaryTitles,i=e.subtitles,l=e.accessory,r=e.graph,o=e.details,c=e.footer,s=e.isDivided,f=e.isSmallerTitles,v=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(e,["title","secondaryTitles","subtitles","accessory","graph","details","footer","isDivided","isSmallerTitles"]));v.className=p(["detail-view",v.className]);var b=t?a.default.createElement("h1",{className:p("primary-text")},t):null,y=n.map((function(e,t){return a.default.createElement("div",{className:p("secondary-text"),key:"".concat(t)},e)})),x=i.map((function(e,t){return a.default.createElement("div",{className:p("subtitle"),key:"".concat(t)},e)})),D=l?a.default.createElement("div",{className:p("accessory")},l):null,O=c?a.default.createElement("div",{className:p("footer-text")},c):null,w=null,j=[];if(s){w=a.default.createElement("hr",{className:p("divider")});for(var h=0;h<o.length;h+=1)j.push(o[h]),j.push(w)}else j=o;return a.default.createElement("div",v,a.default.createElement("div",{className:p("titles-section",{"titles-smaller":f})},b,y,x,D),r&&w,r,w,j,O)};b.propTypes=f,b.defaultProps=v,b.DetailList=o.default,b.DetailListItem=c.default;var y=b;t.default=y},1442:function(e,t,n){e.exports={"detail-view-divided":"DetailViewDivided-module__detail-view-divided___3EC0T","indicator-container":"DetailViewDivided-module__indicator-container___2Ylft",icon:"DetailViewDivided-module__icon___2ah_y",text:"DetailViewDivided-module__text___2QNjc"}},1443:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),i=l(n(19));function l(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M.6 7.2c-.8-.8-.8-2.1 0-2.9L2 3c.8-.8 2-.8 2.8 0l15 15h-8.5L.6 7.2zM48 21v10c0 8.3-6.7 15-15 15h-8c-8.3 0-15-6.7-15-15V21h38zM35 31h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4z"}))};o.displayName="IconPharmacyReview",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=o;t.default=c},1444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(4)),l=o(n(19)),r=o(n(1445));function o(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=i.default.bind(r.default),d=function(e){var t=c({},e),n=s(["IconPharmacyReject",e.className]);return a.default.createElement(l.default,c({className:n},t),a.default.createElement("path",{fill:"#E50000",d:"M36 22c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-9 12c0-5 4-9 9-9 1.9 0 3.7.6 5.2 1.7L28.7 39.2C27.6 37.7 27 35.9 27 34zm9 9c-1.9 0-3.7-.6-5.2-1.7l12.5-12.5c1 1.5 1.7 3.3 1.7 5.2 0 5-4 9-9 9z"}),a.default.createElement("path",{d:"M.4 4.5c-.6-.6-.6-1.6 0-2.2l1.1-1.1c.6-.6 1.6-.6 2.2 0L15 12.6H8.6L.4 4.5zm22 29.3c0-3.2 1.1-6.1 2.9-8.4H23v3h-3v-3h-3v-3h3v-3h3v3h3v2.2c2.5-2.6 6-4.3 9.9-4.3V15H7.1v7.6c0 6.3 5.1 11.4 11.4 11.4h3.9v-.2z"}))};d.displayName="IconPharmacyReject",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var u=d;t.default=u},1445:function(e,t,n){e.exports={IconPharmacyReject:"IconPharmacyReject-module__IconPharmacyReject___5M0hm"}},1576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(2)),l=o(n(4)),r=o(n(1948));function o(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=l.default.bind(r.default),u={item:i.default.element.isRequired},m=function(e){var t=e.item,n=s(e,["item"]),i=d(["detail-list-item",n.className]);return a.default.createElement("div",c({},n,{className:i}),t)};m.propTypes=u,m.defaultProps={};var p=m;t.default=p},1943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),i=c(n(1244)),l=c(n(1441)),r=c(n(4)),o=c(n(1442));function c(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(o.default),d=a.default.createElement(i.default,{label:"Age of onset",textValue:"38 years"}),u=a.default.createElement(i.default,{label:"Reviewed",textValue:"07/10/2012 10:00AM"}),m=a.default.createElement(i.default,{label:"Comments",textValue:"--"}),p=a.default.createElement(i.default,{label:"Age of onset",textValue:"--"}),f=a.default.createElement(i.default,{label:"Reviewed",textValue:"07/10/2012 10:00AM"}),v=a.default.createElement(i.default,{label:"Comments",textValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (Hollister MD, David 09/12/2011 11:34:12AM)"}),b=function(){return a.default.createElement("div",{className:s("detail-view-divided")},a.default.createElement(l.default,{title:"Mother",subtitles:["Martha (58 years)","[second line for subtitles]"],details:[a.default.createElement(l.default.DetailList,{title:"Diabetes",key:"order-info-1"},a.default.createElement(l.default.DetailListItem,{item:d}),a.default.createElement(l.default.DetailListItem,{item:u}),a.default.createElement(l.default.DetailListItem,{item:m})),a.default.createElement(l.default.DetailList,{title:"Hypertension",key:"order-info-2"},a.default.createElement(l.default.DetailListItem,{item:p}),a.default.createElement(l.default.DetailListItem,{item:f}),a.default.createElement(l.default.DetailListItem,{item:v}))],footer:"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"}))};t.default=b},1945:function(e,t,n){e.exports={"detail-view":"DetailView-module__detail-view___1cwNP","titles-section":"DetailView-module__titles-section___1bonB","primary-text":"DetailView-module__primary-text___XOpAa","secondary-text":"DetailView-module__secondary-text___3LDEU",subtitle:"DetailView-module__subtitle___3CMPz",accessory:"DetailView-module__accessory___13FvY","titles-smaller":"DetailView-module__titles-smaller___2TJNX","footer-text":"DetailView-module__footer-text___j7wbM",divider:"DetailView-module__divider___3Fbvf"}},1946:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),i=c(n(2)),l=c(n(4)),r=c(n(1947)),o=c(n(1576));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=l.default.bind(r.default),m={title:i.default.string,children:i.default.oneOfType([i.default.objectOf(o.default),i.default.arrayOf(i.default.objectOf(o.default))])},p={title:void 0,children:void 0},f=function(e){var t,n=e.title,i=e.children,l=d(e,["title","children"]);return n&&(t=a.default.createElement("div",{className:u("title")},n)),a.default.createElement("div",s({},l,{"data-terra-clincial-detail-list":!0,className:l.className}),t,a.default.createElement("div",{className:u("list")},i))};f.propTypes=m,f.defaultProps=p;var v=f;t.default=v},1947:function(e,t,n){e.exports={title:"DetailList-module__title___2Nurz",list:"DetailList-module__list___1aHav"}},1948:function(e,t,n){e.exports={"detail-list-item":"DetailListItem-module__detail-list-item___3hd1E"}},1949:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),i=c(n(1244)),l=c(n(1441)),r=c(n(4)),o=c(n(1442));function c(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(o.default),d=a.default.createElement(i.default,{label:"Start Date",textValue:"12/12/12 00:00AM"}),u=a.default.createElement(i.default,{label:"Stop Date",textValue:"12/12/12 10:00AM"}),m=a.default.createElement(i.default,{label:"Collected By",textValue:"Nuse Collect"}),p=a.default.createElement(i.default,{label:"Priority",textValue:"High"}),f=function(){return a.default.createElement("div",{className:s("detail-view-divided")},a.default.createElement(l.default,{title:"Complete Blood Count Order",subtitles:["Accession","239493849"],details:[a.default.createElement(l.default.DetailList,{title:"Collection Details",key:"order-info-2"},a.default.createElement(l.default.DetailListItem,{item:d}),a.default.createElement(l.default.DetailListItem,{item:u}),a.default.createElement(l.default.DetailListItem,{item:m}),a.default.createElement(l.default.DetailListItem,{item:p}))],isDivided:!1}))};t.default=f},1950:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),i=m(n(1244)),l=m(n(1245)),r=m(n(1443)),o=m(n(1444)),c=m(n(1246)),s=m(n(4)),d=m(n(1441)),u=m(n(1442));function m(e){return e&&e.__esModule?e:{default:e}}var p=s.default.bind(u.default),f=a.default.createElement("div",{className:p("indicator-container")},a.default.createElement("div",{className:p("icon")},a.default.createElement(l.default,null)),a.default.createElement("div",{className:p("text")},"Immediate Priority")),v=a.default.createElement("div",{className:p("indicator-container")},a.default.createElement("div",{className:p("icon")},a.default.createElement(r.default,null)),a.default.createElement("div",{className:p("text")},"Pharmacy Review")),b=a.default.createElement("div",{className:p("indicator-container")},a.default.createElement("div",{className:p("icon")},a.default.createElement(c.default,null)),a.default.createElement("div",{className:p("text")},"Nurse Review")),y=a.default.createElement("div",{className:p("indicator-container")},a.default.createElement("div",{className:p("icon")},a.default.createElement(o.default,null)),a.default.createElement("div",{className:p("text")},"Pharmacy Reject")),x=a.default.createElement(i.default,{label:"Order Comment",textValue:"To be taken after lunch"}),D=a.default.createElement(i.default,{label:"Mar Notes",textValue:"Using the med from last 2 months"}),O=a.default.createElement(i.default,{label:"Special Instructions",textValue:"Never to be taken without eating"}),w=a.default.createElement(i.default,{label:"Admin Notes",textValue:"Try med for 2 more months"}),j=function(){return a.default.createElement("div",{className:p("detail-view-divided")},a.default.createElement(d.default,{title:"Multiple Ingredients",secondaryTitles:["M. V. I. Adult 10 mL = 10 mL","Sodium bicarbonate 8.4% 50 mL","Dextrose 5% in Water 1000 mL"],subtitles:["30 mg, Oral, Start Date/Time: 06/28/17 20:00:00 CDT. Stop Date/Time: 06/28/17 20:00:00 CDT"],accessory:a.default.createElement("div",{className:p("indicator-container")},a.default.createElement("div",{className:p("text")},"Ordered")),details:[a.default.createElement(d.default.DetailList,{title:"Indicators",key:"Indicators"},a.default.createElement(d.default.DetailListItem,{item:f}),a.default.createElement(d.default.DetailListItem,{item:v}),a.default.createElement(d.default.DetailListItem,{item:b}),a.default.createElement(d.default.DetailListItem,{item:y})),a.default.createElement(d.default.DetailList,{title:"Comments",key:"Comments"},a.default.createElement(d.default.DetailListItem,{item:x}),a.default.createElement(d.default.DetailListItem,{item:D}),a.default.createElement(d.default.DetailListItem,{item:O}),a.default.createElement(d.default.DetailListItem,{item:w}))],footer:"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM",isSmallerTitles:!0}))};t.default=j},3200:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var a=n(0),i=n.n(a),l=n(354),r=n(1294),o=n(997),c=n.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=function(){return Object(l.mdx)(c.a,{rows:[{name:"title",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The primary title to display."))}return t.isMDXComponent=!0,t({})}},{name:"secondaryTitles",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"arrayOf"),Object(l.mdx)("pre",null,Object(l.mdx)("code",s({parentName:"pre"},{className:"language-json"}),'{\n "name": "string"\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Additional list of title strings to display."))}return t.isMDXComponent=!0,t({})}},{name:"subtitles",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"arrayOf"),Object(l.mdx)("pre",null,Object(l.mdx)("code",s({parentName:"pre"},{className:"language-json"}),'{\n "name": "string"\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"List of subtitle strings."))}return t.isMDXComponent=!0,t({})}},{name:"accessory",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Display for minor supporting information like Status, Progress, or anything additional."))}return t.isMDXComponent=!0,t({})}},{name:"graph",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Display for visualization of data."))}return t.isMDXComponent=!0,t({})}},{name:"details",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"arrayOf"),Object(l.mdx)("pre",null,Object(l.mdx)("code",s({parentName:"pre"},{className:"language-json"}),'{\n "name": "element"\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Array of elements to display information in the body of the detail view."))}return t.isMDXComponent=!0,t({})}},{name:"footer",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Text to be displayed at the footer of the detail view."))}return t.isMDXComponent=!0,t({})}},{name:"isDivided",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"true",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Indicates if sections should be divided. Is applied by default."))}return t.isMDXComponent=!0,t({})}},{name:"isSmallerTitles",type:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=d(t,["components"]);return Object(l.mdx)("wrapper",s({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Sets title sizes to be smaller than default sizes, good for longer titles like medication names."))}return t.isMDXComponent=!0,t({})}}]})};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=function(){return Object(l.mdx)(c.a,{rows:[{name:"title",type:function(){var e={};function t(t){var n=t.components,a=p(t,["components"]);return Object(l.mdx)("wrapper",m({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=p(t,["components"]);return Object(l.mdx)("wrapper",m({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The detail view list title to be displayed above the list item(s)."))}return t.isMDXComponent=!0,t({})}},{name:"children",type:function(){var e={};function t(t){var n=t.components,a=p(t,["components"]);return Object(l.mdx)("wrapper",m({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"union"),Object(l.mdx)("pre",null,Object(l.mdx)("code",m({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "objectOf",\n  "value": {\n   "name": "custom",\n   "raw": "DetailListItem"\n  }\n },\n {\n  "name": "arrayOf",\n  "value": {\n   "name": "objectOf",\n   "value": {\n    "name": "custom",\n    "raw": "DetailListItem"\n   }\n  }\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=p(t,["components"]);return Object(l.mdx)("wrapper",m({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The detail item(s) to display information. Must be either a\nDetailListItem element or array of DetailListItem elements."))}return t.isMDXComponent=!0,t({})}}]})};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var y=function(){return Object(l.mdx)(c.a,{rows:[{name:"item",type:function(){var e={};function t(t){var n=t.components,a=b(t,["components"]);return Object(l.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=b(t,["components"]);return Object(l.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The detail view list item to be displayed."))}return t.isMDXComponent=!0,t({})}}]})},x=n(1943),D=n.n(x);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var j={};function h(e){var t=e.components,n=w(e,["components"]);return Object(l.mdx)("wrapper",O({},j,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport LabelValueView from \'terra-clinical-label-value-view\';\nimport DetailView from \'terra-clinical-detail-view\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./DetailViewDivided.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst detail1title = \'Diabetes\';\nconst detail1item1 = (<LabelValueView label="Age of onset" textValue="38 years" />);\nconst detail1item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" />);\nconst detail1item3 = (<LabelValueView label="Comments" textValue="--" />);\n\nconst detail2title = \'Hypertension\';\nconst detail2item1 = (<LabelValueView label="Age of onset" textValue="--" />);\nconst detail2item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" />);\nconst detail2item3 = (<LabelValueView label="Comments" textValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (Hollister MD, David 09/12/2011 11:34:12AM)" />);\n\nconst DetailViewDivided = () => (\n  <div className={cx(\'detail-view-divided\')}>\n    <DetailView\n      title="Mother"\n      subtitles={[\'Martha (58 years)\', \'[second line for subtitles]\']}\n      details={[\n        (\n          <DetailView.DetailList title={detail1title} key="order-info-1">\n            <DetailView.DetailListItem item={detail1item1} />\n            <DetailView.DetailListItem item={detail1item2} />\n            <DetailView.DetailListItem item={detail1item3} />\n          </DetailView.DetailList>\n        ),\n        (\n          <DetailView.DetailList title={detail2title} key="order-info-2">\n            <DetailView.DetailListItem item={detail2item1} />\n            <DetailView.DetailListItem item={detail2item2} />\n            <DetailView.DetailListItem item={detail2item3} />\n          </DetailView.DetailList>\n        ),\n      ]}\n      footer="Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"\n    />\n  </div>\n);\n\nexport default DetailViewDivided;\n\n')))}h.isMDXComponent=!0;var g=n(994),V=n.n(g),L=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.a.createElement(V.a,{title:t||"Detail View Divided",description:n,example:i.a.createElement(D.a,null),exampleSrc:i.a.createElement(h,null),isExpanded:a})},M=n(1949),_=n.n(M);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var I={};function P(e){var t=e.components,n=N(e,["components"]);return Object(l.mdx)("wrapper",E({},I,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",E({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport LabelValueView from \'terra-clinical-label-value-view\';\nimport DetailView from \'terra-clinical-detail-view\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./DetailViewDivided.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst item1 = (<LabelValueView label="Start Date" textValue="12/12/12 00:00AM" />);\nconst item2 = (<LabelValueView label="Stop Date" textValue="12/12/12 10:00AM" />);\nconst item3 = (<LabelValueView label="Collected By" textValue="Nuse Collect" />);\nconst item4 = (<LabelValueView label="Priority" textValue="High" />);\n\nconst DetailViewDivided = () => (\n  <div className={cx(\'detail-view-divided\')}>\n    <DetailView\n      title="Complete Blood Count Order"\n      subtitles={[\'Accession\', \'239493849\']}\n      details={[\n        (\n          <DetailView.DetailList title="Collection Details" key="order-info-2">\n            <DetailView.DetailListItem item={item1} />\n            <DetailView.DetailListItem item={item2} />\n            <DetailView.DetailListItem item={item3} />\n            <DetailView.DetailListItem item={item4} />\n          </DetailView.DetailList>\n        ),\n      ]}\n      isDivided={false}\n    />\n  </div>\n);\n\nexport default DetailViewDivided;\n\n')))}P.isMDXComponent=!0;var T=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.a.createElement(V.a,{title:t||"Detail View No Divider",description:n,example:i.a.createElement(_.a,null),exampleSrc:i.a.createElement(P,null),isExpanded:a})},C=n(1950),X=n.n(C);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var A={};function R(e){var t=e.components,n=k(e,["components"]);return Object(l.mdx)("wrapper",S({},A,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",S({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport IconCritical from 'terra-icon/lib/icon/IconCritical';\nimport IconPharmacyReview from 'terra-icon/lib/icon/IconPharmacyReview';\nimport IconPharmacyReject from 'terra-icon/lib/icon/IconPharmacyReject';\nimport IconGlasses from 'terra-icon/lib/icon/IconGlasses';\nimport classNames from 'classnames/bind';\nimport DetailView from 'terra-clinical-detail-view';\nimport styles from './DetailViewDivided.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst detail1title = 'Indicators';\nconst detail1item1 = (\n  <div className={cx('indicator-container')}>\n    <div className={cx('icon')}>\n      <IconCritical />\n    </div>\n    <div className={cx('text')}>\n      Immediate Priority\n    </div>\n  </div>\n);\nconst detail1item2 = (\n  <div className={cx('indicator-container')}>\n    <div className={cx('icon')}>\n      <IconPharmacyReview />\n    </div>\n    <div className={cx('text')}>\n      Pharmacy Review\n    </div>\n  </div>\n);\nconst detail1item3 = (\n  <div className={cx('indicator-container')}>\n    <div className={cx('icon')}>\n      <IconGlasses />\n    </div>\n    <div className={cx('text')}>\n      Nurse Review\n    </div>\n  </div>\n);\nconst detail1item4 = (\n  <div className={cx('indicator-container')}>\n    <div className={cx('icon')}>\n      <IconPharmacyReject />\n    </div>\n    <div className={cx('text')}>\n      Pharmacy Reject\n    </div>\n  </div>\n);\n\nconst detail2title = 'Comments';\nconst detail2item1 = (<LabelValueView label=\"Order Comment\" textValue=\"To be taken after lunch\" />);\nconst detail2item2 = (<LabelValueView label=\"Mar Notes\" textValue=\"Using the med from last 2 months\" />);\nconst detail2item3 = (<LabelValueView label=\"Special Instructions\" textValue=\"Never to be taken without eating\" />);\nconst detail2item4 = (<LabelValueView label=\"Admin Notes\" textValue=\"Try med for 2 more months\" />);\n\nconst DetailViewDivided = () => (\n  <div className={cx('detail-view-divided')}>\n    <DetailView\n      title=\"Multiple Ingredients\"\n      secondaryTitles={['M. V. I. Adult 10 mL = 10 mL', 'Sodium bicarbonate 8.4% 50 mL', 'Dextrose 5% in Water 1000 mL']}\n      subtitles={['30 mg, Oral, Start Date/Time: 06/28/17 20:00:00 CDT. Stop Date/Time: 06/28/17 20:00:00 CDT']}\n      accessory={(\n        <div className={cx('indicator-container')}>\n          <div className={cx('text')}>\n            Ordered\n          </div>\n        </div>\n      )}\n      details={[\n        (\n          <DetailView.DetailList title={detail1title} key=\"Indicators\">\n            <DetailView.DetailListItem item={detail1item1} />\n            <DetailView.DetailListItem item={detail1item2} />\n            <DetailView.DetailListItem item={detail1item3} />\n            <DetailView.DetailListItem item={detail1item4} />\n          </DetailView.DetailList>\n        ),\n        (\n          <DetailView.DetailList title={detail2title} key=\"Comments\">\n            <DetailView.DetailListItem item={detail2item1} />\n            <DetailView.DetailListItem item={detail2item2} />\n            <DetailView.DetailListItem item={detail2item3} />\n            <DetailView.DetailListItem item={detail2item4} />\n          </DetailView.DetailList>\n        ),\n      ]}\n      footer=\"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM\"\n      isSmallerTitles\n    />\n  </div>\n);\n\nexport default DetailViewDivided;\n\n")))}R.isMDXComponent=!0;var q=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.a.createElement(V.a,{title:t||"Detail View Divided Smaller Titles",description:n,example:i.a.createElement(X.a,null),exampleSrc:i.a.createElement(R,null),isExpanded:a})};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var B={};function U(e){var t=e.components,n=H(e,["components"]);return Object(l.mdx)("wrapper",z({},B,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(r.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-clinical-detailview"},"Terra Clinical DetailView"),Object(l.mdx)("p",null,"Detail Views allows you to create a view with text at different levels of importance. A detail view can contain a title, subtitles, a graph, a footer and a list of elements that can display information at a more detailed level."),Object(l.mdx)("p",null,"A Detail List is a structural subcomponent of Detail View indented to be used within the details prop. A Detail List accepts and arranges DetailListItem elements in a flexbox layout that wraps the list of items by row."),Object(l.mdx)("p",null,"Detail List Items are the elements to be placed within a Detail List. A Detail List Item accepts one element item and applies a minimum width of 50% so that the element spans at minimum half of the Detail List. This allows the Detail List to have either one or two items per row depending on the width of the item content in each item."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",z({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-detail-view"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",z({parentName:"pre"},{className:"language-jsx"}),"import DetailView from 'terra-clinical-detail-view';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",z({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",z({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",z({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(l.mdx)("p",null,Object(l.mdx)("a",z({parentName:"p"},{href:"https://github.com/cerner/terra-clinical/tree/master/packages/terra-clinical-detail-view"}),"View Component Source Code")),Object(l.mdx)("h2",{id:"example"},"Example"),Object(l.mdx)(L,{title:"Divided Detail View",mdxType:"DetailViewDivided"}),Object(l.mdx)(T,{title:"Non-Divided Detail View",mdxType:"DetailViewNoDivider"}),Object(l.mdx)(q,{title:"Divided Detail View with Smaller Titles",mdxType:"DetailViewDividedSmallerTitles"}),Object(l.mdx)("h2",{id:"detail-view-props-table"},"Detail View Props Table"),Object(l.mdx)(u,{mdxType:"DetailViewPropsTable"}),Object(l.mdx)("h2",{id:"detail-list-props-table"},"Detail List Props Table"),Object(l.mdx)(f,{mdxType:"DetailListPropsTable"}),Object(l.mdx)("h2",{id:"detail-list-item-props-table"},"Detail List Item Props Table"),Object(l.mdx)(y,{mdxType:"DetailListItemPropsTable"}))}U.isMDXComponent=!0}}]);
//# sourceMappingURL=100-128c6d07a323f49a27d7.js.map