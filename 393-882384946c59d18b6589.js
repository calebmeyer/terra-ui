(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{2950:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=s(n(1011)),l=s(n(2951));function s(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(a=(l=s.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=["column-0","column-1","column-2"],m=function(){var e,t=i((0,r.useState)({key:d[0],sortDesc:!1}),2),n=t[0],a=t[1],s=function(e,t){e.preventDefault(),n.key!==t.key?a({key:t.key,sortDesc:!1}):a({key:t.key,sortDesc:!n.sortDesc})},c=function(e,t){return{key:e,id:"header-".concat(e),metaData:{key:e},onSortAction:s,isSortDesc:n.key===e&&n.sortDesc,isSortActive:n.key===e,children:t}};return r.default.createElement(o.default,{summaryId:"example-sorted-table",summary:"This table shows an implementation of sorted table.",numberOfColumns:3,cellPaddingStyle:"standard",headerData:{cells:[c(d[0],"Breakfast"),c(d[1],"Animals"),c(d[2],"Flatware")]},bodyData:[{rows:(e=l.default,function(e,t){if(!t)return e;var n=u([],e);return n.sort((function(e,n){var a=e.cells[d.indexOf(t.key)].title.toLowerCase(),r=n.cells[d.indexOf(t.key)].title.toLowerCase();return a<r?-1:a>r?1:0})),t.sortDesc?n.reverse():n}(e,n).map((function(e){return{key:(t=e).key,cells:(n=t.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var t,n})))}]})};t.default=m},2951:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{key:"unique-0",cells:[{key:"unique-0-0",title:"Pancakes"},{key:"unique-0-1",title:"Dogs"},{key:"unique-0-2",title:"Forks"}]},{key:"unique-1",cells:[{key:"unique-1-0",title:"Bacon"},{key:"unique-1-1",title:"Mice"},{key:"unique-1-2",title:"Knives"}]},{key:"unique-2",cells:[{key:"unique-2-0",title:"Waffles"},{key:"unique-2-1",title:"Cats"},{key:"unique-2-2",title:"Chopsticks"}]},{key:"unique-3",cells:[{key:"unique-3-0",title:"Fruit"},{key:"unique-3-1",title:"Sheep"},{key:"unique-3-2",title:"Spoons"}]},{key:"unique-4",cells:[{key:"unique-4-0",title:"Eggs"},{key:"unique-4-1",title:"Pigs"},{key:"unique-4-2",title:"Sporks"}]}];t.default=a},3281:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(0),r=n.n(a),o=n(354),l=n(2950),s=n.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={};function d(e){var t=e.components,n=i(e,["components"]);return Object(o.mdx)("wrapper",c({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React, {\n  useState,\n} from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-sort';\n\nconst columnKeys = ['column-0', 'column-1', 'column-2'];\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = rowData => ({ key: rowData.key, cells: createCellsForRow(rowData.cells) });\n\nconst sortData = (data, sortColumn) => {\n  if (!sortColumn) {\n    return data;\n  }\n\n  const dataCopy = Object.assign([], data);\n  dataCopy.sort((a, b) => {\n    const x = a.cells[columnKeys.indexOf(sortColumn.key)].title.toLowerCase();\n    const y = b.cells[columnKeys.indexOf(sortColumn.key)].title.toLowerCase();\n    if (x < y) { return -1; }\n    if (x > y) { return 1; }\n    return 0;\n  });\n\n  return sortColumn.sortDesc ? dataCopy.reverse() : dataCopy;\n};\n\nconst SortedTable = () => {\n  const [sortColumn, setSortColumn] = useState({ key: columnKeys[0], sortDesc: false });\n\n  const handleSortClick = (event, metaData) => {\n    event.preventDefault();\n    if (sortColumn.key !== metaData.key) {\n      setSortColumn({ key: metaData.key, sortDesc: false });\n    } else {\n      setSortColumn({ key: metaData.key, sortDesc: !sortColumn.sortDesc });\n    }\n  };\n\n  const createRows = (data) => {\n    const sortedData = sortData(data, sortColumn);\n    return sortedData.map(childItem => createRow(childItem));\n  };\n\n  const createHeaderCell = (key, title) => (\n    {\n      key,\n      id: `header-${key}`,\n      metaData: { key },\n      onSortAction: handleSortClick,\n      isSortDesc: sortColumn.key === key ? sortColumn.sortDesc : false,\n      isSortActive: sortColumn.key === key,\n      children: title,\n    }\n  );\n\n  return (\n    <Table\n      summaryId=\"example-sorted-table\"\n      summary=\"This table shows an implementation of sorted table.\"\n      numberOfColumns={3}\n      cellPaddingStyle=\"standard\"\n      headerData={{\n        cells: [\n          createHeaderCell(columnKeys[0], 'Breakfast'),\n          createHeaderCell(columnKeys[1], 'Animals'),\n          createHeaderCell(columnKeys[2], 'Flatware'),\n        ],\n      }}\n      bodyData={[{\n        rows: createRows(mockData),\n      }]}\n    />\n  );\n};\n\nexport default SortedTable;\n\n")))}d.isMDXComponent=!0;var m=n(994),p=n.n(m),y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(p.a,{title:t||"Sorted Table",description:n,example:r.a.createElement(s.a,null),exampleSrc:r.a.createElement(d,null),isExpanded:a})};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h={};function k(e){var t=e.components,n=b(e,["components"]);return Object(o.mdx)("wrapper",f({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"terra-table---implementing-a-sorted-table"},"Terra Table - Implementing a Sorted Table"),Object(o.mdx)("p",null,"As table cell content is dynamic and the types of sorting can vary, consumers need to handle the state of their own sorting. The following guide lays out an example of managing sorting and state within a table implementation. There are further optimizations that can be made given an individual implementation of a data set, but this should serve as a framework for that."),Object(o.mdx)("h2",{id:"state-management"},"State Management"),Object(o.mdx)("p",null,"The state of the sort column needs to be managed for the table in a HOC. In this example we are going to be an object containing a unique key for the column and current sort direction."),Object(o.mdx)("p",null," First defaulting our state to sorting the first column."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const [sortColumn, setSortColumn] = useState({ key: columnKeys[0], sortDesc: false });\n")),Object(o.mdx)("p",null,"Next creating an event handler callback method to pass to the table row's ",Object(o.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each header cell."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+  const handleSortClick = (event, metaData) => {\n\n+  }\n")),Object(o.mdx)("p",null,"As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const handleSortClick = (event, metaData) => {\n+   event.preventDefault();\n  }\n")),Object(o.mdx)("p",null,"In this example only one column will be sorted upon, so we'll need to keep track of which column was selected and the current state of sorting for the column. 3 states of column state will be handled, unsorted, sort ascending, and sort descending. A key was sent with the metaData, but an index could have also been used in an implementation where there is no possibility of the columns being rearranged."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const handleSortClick = (event, metaData) => {\n    event.preventDefault();\n+   if (sortColumn.key !== metaData.key) {\n+     setSortColumn({ key: metaData.key, sortDesc: false });\n+   } else {\n+     setSortColumn({ key: metaData.key, sortDesc: !sortColumn.sortDesc });\n+   }\n  };\n")),Object(o.mdx)("p",null,"Settting state will trigger another render. So in the render method we need generate our head cells with the updated sort props. Each header cell while need a unique key."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const createHeaderCell = (key, title) => (\n+   {\n+     key,\n+     id: `header-${key}`,\n+     children: title,\n+   }\n+ );\n")),Object(o.mdx)("p",null,"Next we need to set up our metaData object with our key value, and attach the ",Object(o.mdx)("inlineCode",{parentName:"p"},"onSortAction")," to our handler."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const createHeaderCell = (key, title) => (\n    {\n      key,\n      id: `header-${key}`,\n+     metaData: { key },\n+     onSortAction: handleSortClick,\n      children: title,\n    }\n  );\n")),Object(o.mdx)("p",null,"Last we need to check if the header cell matches the sortColumn.key in state. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"isSortActive")," prop dictates the visual presence of sorting."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const createHeaderCell = (key, title) => (\n    {\n      key,\n      id: `header-${key}`,\n      metaData: { key },\n      onSortAction: handleSortClick,\n+     isSortDesc: sortColumn.key === key ? sortColumn.sortDesc : false,\n+     isSortActive: sortColumn.key === key,\n      children: title,\n    }\n  );\n")),Object(o.mdx)("p",null,"In this example a simple object sort parses the data, followed by a check for reversal."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const sortData = (data, sortColumn) => {\n+   if (!sortColumn) {\n+     return data;\n+   }\n+\n+   const dataCopy = Object.assign([], data);\n+   dataCopy.sort((a, b) => {\n+    const x = a.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();\n+    const y = b.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();\n+    if (x < y) { return -1; }\n+    if (x > y) { return 1; }\n+      return 0;\n+    });\n\n+   return sortColumn.sortDesc ? dataCopy.reverse() : dataCopy;\n+ };\n")),Object(o.mdx)("p",null,"Next we fill in the static methods for the example table rows."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const columns = ['column-0', 'column-1', 'column-2'];\n\n+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n\n+ const createRow = rowData => ({ key: rowData.key, cells: createCellsForRow(rowData.cells) });\n")),Object(o.mdx)("p",null,"Then we can implement a method to loop through our data and create the table rows with our methods and call it from our render method. "),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const createRows = (data) => {\n+   const sortedData = sortData(data, sortColumn);\n+   return sortedData.map(childItem => createRow(childItem));\n+ };\n\n  return (\n+   <Table\n+     summaryId=\"example-sorted-table\"\n+     summary=\"This table shows an implementation of sorted table.\"\n+     numberOfColumns={3}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         createHeaderCell(columnKeys[0], 'Breakfast'),\n+         createHeaderCell(columnKeys[1], 'Animals'),\n+         createHeaderCell(columnKeys[2], 'Flatware'),\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n  );\n")),Object(o.mdx)("p",null,"Using these steps we get the following example:"),Object(o.mdx)(y,{mdxType:"SortedTable"}))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=393-882384946c59d18b6589.js.map