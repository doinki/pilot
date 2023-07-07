'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const KeyboardControlKeyOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                    points: "5,12 6.41,13.41 12,7.83 17.59,13.41 19,12 12,5"
                })
            })
        ]
    });
});

module.exports = KeyboardControlKeyOutlined;
