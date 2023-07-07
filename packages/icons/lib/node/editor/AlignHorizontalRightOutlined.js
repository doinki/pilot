'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AlignHorizontalRightOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M20,2h2v20h-2V2z M2,10h16V7H2V10z M8,17h10v-3H8V17z"
            })
        ]
    });
});

module.exports = AlignHorizontalRightOutlined;
