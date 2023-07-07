'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AssuredWorkloadOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            height: "7",
                            width: "2",
                            x: "5",
                            y: "10"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "7",
                            width: "2",
                            x: "11",
                            y: "10"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M22,6L12,1L2,6v2h20V6z M6.47,6L12,3.24L17.53,6H6.47z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M2,19v2h12.4c-0.21-0.64-0.32-1.31-0.36-2H2z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "19,12.26 19,10 17,10 17,13.26"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M20,14l-4,2v2.55c0,2.52,1.71,4.88,4,5.45c2.29-0.57,4-2.93,4-5.45V16L20,14z M19.28,21l-2.03-2.03l1.06-1.06l0.97,0.97 l2.41-2.38l1.06,1.06L19.28,21z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = AssuredWorkloadOutlined;
