'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AdfScannerOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M19,12h-1V4H6v8H5c-1.66,0-3,1.34-3,3v5h20v-5C22,13.34,20.66,12,19,12z M8,6h8v6H8V6z M20,18H4v-3c0-0.55,0.45-1,1-1h14 c0.55,0,1,0.45,1,1V18z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("circle", {
                            cx: "18",
                            cy: "16",
                            r: "1"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = AdfScannerOutlined;
