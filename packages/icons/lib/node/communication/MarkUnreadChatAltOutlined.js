'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const MarkUnreadChatAltOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M20,16H4V4h10.1c-0.08-0.39-0.18-1.11,0-2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V6.98c-0.58,0.44-1.26,0.77-2,0.92 V16z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("circle", {
                            cx: "19",
                            cy: "3",
                            r: "3"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "8",
                            x: "6",
                            y: "12"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "12",
                            x: "6",
                            y: "9"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M6,8h12V7.9c-1.21-0.25-2.25-0.95-2.97-1.9H6V8z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = MarkUnreadChatAltOutlined;
