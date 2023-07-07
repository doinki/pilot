'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const Wifi1BarOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    d: "M15.53,17.46L12,21l-3.53-3.54C9.37,16.56,10.62,16,12,16S14.63,16.56,15.53,17.46z"
                })
            })
        ]
    });
});

module.exports = Wifi1BarOutlined;
