'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const VerticalAlignBottomOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
        })
    });
});

module.exports = VerticalAlignBottomOutlined;
