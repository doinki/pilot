'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PinDropOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M12 4c1.93 0 5 1.4 5 5.15 0 2.16-1.72 4.67-5 7.32-3.28-2.65-5-5.17-5-7.32C7 5.4 10.07 4 12 4m0-2C8.73 2 5 4.46 5 9.15c0 3.12 2.33 6.41 7 9.85 4.67-3.44 7-6.73 7-9.85C19 4.46 15.27 2 12 2z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M12 7c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4zM5 20h14v2H5v-2z"
            })
        ]
    });
});

module.exports = PinDropOutlined;
