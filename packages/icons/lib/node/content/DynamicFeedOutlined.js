'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DynamicFeedOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z"
            })
        ]
    });
});

module.exports = DynamicFeedOutlined;
