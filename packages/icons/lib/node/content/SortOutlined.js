'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SortOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
        })
    });
});

module.exports = SortOutlined;
