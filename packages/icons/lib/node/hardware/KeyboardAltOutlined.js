'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const KeyboardAltOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    y: "0"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("g", {
                    children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                        d: "M21,4H3C1.9,4,1,4.9,1,6v13c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z M21,19H3V6h18V19z M9,8h2v2H9V8z M5,8h2v2H5V8z M8,16h8v1H8V16z M13,8h2v2h-2V8z M9,12h2v2H9V12z M5,12h2v2H5V12z M13,12h2v2h-2V12z M17,8h2v2h-2V8z M17,12h2v2 h-2V12z"
                    })
                })
            })
        ]
    });
});

module.exports = KeyboardAltOutlined;
