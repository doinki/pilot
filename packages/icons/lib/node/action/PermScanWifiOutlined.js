'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PermScanWifiOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zM2.92 7.65C5.8 5.85 8.74 5 12 5c3.25 0 6.18.85 9.08 2.67L12 18.83 2.92 7.65zM11 10h2v6h-2zm0-4h2v2h-2z"
            })
        ]
    });
});

module.exports = PermScanWifiOutlined;
