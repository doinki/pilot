'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DataArrayOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"
        })
    });
});

module.exports = DataArrayOutlined;
