'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PlagiarismOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M9.03 11.03c-1.37 1.37-1.37 3.58 0 4.95 1.12 1.12 2.8 1.31 4.13.59l1.88 1.88 1.41-1.41-1.88-1.88c.71-1.33.53-3.01-.59-4.13-1.37-1.37-3.59-1.37-4.95 0zm3.53 3.53c-.59.59-1.54.59-2.12 0-.59-.59-.59-1.54 0-2.12.59-.59 1.54-.59 2.12 0 .59.59.59 1.53 0 2.12z"
            })
        ]
    });
});

module.exports = PlagiarismOutlined;
