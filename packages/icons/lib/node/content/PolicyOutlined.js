'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PolicyOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 1.85-.51 3.65-1.38 5.21l-1.45-1.45c1.29-1.94 1.07-4.58-.64-6.29-1.95-1.95-5.12-1.95-7.07 0-1.95 1.95-1.95 5.12 0 7.07 1.71 1.71 4.35 1.92 6.29.64l1.72 1.72c-1.19 1.42-2.73 2.51-4.47 3.04-4.02-1.25-7-5.42-7-9.94V6.3l7-3.11 7 3.11V11zm-7 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        })
    });
});

module.exports = PolicyOutlined;
