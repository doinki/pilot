'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AutoAwesomeMotionOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    width: "24",
                    x: "0"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("g", {
                    children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                        d: "M14,2H4C2.9,2,2,2.9,2,4v10h2V4h10V2z M18,6H8C6.9,6,6,6.9,6,8v10h2V8h10V6z M20,10h-8c-1.1,0-2,0.9-2,2v8 c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-8C22,10.9,21.1,10,20,10z M20,20h-8v-8h8V20z"
                    })
                })
            })
        ]
    });
});

module.exports = AutoAwesomeMotionOutlined;
