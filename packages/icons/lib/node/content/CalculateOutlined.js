'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const CalculateOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M6.25 7.72h5v1.5h-5zM13 15.75h5v1.5h-5zm0-2.5h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.09-7.05 1.41-1.41 1.41 1.41 1.06-1.06-1.41-1.42 1.41-1.41L16.91 6 15.5 7.41 14.09 6l-1.06 1.06 1.41 1.41-1.41 1.42z"
            })
        ]
    });
});

module.exports = CalculateOutlined;
