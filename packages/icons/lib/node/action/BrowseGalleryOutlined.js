'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const BrowseGalleryOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M9 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M10 7H8v5.41l3.79 3.8 1.42-1.42-3.21-3.2zm7.99-3.48v2.16C20.36 6.8 22 9.21 22 12c0 2.79-1.64 5.2-4.01 6.32v2.16C21.48 19.24 24 15.91 24 12s-2.52-7.24-6.01-8.48z"
            })
        ]
    });
});

module.exports = BrowseGalleryOutlined;
