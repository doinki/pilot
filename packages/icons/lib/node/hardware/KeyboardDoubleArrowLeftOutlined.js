'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const KeyboardDoubleArrowLeftOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            points: "17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = KeyboardDoubleArrowLeftOutlined;
