'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AlignVerticalTopOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z"
            })
        ]
    });
});

module.exports = AlignVerticalTopOutlined;
