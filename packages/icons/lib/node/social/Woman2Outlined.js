'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const Woman2Outlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M13.94 8.31C13.62 7.52 12.85 7 12 7s-1.62.52-1.94 1.31L7 16h3.5v6h3v-6H17l-3.06-7.69z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "12",
                cy: "4",
                r: "2"
            })
        ]
    });
});

module.exports = Woman2Outlined;
