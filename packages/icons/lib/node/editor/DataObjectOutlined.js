'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DataObjectOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M4,7v2c0,0.55-0.45,1-1,1H2v4h1c0.55,0,1,0.45,1,1v2c0,1.65,1.35,3,3,3h3v-2H7c-0.55,0-1-0.45-1-1v-2 c0-1.3-0.84-2.42-2-2.83v-0.34C5.16,11.42,6,10.3,6,9V7c0-0.55,0.45-1,1-1h3V4H7C5.35,4,4,5.35,4,7z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M21,10c-0.55,0-1-0.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c0.55,0,1,0.45,1,1v2c0,1.3,0.84,2.42,2,2.83v0.34 c-1.16,0.41-2,1.52-2,2.83v2c0,0.55-0.45,1-1,1h-3v2h3c1.65,0,3-1.35,3-3v-2c0-0.55,0.45-1,1-1h1v-4H21z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = DataObjectOutlined;
