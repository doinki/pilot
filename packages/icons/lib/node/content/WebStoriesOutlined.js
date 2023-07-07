'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const WebStoriesOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M17,4v16c1.1,0,2-0.9,2-2V6C19,4.9,18.1,4,17,4z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M13,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V4C15,2.9,14.1,2,13,2z M13,20H4V4h9V20z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M21,6v12c0.83,0,1.5-0.67,1.5-1.5v-9C22.5,6.67,21.83,6,21,6z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = WebStoriesOutlined;
