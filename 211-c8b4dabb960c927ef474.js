(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1395:function(e,t,n){e.exports={"paginator-wrapper":"PaginatorExampleCommon-module__paginator-wrapper___2IKfk"}},1603:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(0)),r=f(n(2)),o=f(n(4)),i=n(7),l=f(n(1019)),s=f(n(164)),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(20)),c=f(n(1336)),p=n(1393),d=f(n(1394));function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=o.default.bind(c.default),x={onPageChange:r.default.func.isRequired,selectedPage:r.default.number,totalCount:r.default.number,itemCountPerPage:r.default.number,intl:i.intlShape.isRequired},O=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this;var o=(n=!(r=b(t).call(this,e))||"object"!==g(r)&&"function"!=typeof r?y(a):r).props,i=o.selectedPage,l=o.totalCount,s=o.itemCountPerPage;return n.state={selectedPage:i&&l?i:void 0,pageSequence:i&&l?(0,p.pageSet)(i,(0,p.calculatePages)(l,s)):void 0,showReducedPaginator:!1},n.handlePageChange=n.handlePageChange.bind(y(n)),n.hasNavContext=n.hasNavContext.bind(y(n)),n.buildPageButtons=n.buildPageButtons.bind(y(n)),n.reducedPaginator=n.reducedPaginator.bind(y(n)),n.setPaginator=n.setPaginator.bind(y(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(r=[{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"handlePageChange",value:function(e){var t=this;return function(n){return n.nativeEvent.keyCode!==u.KEY_RETURN&&n.nativeEvent.keyCode!==u.KEY_SPACE||n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),t.setState({selectedPage:e,pageSequence:(0,p.pageSet)(e,(0,p.calculatePages)(t.props.totalCount,t.props.itemCountPerPage))}),!1)}}},{key:"buildPageButtons",value:function(e,t){var n=this.props.intl,r=this.state,o=r.pageSequence,i=r.selectedPage,l=[];return o.forEach((function(r){var o=v(["nav-link",r===i?"is-selected":null]);r>e||l.push(a.default.createElement(d.default,{ariaLabel:n.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:r}),ariaCurrent:r===i,className:o,tabIndex:r===i?"-1":"0",key:"pageButton_".concat(r),onClick:t(r),onKeyDown:t(r)},r))})),l}},{key:"hasNavContext",value:function(){return this.props.totalCount&&this.props.itemCountPerPage}},{key:"defaultPaginator",value:function(){var e=this.props.intl,t=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.state.selectedPage,r=1===n?1:n-1,o=n===t?t:n+1;return a.default.createElement("div",{className:v(["paginator",!this.hasNavContext()&&"pageless"])},this.hasNavContext()&&a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:e.formatMessage({id:"Terra.paginator.first"}),className:v(["nav-link","left-controls",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},e.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:e.formatMessage({id:"Terra.paginator.previous"}),className:v(["nav-link","left-controls","previous",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(r),onKeyDown:this.handlePageChange(r)},a.default.createElement("span",{className:v("icon")}),e.formatMessage({id:"Terra.paginator.previous"})),this.hasNavContext()&&this.buildPageButtons(t,this.handlePageChange),a.default.createElement(d.default,{ariaDisabled:n===t,ariaLabel:e.formatMessage({id:"Terra.paginator.next"}),className:v(["nav-link","right-controls","next",n===t&&"is-disabled"]),disabled:n===t,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},e.formatMessage({id:"Terra.paginator.next"}),a.default.createElement("span",{className:v("icon")})),this.hasNavContext()&&a.default.createElement(d.default,{ariaDisabled:n===t,ariaLabel:e.formatMessage({id:"Terra.paginator.last"}),className:v(["nav-link","right-controls",n===t&&"is-disabled"]),disabled:n===t,onClick:this.handlePageChange(t),onKeyDown:this.handlePageChange(t)},e.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=this.props.intl,t=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.state.selectedPage,r=1===n?1:n-1,o=n===t?t:n+1;return a.default.createElement("div",{className:v(["paginator",!this.hasNavContext()&&"pageless"]),role:"navigation","aria-label":"pagination"},this.hasNavContext()&&a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:e.formatMessage({id:"Terra.paginator.first"}),className:v(["nav-link","left-controls",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},e.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:e.formatMessage({id:"Terra.paginator.previous"}),className:v(["nav-link","left-controls","previous","icon-only",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(r),onKeyDown:this.handlePageChange(r)},a.default.createElement(s.default,{text:e.formatMessage({id:"Terra.paginator.previous"})}),a.default.createElement("span",{className:v("icon")})),this.hasNavContext()&&e.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),a.default.createElement(d.default,{ariaDisabled:n===t,ariaLabel:e.formatMessage({id:"Terra.paginator.next"}),className:v(["nav-link","right-controls","next","icon-only",n===t&&"is-disabled"]),disabled:n===t,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},a.default.createElement(s.default,{text:e.formatMessage({id:"Terra.paginator.next"})}),a.default.createElement("span",{className:v("icon")})),this.hasNavContext()&&a.default.createElement(d.default,{ariaDisabled:n===t,ariaLabel:e.formatMessage({id:"Terra.paginator.last"}),className:v(["nav-link","right-controls",n===t&&"is-disabled"]),disabled:n===t,onClick:this.handlePageChange(t),onKeyDown:this.handlePageChange(t)},e.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return a.default.createElement(l.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&h(n.prototype,r),o&&h(n,o),t}(a.default.Component);O.propTypes=x;var j=(0,i.injectIntl)(O);t.default=j},2789:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),r=s(n(1204)),o=s(n(1603)),i=s(n(4)),l=s(n(1395));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=i.default.bind(l.default),g=function(){return function(e,t){for(var n=[],r=0;r<t;r+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},h=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=p(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?d(a):r).state={content:g(),currentPage:1},n.changePages=n.changePages.bind(d(n)),n}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(i=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return a.default.createElement("div",{className:f("paginator-wrapper")},a.default.createElement(r.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(o.default,{onPageChange:this.changePages,selectedPage:1,totalCount:450,itemCountPerPage:10})},this.state.content))}}])&&c(n.prototype,i),l&&c(n,l),t}(a.default.Component);t.default=h},2790:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),r=s(n(1204)),o=s(n(1603)),i=s(n(4)),l=s(n(1395));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=i.default.bind(l.default),g=function(){return function(e,t){for(var n=[],r=0;r<t;r+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=p(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?d(r):o).state={content:a.default.createElement("h2",null,"Welcome!"),currentPage:1},n.changePages=n.changePages.bind(d(n)),n}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(i=[{key:"changePages",value:function(e){var t="next"===e?this.state.currentPage+1:this.state.currentPage-1;t>=5?this.setState({content:a.default.createElement("h2",null,"No more pages..."),currentPage:5}):t<=1?this.setState({content:a.default.createElement("h2",null,"Welcome!"),currentPage:1}):this.setState({content:g(),currentPage:t})}},{key:"render",value:function(){return a.default.createElement("div",{className:f("paginator-wrapper")},a.default.createElement(r.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(o.default,{onPageChange:this.changePages})},this.state.content))}}])&&c(n.prototype,i),l&&c(n,l),t}(a.default.Component);t.default=h},3244:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(0),r=n.n(a),o=n(354),i=n(1205),l=n(2789),s=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function d(e){var t=e.components,n=c(e,["components"]);return Object(o.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Paginator from 'terra-paginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\nPage\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<Paginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n\n")))}d.isMDXComponent=!0;var m=n(994),f=n.n(m),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(f.a,{title:t||"Paginator Example",description:n,example:r.a.createElement(s.a,null),exampleSrc:r.a.createElement(d,null),isExpanded:a})},h=n(2790),b=n.n(h);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v={};function x(e){var t=e.components,n=P(e,["components"]);return Object(o.mdx)("wrapper",y({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",y({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Paginator from 'terra-paginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst maxPages = 5;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorNoPagesExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: <h2>Welcome!</h2>,\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(direction) {\n    const index = direction === 'next' ? this.state.currentPage + 1 : this.state.currentPage - 1;\n\n    if (index >= maxPages) {\n      this.setState({ content: <h2>No more pages...</h2>, currentPage: maxPages });\n    } else if (index <= 1) {\n      this.setState({ content: <h2>Welcome!</h2>, currentPage: 1 });\n    } else {\n      this.setState({ content: buildPage(), currentPage: index });\n    }\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\nPage\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<Paginator onPageChange={this.changePages} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorNoPagesExample;\n\n")))}x.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(f.a,{title:t||"Paginator No Pages Example",description:n,example:r.a.createElement(b.a,null),exampleSrc:r.a.createElement(x,null),isExpanded:a})},j=n(997),C=n.n(j);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E=function(){return Object(o.mdx)(C.a,{rows:[{name:"onPageChange",type:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",w({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",w({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when a navigation element is selected."))}return t.isMDXComponent=!0,t({})}},{name:"selectedPage",type:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",w({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",w({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The active/selected page. Used to set the default selected page or maintain selection across renders.\nRequired when using totalCount and itemCountPerPage."))}return t.isMDXComponent=!0,t({})}},{name:"totalCount",type:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",w({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",w({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of all items being paginated.\nRequired when using itemCountPerPage and selectedPage."))}return t.isMDXComponent=!0,t({})}},{name:"itemCountPerPage",type:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",w({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",w({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of items per page.\nRequired when using selectedPage and totalCount."))}return t.isMDXComponent=!0,t({})}}]})};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S={};function k(e){var t=e.components,n=D(e,["components"]);return Object(o.mdx)("wrapper",M({},S,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-paginator"},"Terra Paginator"),Object(o.mdx)("p",null,"Standard paginator to be used for data sets of known and unknown size. Provides first, last, previous, next, and paged functionality."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",M({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",M({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",M({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"react-intl"),Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"^2.8.0")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"import Paginator from 'terra-paginator';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",M({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",M({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",M({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("p",null,Object(o.mdx)("a",M({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-paginator"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(g,{mdxType:"PaginatorExample"}),Object(o.mdx)(O,{title:"Paginator Example Without Pages",mdxType:"PaginatorNoPagesExample"}),Object(o.mdx)("h2",{id:"paginator-props"},"Paginator Props"),Object(o.mdx)(E,{mdxType:"PaginatorPropsTable"}))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=211-c8b4dabb960c927ef474.js.map