'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const RemoveOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M19 13H5v-2h14v2z"
        })
    });
});

module.exports = RemoveOutlined;
