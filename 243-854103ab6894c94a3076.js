(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{1024:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(0)),l=r(t(2)),i=r(t(4)),s=r(t(1025));function r(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(s.default),c={text:l.default.string},a=function(e){var n=e.text;return o.default.createElement("div",{className:u("content-cell")},n)};a.propTypes=c;var d=a;n.default=d},1025:function(e,n,t){e.exports={"content-cell":"ContentCellLayout__content-cell___1l9SY"}},1942:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=s(t(0)),l=s(t(1203)),i=s(t(1024));function s(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var C=function(e){function n(e){var t,o,l;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,(t=!(l=m(n).call(this,e))||"object"!==r(l)&&"function"!=typeof l?p(o):l).buildSection=t.buildSection.bind(p(t)),t.buildRows=t.buildRows.bind(p(t)),t.state={selectedRow:void 0,selectedCell:void 0,columns:{"Column-0":{id:"Column-0",width:200,text:"Column 0",isResizable:!0,isSelectable:!0},"Column-1":{id:"Column-1",width:250,text:"Column 1",isResizable:!0,isSelectable:!0},"Column-2":{id:"Column-2",width:200,text:"Column 2",isResizable:!0,isSelectable:!0},"Column-3":{id:"Column-3",width:200,text:"Column 3",isResizable:!0,isSelectable:!0},"Column-4":{id:"Column-4",width:200,text:"Column 4",isResizable:!0,isSelectable:!0},"Column-5":{id:"Column-5",width:200,text:"Column 5",isResizable:!0,isSelectable:!0},"Column-6":{id:"Column-6",width:200,text:"Column 6",isResizable:!0,isSelectable:!0},"Column-7":{id:"Column-7",width:200,text:"Column 7",isResizable:!0,isSelectable:!0},"Column-8":{id:"Column-8",width:200,text:"Column 8",isResizable:!0,isSelectable:!0}},sortedColumnId:"Column-0",sortedColumnDirection:"ascending"},t}var t,s,u;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,e),t=n,(s=[{key:"buildRows",value:function(e,n){var t=this,l=new Array(n).fill().map((function(n,l){return{id:"Row-".concat(l),isSelectable:!0,isSelected:t.state.selectedRow&&t.state.selectedRow.sectionId===e&&t.state.selectedRow.rowId==="Row-".concat(l),cells:new Array(9).fill(0).map((function(e,n){return"Column-".concat(n)})).map((function(n){return{columnId:n,isSelectable:!0,isSelected:t.state.selectedCell&&t.state.selectedCell.sectionId===e&&t.state.selectedCell.rowId==="Row-".concat(l)&&t.state.selectedCell.columnId===n,component:o.default.createElement(i.default,{text:"Row-".concat(l,", ").concat(n)})}}))}}));return this.state.sortedColumnId&&"ascending"===this.state.sortedColumnDirection?l:l.reverse()}},{key:"buildSection",value:function(e,n,t){return{id:e,text:n,rows:this.buildRows(e,t),isCollapsible:"Section-0"===e,isCollapsed:e===this.state.collapsedSectionId}}},{key:"render",value:function(){var e=this,n=this.state.columns;return o.default.createElement(l.default,{id:"without-fill",pinnedColumns:[n["Column-0"],n["Column-1"],n["Column-2"]],overflowColumns:[n["Column-3"],n["Column-4"],n["Column-5"],n["Column-6"],n["Column-7"],n["Column-8"]],sections:[this.buildSection("Section-0","Section 0",15),this.buildSection("Section-1","Section 1",15)],onColumnSelect:function(n){var t={},o=c({},e.state.columns[n]);if(o.sortIndicator="ascending"===o.sortIndicator?"descending":"ascending",t["".concat(n)]=o,n!==e.state.sortedColumnId){var l=c({},e.state.columns[e.state.sortedColumnId]);l&&(l.sortIndicator=void 0,t["".concat(e.state.sortedColumnId)]=l)}e.setState((function(e){return{columns:c({},e.columns,{},t),sortedColumnId:n,sortedColumnDirection:o.sortIndicator}}))},onCellSelect:function(n,t,o){e.setState({selectedRow:void 0,selectedCell:{sectionId:n,rowId:t,columnId:o}})},hasSelectableRows:!0,onRowSelect:function(n,t){e.setState({selectedCell:void 0,selectedRow:{sectionId:n,rowId:t}})},hasResizableColumns:!0,onRequestColumnResize:function(n,t){var o=c({},e.state.columns[n]);o.width=Math.max(t,50),e.setState((function(e){return{columns:c({},e.columns,a({},"".concat(n),o))}}))},onRequestSectionCollapse:function(n){e.state.collapsedSectionId===n?e.setState({collapsedSectionId:void 0}):e.setState({collapsedSectionId:n})}})}}])&&d(t.prototype,s),u&&d(t,u),n}(o.default.Component);n.default=C},3286:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var o=t(0),l=t.n(o),i=t(354),s=t(1942),r=t.n(s);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a={};function d(e){var n=e.components,t=c(e,["components"]);return Object(i.mdx)("wrapper",u({},a,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\n\nimport ContentCellLayout from './ContentCellLayout';\n\nclass DatagridWithoutFill extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.buildSection = this.buildSection.bind(this);\n    this.buildRows = this.buildRows.bind(this);\n\n    this.state = {\n      selectedRow: undefined,\n      selectedCell: undefined,\n      columns: {\n        'Column-0': {\n          id: 'Column-0',\n          width: 200,\n          text: 'Column 0',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-1': {\n          id: 'Column-1',\n          width: 250,\n          text: 'Column 1',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-2': {\n          id: 'Column-2',\n          width: 200,\n          text: 'Column 2',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-3': {\n          id: 'Column-3',\n          width: 200,\n          text: 'Column 3',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-4': {\n          id: 'Column-4',\n          width: 200,\n          text: 'Column 4',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-5': {\n          id: 'Column-5',\n          width: 200,\n          text: 'Column 5',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-6': {\n          id: 'Column-6',\n          width: 200,\n          text: 'Column 6',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-7': {\n          id: 'Column-7',\n          width: 200,\n          text: 'Column 7',\n          isResizable: true,\n          isSelectable: true,\n        },\n        'Column-8': {\n          id: 'Column-8',\n          width: 200,\n          text: 'Column 8',\n          isResizable: true,\n          isSelectable: true,\n        },\n      },\n      sortedColumnId: 'Column-0',\n      sortedColumnDirection: 'ascending',\n    };\n  }\n\n  buildRows(sectionId, num) {\n    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({\n      id: `Row-${rowIndex}`,\n      isSelectable: true,\n      isSelected: this.state.selectedRow && this.state.selectedRow.sectionId === sectionId && this.state.selectedRow.rowId === `Row-${rowIndex}`,\n      cells: ((new Array(9).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({\n        columnId: columnKey,\n        isSelectable: true,\n        isSelected: this.state.selectedCell && this.state.selectedCell.sectionId === sectionId && this.state.selectedCell.rowId === `Row-${rowIndex}` && this.state.selectedCell.columnId === columnKey,\n        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,\n      })),\n    }));\n\n    return this.state.sortedColumnId && this.state.sortedColumnDirection === 'ascending' ? rows : rows.reverse();\n  }\n\n  buildSection(sectionId, sectionName, numberOfRows) {\n    return {\n      id: sectionId,\n      text: sectionName,\n      rows: this.buildRows(sectionId, numberOfRows),\n      isCollapsible: sectionId === 'Section-0',\n      isCollapsed: sectionId === this.state.collapsedSectionId,\n    };\n  }\n\n  render() {\n    const { columns } = this.state;\n\n    return (\n      <DataGrid\n        id=\"without-fill\"\n        pinnedColumns={[\n          columns['Column-0'],\n          columns['Column-1'],\n          columns['Column-2'],\n        ]}\n        overflowColumns={[\n          columns['Column-3'],\n          columns['Column-4'],\n          columns['Column-5'],\n          columns['Column-6'],\n          columns['Column-7'],\n          columns['Column-8'],\n        ]}\n        sections={[\n          this.buildSection('Section-0', 'Section 0', 15),\n          this.buildSection('Section-1', 'Section 1', 15),\n        ]}\n        onColumnSelect={(columnId) => {\n          const newColumns = {};\n\n          const columnToSort = { ...this.state.columns[columnId] };\n          columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n          newColumns[`${columnId}`] = columnToSort;\n\n          if (columnId !== this.state.sortedColumnId) {\n            const previouslySortedColumn = { ...this.state.columns[this.state.sortedColumnId] };\n            if (previouslySortedColumn) {\n              previouslySortedColumn.sortIndicator = undefined;\n              newColumns[`${this.state.sortedColumnId}`] = previouslySortedColumn;\n            }\n          }\n\n          this.setState(prevState => ({\n            columns: { ...prevState.columns, ...newColumns },\n            sortedColumnId: columnId,\n            sortedColumnDirection: columnToSort.sortIndicator,\n          }));\n        }}\n        onCellSelect={(sectionId, rowId, columnId) => {\n          this.setState({\n            selectedRow: undefined,\n            selectedCell: {\n              sectionId,\n              rowId,\n              columnId,\n            },\n          });\n        }}\n        hasSelectableRows\n        onRowSelect={(sectionId, rowId) => {\n          this.setState({\n            selectedCell: undefined,\n            selectedRow: {\n              sectionId,\n              rowId,\n            },\n          });\n        }}\n        hasResizableColumns\n        onRequestColumnResize={(columnId, width) => {\n          const columnToUpdate = { ...this.state.columns[columnId] };\n          columnToUpdate.width = Math.max(width, 50);\n          this.setState(prevState => (\n            { columns: { ...prevState.columns, [`${columnId}`]: columnToUpdate } }\n          ));\n        }}\n        onRequestSectionCollapse={(sectionId) => {\n          if (this.state.collapsedSectionId === sectionId) {\n            this.setState({ collapsedSectionId: undefined });\n          } else {\n            this.setState({ collapsedSectionId: sectionId });\n          }\n        }}\n      />\n    );\n  }\n}\n\nexport default DatagridWithoutFill;\n\n")))}d.isMDXComponent=!0;var m=t(994),p=t.n(m),f=function(e){var n=e.title,t=e.description,o=e.isExpanded;return l.a.createElement(p.a,{title:n||"Datagrid Without Fill",description:t,example:l.a.createElement(r.a,null),exampleSrc:l.a.createElement(d,null),isExpanded:o})};function C(){return(C=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var w={};function h(e){var n=e.components,t=b(e,["components"]);return Object(i.mdx)("wrapper",C({},w,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)(f,{description:"This example does not set the fill property, \nallowing the DataGrid to layout with its natural block styling. \nMarkup adjustments are made to improve overall performance.",mdxType:"DatagridWithoutFill"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=243-854103ab6894c94a3076.js.map