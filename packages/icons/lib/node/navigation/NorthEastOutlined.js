'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const NorthEastOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"
            })
        ]
    });
});

module.exports = NorthEastOutlined;
