(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1030:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Item 0-0"},{key:"unique-0-1",title:"Item 0-1"},{key:"unique-0-2",title:"Item 0-2"},{key:"unique-0-3",title:"Item 0-3"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Item 1-0"},{key:"unique-1-1",title:"Item 1-1"},{key:"unique-1-2",title:"Item 1-2"},{key:"unique-1-3",title:"Item 1-3"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Item 2-0"},{key:"unique-2-1",title:"Item 2-1"},{key:"unique-2-2",title:"Item 2-2"},{key:"unique-2-3",title:"Item 2-3"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Item 3-0"},{key:"unique-3-1",title:"Item 3-1"},{key:"unique-3-2",title:"Item 3-2"},{key:"unique-3-3",title:"Item 3-3"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Item 4-0"},{key:"unique-4-1",title:"Item 4-1"},{key:"unique-4-2",title:"Item 4-2"},{key:"unique-4-3",title:"Item 4-3"}]}];t.default=l},1504:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{title:"Section 0",key:"unique-key-0",childItems:[{key:"unique-0-0",cells:[{key:"unique-0-0-0",title:"Item 0-0-0"},{key:"unique-0-0-1",title:"Item 0-0-1"},{key:"unique-0-0-2",title:"Item 0-0-2"}]},{key:"unique-0-1",cells:[{key:"unique-0-1-0",title:"Item 0-1-0"},{key:"unique-0-1-1",title:"Item 0-1-1"},{key:"unique-0-1-2",title:"Item 0-1-2"}]},{key:"unique-0-2",cells:[{key:"unique-0-2-0",title:"Item 0-2-0"},{key:"unique-0-2-1",title:"Item 0-2-1"},{key:"unique-0-2-2",title:"Item 0-2-2"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{key:"unique-1-0",cells:[{key:"unique-1-0-0",title:"Item 1-0-0"},{key:"unique-1-0-1",title:"Item 1-0-1"},{key:"unique-1-0-2",title:"Item 1-0-2"}]},{key:"unique-1-1",cells:[{key:"unique-1-1-0",title:"Item 1-1-0"},{key:"unique-1-1-1",title:"Item 1-1-1"},{key:"unique-1-1-2",title:"Item 1-1-2"}]},{key:"unique-1-2",cells:[{key:"unique-1-2-0",title:"Item 1-2-0"},{key:"unique-1-2-1",title:"Item 1-2-1"},{key:"unique-1-2-2",title:"Item 1-2-2"}]}]}];t.default=l},2952:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),i=a(n(1011)),r=a(n(1030));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(){return l.default.createElement(i.default,{summaryId:"example-striped-table",summary:"This table shows an implementation of striped table.",numberOfColumns:4,cellPaddingStyle:"standard",dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"toggle-0",children:"Column 0"},{key:"cell-1",id:"toggle-1",children:"Column 1"},{key:"cell-2",id:"toggle-2",children:"Column 2"},{key:"cell-3",id:"toggle-3",children:"Column 3"}]},bodyData:[{rows:(e=r.default,e.map((function(e,t){return function(e,t){return{key:e.key,isStriped:t%2!=0,cells:(n=e.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var n}(e,t)})))}]});var e};t.default=o},2953:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),i=a(n(1011)),r=a(n(1504));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(){return l.default.createElement(i.default,{summaryId:"example-striped-section-table",summary:"This table shows an implementation of striped section table.",numberOfColumns:3,cellPaddingStyle:"standard",dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"toggle-10",children:"Column 0"},{key:"cell-1",id:"toggle-11",children:"Column 1"},{key:"cell-2",id:"toggle-12",children:"Column 2"}]},bodyData:(e=r.default,e.map((function(e){return{sectionHeader:{key:(t=e).key,id:"section-".concat(t.key),title:t.title},rows:t.childItems.map((function(e,t){return function(e,t){return{key:e.key,isStriped:t%2!=0,cells:(n=e.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var n}(e,t)}))};var t})))});var e};t.default=o},3252:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var l=n(0),i=n.n(l),r=n(354),a=n(2952),o=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d={};function s(e){var t=e.components,n=u(e,["components"]);return Object(r.mdx)("wrapper",c({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = (rowData, index) => (\n  {\n    key: rowData.key,\n    isStriped: index % 2 !== 0,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createRows = data => data.map((childItem, index) => createRow(childItem, index));\n\nconst StripedTable = () => (\n  <Table\n    summaryId=\"example-striped-table\"\n    summary=\"This table shows an implementation of striped table.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n        { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n        { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n        { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n\nexport default StripedTable;\n\n")))}s.isMDXComponent=!0;var m=n(994),p=n.n(m),y=function(e){var t=e.title,n=e.description,l=e.isExpanded;return i.a.createElement(p.a,{title:t||"Striped Table",description:n,example:i.a.createElement(o.a,null),exampleSrc:i.a.createElement(s,null),isExpanded:l})},f=n(2953),k=n.n(f);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g={};function w(e){var t=e.components,n=h(e,["components"]);return Object(r.mdx)("wrapper",b({},g,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-section';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = (rowData, index) => (\n  {\n    key: rowData.key,\n    isStriped: index % 2 !== 0,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createSection = sectionData => (\n  {\n    sectionHeader: {\n      key: sectionData.key,\n      id: `section-${sectionData.key}`,\n      title: sectionData.title,\n    },\n    rows: sectionData.childItems.map((childItem, index) => createRow(childItem, index)),\n  }\n);\n\nconst createSections = data => data.map(childItem => createSection(childItem));\n\nconst StripedTableSection = () => (\n  <Table\n    summaryId=\"example-striped-section-table\"\n    summary=\"This table shows an implementation of striped section table.\"\n    numberOfColumns={3}\n    cellPaddingStyle=\"standard\"\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'toggle-10', children: 'Column 0' },\n        { key: 'cell-1', id: 'toggle-11', children: 'Column 1' },\n        { key: 'cell-2', id: 'toggle-12', children: 'Column 2' },\n      ],\n    }}\n    bodyData={createSections(mockData)}\n  />\n);\n\nexport default StripedTableSection;\n\n")))}w.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,l=e.isExpanded;return i.a.createElement(p.a,{title:t||"Striped Table Section",description:n,example:i.a.createElement(k.a,null),exampleSrc:i.a.createElement(w,null),isExpanded:l})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var v={};function q(e){var t=e.components,n=I(e,["components"]);return Object(r.mdx)("wrapper",O({},v,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"terra-table---implementing-a-striped-table"},"Terra Table - Implementing a Striped Table"),Object(r.mdx)("p",null,"The following guide shows how to cleanly implement a striped Table. For the table implementation, the responsibility of striping is on the Row itself."),Object(r.mdx)("h2",{id:"standard-striped-function"},"Standard Striped Function"),Object(r.mdx)("p",null,"When striping the table rows the functionality is the same if you are yielding a flat list of items and a section's items.  When mapping your data to table rows capture the index of each row pass it to your createRow method."),Object(r.mdx)("pre",null,Object(r.mdx)("code",O({parentName:"pre"},{className:"language-diff"}),"+ const createRows = data => data.map((childItem, index) => createRow(childItem, index));\n")),Object(r.mdx)("p",null,"Next within our newly created method for row creation we want to set the striping pattern by the UX approved pattern, on odd array indexed items. This pattern is true for both a flat list and within each section. To accomplish this we check whether or not index modulus 2 yields a non zero value, this will give us the odd values rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",O({parentName:"pre"},{className:"language-diff"}),"+ const createRow = (rowData, index) => (\n+   {\n+     key: rowData.key,\n+     isStriped: index % 2 !== 0,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n")),Object(r.mdx)("p",null,"We can then implement our additional static methods to populate the cell data."),Object(r.mdx)("pre",null,Object(r.mdx)("code",O({parentName:"pre"},{className:"language-diff"}),"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(r.mdx)("p",null,"And finally we call our create row creation method."),Object(r.mdx)("pre",null,Object(r.mdx)("code",O({parentName:"pre"},{className:"language-diff"}),"+ const StripedTable = () => (\n+   <Table\n+     summaryId=\"example-striped-table\"\n+     summary=\"This table shows an implementation of striped table.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n+ );\n")),Object(r.mdx)("p",null,"Using these steps we get the following examples:"),Object(r.mdx)(y,{mdxType:"StripedTable"}),Object(r.mdx)(x,{mdxType:"StripedTableSection"}))}q.isMDXComponent=!0}}]);
//# sourceMappingURL=353-4d1c1c4d3866b3e06793.js.map