'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FirstPageOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M24 0v24H0V0h24z",
                fill: "none",
                opacity: ".87"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"
            })
        ]
    });
});

module.exports = FirstPageOutlined;
