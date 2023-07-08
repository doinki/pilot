'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const KeyboardDoubleArrowRightOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"
            })
        ]
    });
});

module.exports = KeyboardDoubleArrowRightOutlined;
