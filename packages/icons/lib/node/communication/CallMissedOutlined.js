'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const CallMissedOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9L19.59 7z"
        })
    });
});

module.exports = CallMissedOutlined;
