'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DoubleArrowOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M8.5 5H4l5 7-5 7h4.5l5-7z"
            })
        ]
    });
});

module.exports = DoubleArrowOutlined;
