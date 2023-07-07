'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const LooksTwoOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                fill: "none"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V9c0-1.11-.9-2-2-2H9v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z"
            })
        ]
    });
});

module.exports = LooksTwoOutlined;
