'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const BrowserUpdatedOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M22 13v3c0 1.1-.9 2-2 2h-3l1 1v2H6v-2l1-1H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8v2H4v11h16v-3h2zm-7 2-5-5 1.41-1.41L14 11.17V3h2v8.17l2.59-2.58L20 10l-5 5z"
        })
    });
});

module.exports = BrowserUpdatedOutlined;
