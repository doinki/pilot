'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ClearAllOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"
        })
    });
});

module.exports = ClearAllOutlined;
