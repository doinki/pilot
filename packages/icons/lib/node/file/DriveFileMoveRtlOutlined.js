'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DriveFileMoveRtlOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h5.17l2,2H20V18z M13.41,15.59L12,17l-4-4l4-4l1.41,1.41L11.83,12H16v2h-4.17L13.41,15.59z"
            })
        ]
    });
});

module.exports = DriveFileMoveRtlOutlined;
