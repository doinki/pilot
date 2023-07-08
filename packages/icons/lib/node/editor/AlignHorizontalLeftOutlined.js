'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AlignHorizontalLeftOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z"
        })
    });
});

module.exports = AlignHorizontalLeftOutlined;
