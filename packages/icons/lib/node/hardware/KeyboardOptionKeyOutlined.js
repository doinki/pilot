'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const KeyboardOptionKeyOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"
        })
    });
});

module.exports = KeyboardOptionKeyOutlined;
