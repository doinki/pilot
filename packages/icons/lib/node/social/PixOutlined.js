'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PixOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    width: "24",
                    y: "0"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M15.45,16.52l-3.01-3.01c-0.11-0.11-0.24-0.13-0.31-0.13s-0.2,0.02-0.31,0.13L8.8,16.53c-0.34,0.34-0.87,0.89-2.64,0.89 l3.71,3.7c1.17,1.17,3.07,1.17,4.24,0l3.72-3.71C16.92,17.41,16.16,17.23,15.45,16.52z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M8.8,7.47l3.02,3.02c0.08,0.08,0.2,0.13,0.31,0.13s0.23-0.05,0.31-0.13l2.99-2.99c0.71-0.74,1.52-0.91,2.43-0.91 l-3.72-3.71c-1.17-1.17-3.07-1.17-4.24,0l-3.71,3.7C7.95,6.58,8.49,7.16,8.8,7.47z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M21.11,9.85l-2.25-2.26H17.6c-0.54,0-1.08,0.22-1.45,0.61l-3,3c-0.28,0.28-0.65,0.42-1.02,0.42 c-0.36,0-0.74-0.15-1.02-0.42L8.09,8.17c-0.38-0.38-0.9-0.6-1.45-0.6H5.17l-2.29,2.3c-1.17,1.17-1.17,3.07,0,4.24l2.29,2.3h1.48 c0.54,0,1.06-0.22,1.45-0.6l3.02-3.02c0.28-0.28,0.65-0.42,1.02-0.42c0.37,0,0.74,0.14,1.02,0.42l3.01,3.01 c0.38,0.38,0.9,0.6,1.45,0.6h1.26l2.25-2.26C22.3,12.96,22.3,11.04,21.11,9.85z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = PixOutlined;
