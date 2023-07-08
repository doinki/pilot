'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AirplayOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M6 22h12l-6-6z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
            })
        ]
    });
});

module.exports = AirplayOutlined;
