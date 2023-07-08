'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const BluetoothDriveOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "6.5",
                cy: "14.5",
                r: "1.5"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "15.5",
                cy: "14.5",
                r: "1.5"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M18 17H4v-5h11v-2H4.81l1.04-3H15V5H5.5c-.66 0-1.21.42-1.42 1.01L2 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8h-2v5z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M22 3.85 19.15 1h-.5v3.79l-2.3-2.29-.7.7L18.44 6l-2.79 2.79.7.71 2.3-2.3V11h.5L22 8.14 19.85 6 22 3.85zm-2.35-.94.94.94-.94.94V2.91zm.94 5.23-.94.94V7.2l.94.94z"
            })
        ]
    });
});

module.exports = BluetoothDriveOutlined;
