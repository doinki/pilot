'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PlaylistAddCheckOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            height: "2",
                            width: "11",
                            x: "3",
                            y: "10"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "11",
                            x: "3",
                            y: "6"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "7",
                            x: "3",
                            y: "14"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = PlaylistAddCheckOutlined;
