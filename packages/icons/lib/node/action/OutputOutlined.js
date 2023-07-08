'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const OutputOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M19 19H5V5h14v2h2V5c0-1.1-.89-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.11 0 2-.9 2-2v-2h-2v2z"
            })
        ]
    });
});

module.exports = OutputOutlined;
