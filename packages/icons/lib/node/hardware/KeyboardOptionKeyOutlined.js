'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const KeyboardOptionKeyOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "6",
                            x: "15",
                            y: "5"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "9,5 3,5 3,7 7.85,7 14.77,19 21,19 21,17 15.93,17"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = KeyboardOptionKeyOutlined;
