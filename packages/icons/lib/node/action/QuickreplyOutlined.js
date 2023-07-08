'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const QuickreplyOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2H5.17L4 17.17z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M22.5 16h-2.2l1.7-4h-5v6h2v5z"
            })
        ]
    });
});

module.exports = QuickreplyOutlined;
