'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FlashlightOffOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M2.81 2.81 1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81zM14 20h-4v-7.17l4 4V20zm2-16v1H7.83l2 2H16v.39l-2 3.01v.77l2 2V11l2-3V2H6v1.17l.83.83z"
        })
    });
});

module.exports = FlashlightOffOutlined;
