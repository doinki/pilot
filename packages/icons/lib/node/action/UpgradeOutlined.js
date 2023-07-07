'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const UpgradeOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
            children: [
                /*#__PURE__*/ jsxRuntime.jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M16,18v2H8v-2H16z M11,7.99V16h2V7.99h3L12,4L8,7.99H11z"
                })
            ]
        })
    });
});

module.exports = UpgradeOutlined;
