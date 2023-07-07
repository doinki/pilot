'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const VerticalDistributeOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z"
            })
        ]
    });
});

module.exports = VerticalDistributeOutlined;
