'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const TurnLeftOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M6.83,11l1.59,1.59L7,14l-4-4l4-4l1.41,1.41L6.83,9L15,9c1.1,0,2,0.9,2,2v9h-2v-9L6.83,11z"
                })
            })
        ]
    });
});

module.exports = TurnLeftOutlined;
