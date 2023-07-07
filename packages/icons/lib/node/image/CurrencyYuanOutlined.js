'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const CurrencyYuanOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                    points: "13.28,12 18,12 18,14 13,14 13,21 11,21 11,14 6,14 6,12 10.72,12 5,3 7.37,3 12,10.29 16.63,3 19,3"
                })
            })
        ]
    });
});

module.exports = CurrencyYuanOutlined;
