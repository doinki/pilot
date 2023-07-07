'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DehazeOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"
            })
        ]
    });
});

module.exports = DehazeOutlined;
