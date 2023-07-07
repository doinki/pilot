'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const TocOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"
            })
        ]
    });
});

module.exports = TocOutlined;
