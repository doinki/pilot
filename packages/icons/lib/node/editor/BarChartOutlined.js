'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const BarChartOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"
        })
    });
});

module.exports = BarChartOutlined;
