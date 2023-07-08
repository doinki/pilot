'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SolarPowerOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M20 12H4L2 22h20l-2-10zm-1.64 2 .4 2H13v-2h5.36zM11 14v2H5.24l.4-2H11zm-6.16 4H11v2H4.44l.4-2zM13 20v-2h6.16l.4 2H13zM11 8h2v3h-2zm4.7644-.7948 1.4143-1.4142L19.3 7.9123l-1.4142 1.4142zm-11.0596.7076 2.1213-2.1213 1.4143 1.4142L6.119 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5h-2c0 1.65-1.35 3-3 3S9 3.65 9 2H7c0 2.76 2.24 5 5 5z"
        })
    });
});

module.exports = SolarPowerOutlined;
