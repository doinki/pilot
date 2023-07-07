'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const CallReceivedOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z"
            })
        ]
    });
});

module.exports = CallReceivedOutlined;
