'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AlignVerticalTopOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"
        })
    });
});

module.exports = AlignVerticalTopOutlined;
