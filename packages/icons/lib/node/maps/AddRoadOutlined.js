'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AddRoadOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "9",
                            width: "2",
                            x: "18",
                            y: "4"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "16",
                            width: "2",
                            x: "4",
                            y: "4"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "4",
                            width: "2",
                            x: "11",
                            y: "4"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "4",
                            width: "2",
                            x: "11",
                            y: "10"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "4",
                            width: "2",
                            x: "11",
                            y: "16"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = AddRoadOutlined;
