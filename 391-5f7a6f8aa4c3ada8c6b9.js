(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{1504:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{title:"Section 0",key:"unique-key-0",childItems:[{key:"unique-0-0",cells:[{key:"unique-0-0-0",title:"Item 0-0-0"},{key:"unique-0-0-1",title:"Item 0-0-1"},{key:"unique-0-0-2",title:"Item 0-0-2"}]},{key:"unique-0-1",cells:[{key:"unique-0-1-0",title:"Item 0-1-0"},{key:"unique-0-1-1",title:"Item 0-1-1"},{key:"unique-0-1-2",title:"Item 0-1-2"}]},{key:"unique-0-2",cells:[{key:"unique-0-2-0",title:"Item 0-2-0"},{key:"unique-0-2-1",title:"Item 0-2-1"},{key:"unique-0-2-2",title:"Item 0-2-2"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{key:"unique-1-0",cells:[{key:"unique-1-0-0",title:"Item 1-0-0"},{key:"unique-1-0-1",title:"Item 1-0-1"},{key:"unique-1-0-2",title:"Item 1-0-2"}]},{key:"unique-1-1",cells:[{key:"unique-1-1-0",title:"Item 1-1-0"},{key:"unique-1-1-1",title:"Item 1-1-1"},{key:"unique-1-1-2",title:"Item 1-1-2"}]},{key:"unique-1-2",cells:[{key:"unique-1-2-0",title:"Item 1-2-0"},{key:"unique-1-2-1",title:"Item 1-2-1"},{key:"unique-1-2-2",title:"Item 1-2-2"}]}]}];t.default=a},2949:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,o=s(n(0)),r=s(n(1011)),i=(l=n(1504))&&l.__esModule?l:{default:l};function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,l=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(a=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(l)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(){var e=u((0,o.useState)([]),2),t=e[0],n=e[1],a=function(e,a){e.preventDefault(),n(r.Utils.toggleArrayValue(t,a.key))};return o.default.createElement(r.default,{summaryId:"example-sorted-table",summary:"This table shows an implementation of sections.",numberOfColumns:3,cellPaddingStyle:"standard",dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"toggle-0",children:"Column 0"},{key:"cell-1",id:"toggle-1",children:"Column 1"},{key:"cell-2",id:"toggle-2",children:"Column 2"}]},bodyData:i.default.map((function(e){return{sectionHeader:{id:"sub-".concat((n=e).key),key:n.key,title:n.title,onToggle:a,metaData:{key:n.key},isCollapsed:t.indexOf(n.key)>=0},rows:n.childItems.map((function(e){return{key:(t=e).key,cells:(n=t.cells,n.map((function(e){return function(e){return{key:e.key,children:[e.title]}}(e)})))};var t,n}))};var n}))})};t.default=d},3282:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(0),l=n.n(a),o=n(354),r=n(2949),i=n.n(r);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={};function d(e){var t=e.components,n=s(e,["components"]);return Object(o.mdx)("wrapper",c({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React, {\n  useState,\n} from 'react';\nimport Table, {\n  Utils,\n} from 'terra-table';\nimport mockData from './mock-data/mock-section';\n\nconst createCell = cell => ({ key: cell.key, children: [cell.title] });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst SectionTable = () => {\n  const [collapsedKeys, setCollapsedKeys] = useState([]);\n\n  const handleSectionToggle = (event, metaData) => {\n    event.preventDefault();\n    setCollapsedKeys(Utils.toggleArrayValue(collapsedKeys, metaData.key));\n  };\n\n  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n    }\n  );\n\n  const createSection = sectionData => (\n    {\n      sectionHeader: {\n        id: `sub-${sectionData.key}`,\n        key: sectionData.key,\n        title: sectionData.title,\n        onToggle: handleSectionToggle,\n        metaData: { key: sectionData.key },\n        isCollapsed: collapsedKeys.indexOf(sectionData.key) >= 0,\n      },\n      rows: sectionData.childItems.map(childItem => createRow(childItem)),\n    }\n  );\n\n  return (\n    <Table\n      summaryId=\"example-sorted-table\"\n      summary=\"This table shows an implementation of sections.\"\n      numberOfColumns={3}\n      cellPaddingStyle=\"standard\"\n      dividerStyle=\"horizontal\"\n      headerData={{\n        cells: [\n          { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n          { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n          { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n        ],\n      }}\n      bodyData={mockData.map(section => createSection(section))}\n    />\n  );\n};\n\nexport default SectionTable;\n\n")))}d.isMDXComponent=!0;var m=n(994),p=n.n(m),y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.a.createElement(p.a,{title:t||"Section Table",description:n,example:l.a.createElement(i.a,null),exampleSrc:l.a.createElement(d,null),isExpanded:a})};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b={};function g(e){var t=e.components,n=h(e,["components"]);return Object(o.mdx)("wrapper",f({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"terra-table---implementing-a-section-table"},"Terra Table - Implementing a Section Table"),Object(o.mdx)("p",null,"Table sections are available in both static and collapsible varieties. A table section that is collapsed will remove its children rows from the DOM. This improves performance and accessibility, but may remove potential state associated to a mounted row. If your table row content has additional state, it needs to be stored externally and reapplied when thawed for the next render that shows its section open."),Object(o.mdx)("h2",{id:"state-management"},"State Management"),Object(o.mdx)("p",null,"First defaulting our state to an empty array with the useState hook."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+  const [collapsedKeys, setCollapsedKeys] = useState([]);\n")),Object(o.mdx)("p",null,"Next creating an event handler callback method to pass to the section's ",Object(o.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"onSelect")," callback will return the metaData prop passed to each section."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+  const handleSectionToggle = (event, metaData) => (\n+\n+  );\n")),Object(o.mdx)("p",null,"As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const handleSectionToggle = (event, metaData) => (\n+   event.preventDefault();\n  );\n")),Object(o.mdx)("p",null,"Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection is collapsed using the section key in our state. So we use the utility method ",Object(o.mdx)("inlineCode",{parentName:"p"},"toggleArrayValue"),", which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const handleSectionToggle = (event, metaData) => (\n    event.preventDefault();\n+   setCollapsedKeys(Utils.toggleArrayValue(collapsedKeys, metaData.key));\n  );\n")),Object(o.mdx)("p",null,"Setting state will trigger another render. In the render method we need to generate our sections with the updated isCollapsed and isCollapsible props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if items are placed within sections structurally.\n",Object(o.mdx)("a",f({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+  const createSection = sectionData => (\n+    {\n+      sectionHeader: {\n+       id: `sub-${sectionData.key}`,\n+       key: sectionData.key,\n+       title: sectionData.title,\n+     },\n+     rows: sectionData.childItems.map(childItem => createRow(childItem)),\n+   }\n+ );\n")),Object(o.mdx)("p",null,'Next we need to set up our metaData object with our key value, and attach the "onToggle" to our handler.'),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const createSection = sectionData => (\n    {\n      sectionHeader: {\n        id: `sub-${sectionData.key}`,\n        key: sectionData.key,\n        title: sectionData.title,\n+       onToggle: handleSectionToggle,\n+       metaData: { key: sectionData.key },\n      },\n      rows: sectionData.childItems.map(childItem => createRow(childItem)),\n    }\n  );\n")),Object(o.mdx)("p",null,"Finally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use ",Object(o.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",Object(o.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array. As well as place entries for row index."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const createSection = sectionData => (\n    {\n      sectionHeader: {\n        id: `sub-${sectionData.key}`,\n        key: sectionData.key,\n        title: sectionData.title,\n        onToggle: handleSectionToggle,\n        metaData: { key: sectionData.key },\n+       isCollapsed: collapsedKeys.indexOf(sectionData.key) >= 0,\n      },\n      rows: sectionData.childItems.map(childItem => createRow(childItem)),\n    }\n  );\n")),Object(o.mdx)("p",null,"We can then implement the unpack of our data into our row cells."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+  const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;\n\n+  const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(o.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const createRow = rowData => (\n+   {\n+     key: rowData.key,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n\n  return (\n+   <Table\n+     summaryId=\"example-section-table\"\n+     summary=\"This table shows an implementation of sections.\"\n+     numberOfColumns={3}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n+       ],\n+     }}\n+     bodyData={mockData.map(section => createSection(section))}\n+   </Table>\n  );\n")),Object(o.mdx)("p",null,"Using these steps we get the following example:"),Object(o.mdx)(y,{mdxType:"SectionTable"}))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=391-5f7a6f8aa4c3ada8c6b9.js.map