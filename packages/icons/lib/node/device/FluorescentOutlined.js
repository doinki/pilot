'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FluorescentOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M5,15h14V9H5V15z M7,11h10v2H7V11z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "3",
                            width: "2",
                            x: "11",
                            y: "2"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            transform: "matrix(0.7046 -0.7096 0.7096 0.7046 1.1814 15.2381)",
                            width: "2.54",
                            x: "17.62",
                            y: "5.2"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "3",
                            width: "2",
                            x: "11",
                            y: "19"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "17.29,17.71 19.08,19.51 20.5,18.09 18.7,16.3"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2.53",
                            transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -2.8904 5.4222)",
                            width: "1.99",
                            x: "4.1",
                            y: "4.93"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            transform: "matrix(0.7096 -0.7046 0.7046 0.7096 -11.1263 8.7897)",
                            width: "2.54",
                            x: "3.83",
                            y: "16.89"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = FluorescentOutlined;
