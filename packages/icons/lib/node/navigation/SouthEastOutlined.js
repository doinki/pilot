'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SouthEastOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z"
        })
    });
});

module.exports = SouthEastOutlined;
