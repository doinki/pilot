'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const Man2Outlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M14 7h-4c-1.1 0-2 .9-2 2v6h2.5v7h3v-7H16V9c0-1.1-.9-2-2-2z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "12",
                cy: "4",
                r: "2"
            })
        ]
    });
});

module.exports = Man2Outlined;
