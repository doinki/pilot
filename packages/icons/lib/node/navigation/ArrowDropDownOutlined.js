'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ArrowDropDownOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "m7 10 5 5 5-5H7z"
        })
    });
});

module.exports = ArrowDropDownOutlined;
