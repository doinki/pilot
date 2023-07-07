'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AlignHorizontalLeftOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z"
            })
        ]
    });
});

module.exports = AlignHorizontalLeftOutlined;
