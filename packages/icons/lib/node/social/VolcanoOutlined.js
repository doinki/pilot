'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const VolcanoOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("g", {
                            children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                                d: "M18,8h-7l-2,5H6l-4,9h20L18,8z M7.3,15H9h1.35l0.5-1.26l1.5-3.74h4.14l2.86,10H5.08L7.3,15z"
                            })
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("g", {
                            children: /*#__PURE__*/ jsxRuntime.jsx("rect", {
                                height: "4",
                                width: "2",
                                x: "13",
                                y: "1"
                            })
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("g", {
                            children: /*#__PURE__*/ jsxRuntime.jsx("rect", {
                                height: "2",
                                transform: "matrix(0.7071 -0.7071 0.7071 0.7071 1.9792 14.2929)",
                                width: "4",
                                x: "16.24",
                                y: "3.76"
                            })
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("g", {
                            children: /*#__PURE__*/ jsxRuntime.jsx("rect", {
                                height: "4",
                                transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -0.5061 8.2929)",
                                width: "2",
                                x: "8.76",
                                y: "2.76"
                            })
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = VolcanoOutlined;
