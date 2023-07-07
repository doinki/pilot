'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const HorizontalDistributeOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z"
            })
        ]
    });
});

module.exports = HorizontalDistributeOutlined;
