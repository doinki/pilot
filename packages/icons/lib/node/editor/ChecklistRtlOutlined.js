'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ChecklistRtlOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M11 7H2v2h9V7zm0 8H2v2h9v-2zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34 16.34 11zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34 16.34 19z"
        })
    });
});

module.exports = ChecklistRtlOutlined;
