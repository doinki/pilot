'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const NavigateNextOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"
        })
    });
});

module.exports = NavigateNextOutlined;
