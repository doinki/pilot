'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FoundationOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("rect", {
                fill: "none",
                height: "24",
                width: "24"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M19,12h3L12,3L2,12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2V12z M7,15v-4.81l4-3.6V15H7z M13,15V6.59l4,3.6V15H13z"
            })
        ]
    });
});

module.exports = FoundationOutlined;
