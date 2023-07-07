'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const NetworkWifi2BarOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    d: "M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M16.78,13.38C15.4,12.5,13.76,12,12,12 c-1.76,0-3.4,0.5-4.78,1.38l-4.3-4.3C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07L16.78,13.38z"
                })
            })
        ]
    });
});

module.exports = NetworkWifi2BarOutlined;
