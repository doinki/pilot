'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const KeyboardDoubleArrowRightOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            points: "6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = KeyboardDoubleArrowRightOutlined;
