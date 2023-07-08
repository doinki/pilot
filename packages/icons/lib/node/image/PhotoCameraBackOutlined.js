'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PhotoCameraBackOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M11.25 16 9 13l-3 4h12l-3.75-5z"
            })
        ]
    });
});

module.exports = PhotoCameraBackOutlined;
