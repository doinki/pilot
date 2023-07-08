'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ExpandLessOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
        })
    });
});

module.exports = ExpandLessOutlined;
