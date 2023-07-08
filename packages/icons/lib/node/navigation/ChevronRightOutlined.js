'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ChevronRightOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
        })
    });
});

module.exports = ChevronRightOutlined;
