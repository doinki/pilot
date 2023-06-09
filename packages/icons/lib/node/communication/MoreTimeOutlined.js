'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const MoreTimeOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M10 8v6l4.7 2.9.8-1.2-4-2.4V8z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M17.92 12c.05.33.08.66.08 1 0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-.34-.02-.67-.06-1h-2.02z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M20 5V2h-2v3h-3v2h3v3h2V7h3V5z"
            })
        ]
    });
});

module.exports = MoreTimeOutlined;
