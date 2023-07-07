'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const NetworkWifiOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    d: "M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M12,8c-2.86,0-5.5,0.94-7.65,2.51L2.92,9.07 C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07l-1.43,1.43C17.5,8.94,14.86,8,12,8z"
                })
            })
        ]
    });
});

module.exports = NetworkWifiOutlined;
