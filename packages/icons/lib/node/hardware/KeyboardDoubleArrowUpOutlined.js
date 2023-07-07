'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const KeyboardDoubleArrowUpOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = KeyboardDoubleArrowUpOutlined;
