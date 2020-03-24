(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{3031:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(0);var r=n(354);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={};function s(e){var t=e.components,n=i(e,["components"]);return Object(r.mdx)("wrapper",a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"general-guidelines"},"General Guidelines"),Object(r.mdx)("p",null,"Keep these things in mind when developing with Terra components:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Terra components are black boxes. You should not rely on internal implementation specifics. This includes DOM structure, CSS specifics, themeable variables, class names, and undocumented side effects. These details are not part of the documented API contract and are subject to change at any time."),Object(r.mdx)("li",{parentName:"ul"},"Javascript components in ",Object(r.mdx)("inlineCode",{parentName:"li"},"private")," directories are not part of Terras public API and should not be consumed directly."),Object(r.mdx)("li",{parentName:"ul"},"Try to minimize your application's DOM footprint. An application's DOM size is inversely proportional to its performance. If you have a list that could have thousands of items in it, you need to rethink your design."),Object(r.mdx)("li",{parentName:"ul"},"Take some time to learn the basics of ",Object(r.mdx)("a",a({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}),"JavaScript")," and ",Object(r.mdx)("a",a({parentName:"li"},{href:"https://reactjs.org/tutorial/tutorial.html"}),"React"),"."),Object(r.mdx)("li",{parentName:"ul"},"Pay attention to your dependencies. Dependencies that are only used in development should be dev dependencies. Make sure all peer dependencies are met."),Object(r.mdx)("li",{parentName:"ul"},"Terra is delivered via npm packages. Take some time to learn about ",Object(r.mdx)("a",a({parentName:"li"},{href:"https://docs.npmjs.com/about-npm/"}),"npm"),"."),Object(r.mdx)("li",{parentName:"ul"},"Use Terra's ",Object(r.mdx)("a",a({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/getting-started/terra-ui/webpack"}),"webpack")," configuration where possible.")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=425-6eb647b92dcab16b292c.js.map