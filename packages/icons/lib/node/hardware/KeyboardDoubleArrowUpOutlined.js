'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const KeyboardDoubleArrowUpOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"
            })
        ]
    });
});

module.exports = KeyboardDoubleArrowUpOutlined;
