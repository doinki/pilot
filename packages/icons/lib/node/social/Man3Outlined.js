'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const Man3Outlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2zm-2.0001-5.2487L14.2485 4l-2.2486 2.2486L9.7513 4z"
        })
    });
});

module.exports = Man3Outlined;
