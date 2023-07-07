'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const MicExternalOnOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M9.22,7C9.7,6.47,10,5.77,10,5c0-1.66-1.34-3-3-3S4,3.34,4,5c0,0.77,0.3,1.47,0.78,2H9.22z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M16,2c-2.21,0-4,1.79-4,4v12c0,1.1-0.9,2-2,2s-2-0.9-2-2h1l1-10H4l1,10h1c0,2.21,1.79,4,4,4s4-1.79,4-4V6c0-1.1,0.9-2,2-2 s2,0.9,2,2v16h2V6C20,3.79,18.21,2,16,2z M7.19,16H6.81l-0.6-6h1.58L7.19,16z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = MicExternalOnOutlined;
