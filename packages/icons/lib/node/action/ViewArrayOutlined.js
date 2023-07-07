'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ViewArrayOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M15,7v10H9V7H15z M21,5h-3v14h3V5z M17,5H7v14h10V5z M6,5H3v14h3V5z"
            })
        ]
    });
});

module.exports = ViewArrayOutlined;
