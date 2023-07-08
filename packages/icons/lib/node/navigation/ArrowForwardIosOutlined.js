'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ArrowForwardIosOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
        })
    });
});

module.exports = ArrowForwardIosOutlined;
