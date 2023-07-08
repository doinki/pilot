'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const CasinoOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "7.5",
                cy: "16.5",
                r: "1.5"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "7.5",
                cy: "7.5",
                r: "1.5"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "12",
                cy: "12",
                r: "1.5"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "16.5",
                cy: "16.5",
                r: "1.5"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "16.5",
                cy: "7.5",
                r: "1.5"
            })
        ]
    });
});

module.exports = CasinoOutlined;
