'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const NetworkCellOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z"
        })
    });
});

module.exports = NetworkCellOutlined;
