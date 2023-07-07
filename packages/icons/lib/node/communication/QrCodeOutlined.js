'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const QrCodeOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M3,11h8V3H3V11z M5,5h4v4H5V5z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M3,21h8v-8H3V21z M5,15h4v4H5V15z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M13,3v8h8V3H13z M19,9h-4V5h4V9z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "19",
                            y: "19"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "13",
                            y: "13"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "15",
                            y: "15"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "13",
                            y: "17"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "15",
                            y: "19"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "17",
                            y: "17"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "17",
                            y: "13"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "19",
                            y: "15"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = QrCodeOutlined;
