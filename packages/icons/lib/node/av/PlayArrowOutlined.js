'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PlayArrowOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"
        })
    });
});

module.exports = PlayArrowOutlined;
