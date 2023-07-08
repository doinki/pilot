'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const RampLeftOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M13 21h-2V6.83L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02V21z"
        })
    });
});

module.exports = RampLeftOutlined;
