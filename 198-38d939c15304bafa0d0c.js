(window.webpackJsonp=window.webpackJsonp||[]).push([[198,438,439,440,441,442,443,444,445],{1007:function(e,t){},2106:function(e,t,l){"use strict";l.r(t),t.default="# Result Name Header Cell\n\nResult-Name-Header-Cell is a component of terra-clinical-result that creates a standardized view for the Result Name and Unit of Measure in the first column (row header) for each row within a flowsheet.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-clinical-result`\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n\n## Component Features\n"},2107:function(e,t,l){"use strict";l.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport IconCalculator from 'terra-icon/lib/icon/IconCalculator';\nimport classNames from 'classnames/bind';\nimport styles from './ResultNameHeaderCell.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Content to be displayed for the Result Name row label.\n   */\n  resultName: PropTypes.string.isRequired,\n  /**\n   * Content to be displayed as the supporting Unit of Measure row label.\n   */\n  unit: PropTypes.string,\n  /**\n   * The padding styling to apply to the Result Name row header cell.\n   * One of `'none'`, `'compact'`, or `'standard'`.\n   */\n  paddingStyle: PropTypes.oneOf(['none', 'compact', 'standard']),\n  /**\n   * Adds additional icon at beginning of row before the ResultName, indicating special information about results or cells.\n   * One of `'none'` or `'calculated'`.\n   */\n  typeIndicator: PropTypes.oneOf(['none', 'calculated']),\n};\n\nconst defaultProps = {\n  paddingStyle: 'compact',\n  typeIndicator: 'none',\n};\n\nconst resultRowIndicators = {\n  none: null,\n  calculated: <IconCalculator className={cx('icon-rowindicator')} />,\n};\n\nconst ResultNameHeaderCell = (props) => {\n  const {\n    resultName,\n    unit,\n    paddingStyle,\n    typeIndicator,\n    ...customProps\n  } = props;\n\n  const nameHeaderCellClassnames = cx([\n    'clinical-result-name-header-cell',\n    { 'padding-standard': paddingStyle === 'standard' },\n    { 'padding-compact': paddingStyle === 'compact' },\n  ]);\n\n  return (\n    <div\n      {...customProps}\n      className={customProps.className ? `${nameHeaderCellClassnames} ${customProps.className}` : nameHeaderCellClassnames}\n    >\n      <div className={cx('name')}>\n        {resultRowIndicators[typeIndicator.toLowerCase()]}\n        {resultName}\n      </div>\n      {unit && <div className={cx('unit')}>{unit}</div> }\n    </div>\n  );\n};\n\nResultNameHeaderCell.propTypes = propTypes;\nResultNameHeaderCell.defaultProps = defaultProps;\n\nexport default ResultNameHeaderCell;\n"},2108:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=l(0))&&a.__esModule?a:{default:a},s=l(1005);t.default=function(){return n.default.createElement(s.ResultNameHeaderCell,{resultName:"Blood Pressure",unit:"mmHg"})}},2109:function(e,t,l){"use strict";l.r(t),t.default="import React from 'react';\nimport { ResultNameHeaderCell } from 'terra-clinical-result/lib/index';\n\nexport default () => <ResultNameHeaderCell resultName=\"Blood Pressure\" unit=\"mmHg\" />;\n"},2110:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(l(0)),n=l(1005),s=c(l(4)),r=c(l(1018));function c(e){return e&&e.__esModule?e:{default:e}}var m=s.default.bind(r.default),o=function(){return a.default.createElement("div",{className:m("mock-flowsheet-firstcolumn")},a.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},a.default.createElement(n.ResultNameHeaderCell,{resultName:"Temp",unit:"degC"})),a.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},a.default.createElement(n.ResultNameHeaderCell,{resultName:"HR",unit:"bpm"})),a.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},a.default.createElement(n.ResultNameHeaderCell,{resultName:"BP",unit:"mmHg"})),a.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},a.default.createElement(n.ResultNameHeaderCell,{resultName:"Mean Arterial Pressure, Cuff",unit:"mmHg",typeIndicator:"calculated"})),a.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},a.default.createElement(n.ResultNameHeaderCell,{resultName:"Respiratory Rate",unit:"br/min"})),a.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},a.default.createElement(n.ResultNameHeaderCell,{resultName:"SpO2",unit:"%"})),a.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},a.default.createElement(n.ResultNameHeaderCell,{resultName:"Height/Length Dosing",unit:"cm"})),a.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},a.default.createElement(n.ResultNameHeaderCell,{resultName:"Height/Length Measured",unit:"cm"})),a.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},a.default.createElement(n.ResultNameHeaderCell,{resultName:"Weight Dosing",unit:"kg"})),a.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},a.default.createElement(n.ResultNameHeaderCell,{resultName:"Weight Measured",unit:"kg"})))};t.default=o},2111:function(e,t,l){"use strict";l.r(t),t.default='import React from \'react\';\nimport { ResultNameHeaderCell } from \'terra-clinical-result/lib\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../Examples.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ResultNameColumnFlowsheetExample = () => (\n  <div className={cx(\'mock-flowsheet-firstcolumn\')}>\n    <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n      <ResultNameHeaderCell resultName="Temp" unit="degC" />\n    </div>\n    <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n      <ResultNameHeaderCell resultName="HR" unit="bpm" />\n    </div>\n    <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n      <ResultNameHeaderCell resultName="BP" unit="mmHg" />\n    </div>\n    <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n      <ResultNameHeaderCell resultName="Mean Arterial Pressure, Cuff" unit="mmHg" typeIndicator="calculated" />\n    </div>\n    <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n      <ResultNameHeaderCell resultName="Respiratory Rate" unit="br/min" />\n    </div>\n    <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n      <ResultNameHeaderCell resultName="SpO2" unit="%" />\n    </div>\n    <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n      <ResultNameHeaderCell resultName="Height/Length Dosing" unit="cm" />\n    </div>\n    <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n      <ResultNameHeaderCell resultName="Height/Length Measured" unit="cm" />\n    </div>\n    <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n      <ResultNameHeaderCell resultName="Weight Dosing" unit="kg" />\n    </div>\n    <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n      <ResultNameHeaderCell resultName="Weight Measured" unit="kg" />\n    </div>\n  </div>\n);\n\nexport default ResultNameColumnFlowsheetExample;\n'},3081:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(0)),n=d(l(1006)),s=d(l(2106)),r=l(1223),c=d(l(2107)),m=d(l(2108)),o=d(l(2109)),u=d(l(2110)),i=d(l(2111));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(){return a.default.createElement(n.default,{packageName:r.name,readme:s.default,srcPath:"https://github.com/cerner/terra-clinical/tree/master/packages/".concat(r.name),examples:[{title:"Result Name Header Cell",example:a.default.createElement(m.default,null),source:o.default},{title:"Result Name Header Cells in Sample Flowsheet",example:a.default.createElement(u.default,null),source:i.default}],propsTables:[{componentName:"Result Name Header Cell",componentSrc:c.default}]})};t.default=f}}]);
//# sourceMappingURL=198-38d939c15304bafa0d0c.js.map