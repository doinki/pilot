'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const HouseSidingOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("rect", {
                fill: "none",
                height: "24",
                width: "24"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M19,12h3L12,3L2,12h3v8h2v-2h10v2h2V12z M7.21,10h9.58L17,10.19V12H7v-1.81L7.21,10z M14.57,8H9.43L12,5.69L14.57,8z M7,16 v-2h10v2H7z"
            })
        ]
    });
});

module.exports = HouseSidingOutlined;
