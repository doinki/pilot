'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const Man3Outlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M14,7h-4C8.9,7,8,7.9,8,9v6h2v7h4v-7h2V9C16,7.9,15.1,7,14,7z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "3.18",
                            transform: "matrix(0.7071 0.7071 -0.7071 0.7071 6.3431 -7.3137)",
                            width: "3.18",
                            x: "10.41",
                            y: "2.41"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = Man3Outlined;
