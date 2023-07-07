'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ArrowBackIosOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                fill: "none",
                opacity: ".87"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"
            })
        ]
    });
});

module.exports = ArrowBackIosOutlined;
