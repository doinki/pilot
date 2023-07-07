'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AlignVerticalBottomOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z"
            })
        ]
    });
});

module.exports = AlignVerticalBottomOutlined;
