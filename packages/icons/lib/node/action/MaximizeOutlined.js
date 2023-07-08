'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const MaximizeOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M3 3h18v2H3V3z"
        })
    });
});

module.exports = MaximizeOutlined;
