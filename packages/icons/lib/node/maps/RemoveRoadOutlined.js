'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const RemoveRoadOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "22.5,16.41 21.09,15 19,17.09 16.91,15 15.5,16.41 17.59,18.5 15.5,20.59 16.91,22 19,19.91 21.09,22 22.5,20.59 20.41,18.5"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = RemoveRoadOutlined;
