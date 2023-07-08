'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const EMobiledataOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"
        })
    });
});

module.exports = EMobiledataOutlined;
