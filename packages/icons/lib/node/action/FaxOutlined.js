'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FaxOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M19,9h-1V4H8v5H7.22C6.67,8.39,5.89,8,5,8c-1.66,0-3,1.34-3,3v7c0,1.66,1.34,3,3,3c0.89,0,1.67-0.39,2.22-1H22v-8 C22,10.34,20.66,9,19,9z M6,18c0,0.55-0.45,1-1,1s-1-0.45-1-1v-7c0-0.55,0.45-1,1-1s1,0.45,1,1V18z M10,6h6v3h-6V6z M20,18H8v-7 h11c0.55,0,1,0.45,1,1V18z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("circle", {
                            cx: "15",
                            cy: "13",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("circle", {
                            cx: "18",
                            cy: "13",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("circle", {
                            cx: "15",
                            cy: "16",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("circle", {
                            cx: "18",
                            cy: "16",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("g", {
                            children: /*#__PURE__*/ jsxRuntime.jsx("rect", {
                                height: "5",
                                width: "4",
                                x: "9",
                                y: "12"
                            })
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = FaxOutlined;
