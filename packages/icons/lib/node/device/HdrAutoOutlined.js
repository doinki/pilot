'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const HdrAutoOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M11.01,6L6.88,17h1.9l1-2.81h4.44L15.21,17h1.9L12.98,6H11.01z M10.35,12.59l1.6-4.55h0.09 l1.6,4.55H10.35z"
                })
            })
        ]
    });
});

module.exports = HdrAutoOutlined;
