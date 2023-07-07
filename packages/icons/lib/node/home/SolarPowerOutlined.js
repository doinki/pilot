'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SolarPowerOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M20,12H4L2,22h20L20,12z M18.36,14l0.4,2H13v-2H18.36z M11,14v2H5.24l0.4-2H11z M4.84,18H11v2H4.44L4.84,18z M13,20v-2 h6.16l0.4,2H13z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "3",
                            width: "2",
                            x: "11",
                            y: "8"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "3",
                            transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -0.2089 14.6085)",
                            width: "2",
                            x: "16.53",
                            y: "6.06"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -3.448 6.7885)",
                            width: "3",
                            x: "4.97",
                            y: "6.56"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "3",
                            x: "3",
                            y: "2"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "3",
                            x: "18",
                            y: "2"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M12,7c2.76,0,5-2.24,5-5h-2c0,1.65-1.35,3-3,3S9,3.65,9,2H7C7,4.76,9.24,7,12,7z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = SolarPowerOutlined;
