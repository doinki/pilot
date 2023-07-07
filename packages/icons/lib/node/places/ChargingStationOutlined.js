'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ChargingStationOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
            children: [
                /*#__PURE__*/ jsxRuntime.jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M14.5,11l-3,6v-4h-2l3-6v4H14.5z M17,3H7v1h10V3 M17,20H7v1h10V20 M17,1c1.1,0,2,0.9,2,2v18c0,1.1-0.9,2-2,2H7 c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2H17L17,1z M7,18h10V6H7V18L7,18z"
                })
            ]
        })
    });
});

module.exports = ChargingStationOutlined;
