'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const VideoCameraFrontOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zm-2-.79V18H4V6h12v3.69z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "2"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M14 15.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.99 0-1.93.21-2.78.58C6.48 13.9 6 14.62 6 15.43V16h8v-.57z"
            })
        ]
    });
});

module.exports = VideoCameraFrontOutlined;
