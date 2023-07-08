'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SouthWestOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"
        })
    });
});

module.exports = SouthWestOutlined;
