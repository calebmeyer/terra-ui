(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1024:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e(0)),i=a(e(2)),l=a(e(4)),r=a(e(1025));function a(n){return n&&n.__esModule?n:{default:n}}var c=l.default.bind(r.default),u={text:i.default.string},s=function(n){var t=n.text;return o.default.createElement("div",{className:c("content-cell")},t)};s.propTypes=u;var d=s;t.default=d},1025:function(n,t,e){n.exports={"content-cell":"ContentCellLayout__content-cell___1l9SY"}},1026:function(n,t,e){n.exports={"data-grid-basic":"Datagrid-module__data-grid-basic___2jvhh","data-grid-row-style":"Datagrid-module__data-grid-row-style___1eRFT","data-grid-paging":"Datagrid-module__data-grid-paging___3PtUm","loading-overlay":"Datagrid-module__loading-overlay___aAZco"}},1935:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e(0)),i=u(e(60)),l=u(e(1203)),r=u(e(4)),a=u(e(1024)),c=u(e(1026));function u(n){return n&&n.__esModule?n:{default:n}}function s(n){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function d(n){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function m(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function f(n,t,e){return t&&p(n.prototype,t),e&&p(n,e),n}function b(n,t){return(b=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var y=r.default.bind(c.default),C=[{id:"Column-0",width:200,text:"Column 0"},{id:"Column-1",width:200,text:"Column 1"},{id:"Column-2",width:200,text:"Column 2"}],w=[{id:"Column-3",width:200,text:"Column 3"},{id:"Column-4",width:200,text:"Column 4"},{id:"Column-5",width:200,text:"Column 5"},{id:"Column-6",width:200,text:"Column 6"},{id:"Column-7",width:200,text:"Column 7"},{id:"Column-8",width:200,text:"Column 8"},{id:"Column-9",width:200,text:"Column 9"}],h=function(n){function t(n){var e,o,i;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(e=!(i=d(t).call(this,n))||"object"!==s(i)&&"function"!=typeof i?m(o):i).buildSection=e.buildSection.bind(m(e)),e.state={collapsedSectionId:void 0},e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&b(n,t)}(t,n),f(t,null,[{key:"buildRows",value:function(n,t){return new Array(t).fill().map((function(t,e){return{id:"".concat(n,"-Row").concat(e),cells:new Array(10).fill(0).map((function(n,t){return"Column-".concat(t)})).map((function(n){return{columnId:n,component:o.default.createElement(a.default,{text:"Row-".concat(e,", Column ").concat(n)})}}))}}))}}]),f(t,[{key:"buildSection",value:function(n,e,l){return{id:n,text:e,endAccessory:"section_1"===n?o.default.createElement("span",null,o.default.createElement(i.default,{text:"Button 1",isCompact:!0,"data-accessible-data-grid-content":!0}),o.default.createElement(i.default,{text:"Button 2",isCompact:!0,"data-accessible-data-grid-content":!0})):null,isCollapsible:"section_0"===n,isCollapsed:this.state.collapsedSectionId===n,rows:t.buildRows(n,l)}}},{key:"render",value:function(){var n=this;return o.default.createElement("div",{className:y("data-grid-basic")},o.default.createElement(l.default,{id:"subsections-example",pinnedColumns:C,overflowColumns:w,sections:[this.buildSection("section_0","Section 0",15),this.buildSection("section_1","Section 1",15),this.buildSection("section_2","Section 2",15)],onRequestSectionCollapse:function(t){n.state.collapsedSectionId===t?n.setState({collapsedSectionId:void 0}):n.setState({collapsedSectionId:t})},fill:!0}))}}]),t}(o.default.Component);t.default=h},3291:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return w}));var o=e(0),i=e.n(o),l=e(354),r=e(1935),a=e.n(r);function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function u(n,t){if(null==n)return{};var e,o,i=function(n,t){if(null==n)return{};var e,o,i={},l=Object.keys(n);for(o=0;o<l.length;o++)e=l[o],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)e=l[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var s={};function d(n){var t=n.components,e=u(n,["components"]);return Object(l.mdx)("wrapper",c({},s,e,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst pinnedColumns = [\n  {\n    id: 'Column-0',\n    width: 200,\n    text: 'Column 0',\n  },\n  {\n    id: 'Column-1',\n    width: 200,\n    text: 'Column 1',\n  },\n  {\n    id: 'Column-2',\n    width: 200,\n    text: 'Column 2',\n  },\n];\n\nconst overflowColumns = [\n  {\n    id: 'Column-3',\n    width: 200,\n    text: 'Column 3',\n  },\n  {\n    id: 'Column-4',\n    width: 200,\n    text: 'Column 4',\n  },\n  {\n    id: 'Column-5',\n    width: 200,\n    text: 'Column 5',\n  },\n  {\n    id: 'Column-6',\n    width: 200,\n    text: 'Column 6',\n  },\n  {\n    id: 'Column-7',\n    width: 200,\n    text: 'Column 7',\n  },\n  {\n    id: 'Column-8',\n    width: 200,\n    text: 'Column 8',\n  },\n  {\n    id: 'Column-9',\n    width: 200,\n    text: 'Column 9',\n  },\n];\n\nclass DatagridWithSubsections extends React.Component {\n  static buildRows(sectionId, num) {\n    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionId}-Row${rowIndex}`,\n      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({\n        columnId: columnKey,\n        component: <ContentCellLayout text={`Row-${rowIndex}, Column ${columnKey}`} />,\n      })),\n    }));\n\n    return rows;\n  }\n\n  constructor(props) {\n    super(props);\n\n    this.buildSection = this.buildSection.bind(this);\n\n    this.state = {\n      collapsedSectionId: undefined,\n    };\n  }\n\n  buildSection(sectionId, sectionName, numberOfRows) {\n    return {\n      id: sectionId,\n      text: sectionName,\n      endAccessory: (sectionId === 'section_1') ? (\n        <span>\n          <Button text=\"Button 1\" isCompact data-accessible-data-grid-content />\n          <Button text=\"Button 2\" isCompact data-accessible-data-grid-content />\n        </span>\n      ) : null,\n      isCollapsible: sectionId === 'section_0',\n      isCollapsed: this.state.collapsedSectionId === sectionId,\n      rows: DatagridWithSubsections.buildRows(sectionId, numberOfRows),\n    };\n  }\n\n  render() {\n    return (\n      <div className={cx('data-grid-basic')}>\n        <DataGrid\n          id=\"subsections-example\"\n          pinnedColumns={pinnedColumns}\n          overflowColumns={overflowColumns}\n          sections={[\n            this.buildSection('section_0', 'Section 0', 15),\n            this.buildSection('section_1', 'Section 1', 15),\n            this.buildSection('section_2', 'Section 2', 15),\n          ]}\n          onRequestSectionCollapse={(sectionId) => {\n            if (this.state.collapsedSectionId === sectionId) {\n              this.setState({ collapsedSectionId: undefined });\n            } else {\n              this.setState({ collapsedSectionId: sectionId });\n            }\n          }}\n          fill\n        />\n      </div>\n    );\n  }\n}\n\nexport default DatagridWithSubsections;\n\n")))}d.isMDXComponent=!0;var m=e(994),p=e.n(m),f=function(n){var t=n.title,e=n.description,o=n.isExpanded;return i.a.createElement(p.a,{title:t||"Datagrid With Subsections",description:e,example:i.a.createElement(a.a,null),exampleSrc:i.a.createElement(d,null),isExpanded:o})};function b(){return(b=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}function y(n,t){if(null==n)return{};var e,o,i=function(n,t){if(null==n)return{};var e,o,i={},l=Object.keys(n);for(o=0;o<l.length;o++)e=l[o],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)e=l[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var C={};function w(n){var t=n.components,e=y(n,["components"]);return Object(l.mdx)("wrapper",b({},C,e,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(f,{description:"This example features multiple subsections. Section 0 is collapsible. \nThe header for Section 1 contains keyboard-accessible content in its endAccessory region.",mdxType:"DatagridWithSubsections"}))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=205-5b3f66f6fc3d5583324a.js.map