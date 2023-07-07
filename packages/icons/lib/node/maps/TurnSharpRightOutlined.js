'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const TurnSharpRightOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    d: "M18,6.83l1.59,1.59L21,7l-4-4l-4,4l1.41,1.41L16,6.83V13H8c-1.1,0-2,0.9-2,2v6h2v-6h8c1.1,0,2-0.9,2-2V6.83z"
                })
            })
        ]
    });
});

module.exports = TurnSharpRightOutlined;
