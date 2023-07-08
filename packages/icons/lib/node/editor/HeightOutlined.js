'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const HeightOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z"
        })
    });
});

module.exports = HeightOutlined;
