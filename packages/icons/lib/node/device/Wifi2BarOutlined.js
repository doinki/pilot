'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const Wifi2BarOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M12 10c3.03 0 5.78 1.23 7.76 3.22l-2.12 2.12C16.2 13.9 14.2 13 12 13c-2.2 0-4.2.9-5.64 2.35l-2.12-2.12C6.22 11.23 8.97 10 12 10zm0 6c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54c-.9-.9-2.15-1.46-3.53-1.46z"
        })
    });
});

module.exports = Wifi2BarOutlined;
