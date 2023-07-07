'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SignalWifiStatusbar4BarOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z"
                })
            })
        ]
    });
});

module.exports = SignalWifiStatusbar4BarOutlined;
