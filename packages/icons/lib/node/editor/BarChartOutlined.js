'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const BarChartOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "11",
                            width: "4",
                            x: "4",
                            y: "9"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "7",
                            width: "4",
                            x: "16",
                            y: "13"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "16",
                            width: "4",
                            x: "10",
                            y: "4"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = BarChartOutlined;
