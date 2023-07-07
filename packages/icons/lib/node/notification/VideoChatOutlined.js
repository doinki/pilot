'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const VideoChatOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M20,2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.17L4,17.17V4h16V16z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M8,14h6c0.55,0,1-0.45,1-1v-1.99L17,13V7l-2,1.99V7c0-0.55-0.45-1-1-1H8C7.45,6,7,6.45,7,7v6C7,13.55,7.45,14,8,14z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = VideoChatOutlined;
