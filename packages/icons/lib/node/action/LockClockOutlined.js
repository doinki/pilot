'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const LockClockOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M6 20V10h12v1c.7 0 1.37.1 2 .29V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6.26c-.42-.6-.75-1.28-.97-2H6zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z"
            })
        ]
    });
});

module.exports = LockClockOutlined;