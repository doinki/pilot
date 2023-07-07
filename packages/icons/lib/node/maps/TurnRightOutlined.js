'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const TurnRightOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    d: "M17.17,11l-1.59,1.59L17,14l4-4l-4-4l-1.41,1.41L17.17,9L9,9c-1.1,0-2,0.9-2,2v9h2v-9L17.17,11z"
                })
            })
        ]
    });
});

module.exports = TurnRightOutlined;
