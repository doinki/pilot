'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const HlsOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M6.5,9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9z M16.5,15h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1H17v-1h2V11h1.5v-1 c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1H19v1h-2V13h-1.5v1C15.5,14.55,15.95,15,16.5,15z M14,15v-1.5h-2.5 V9H10v6H14z"
                })
            })
        ]
    });
});

module.exports = HlsOutlined;
