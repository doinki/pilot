'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const CurrencyFrancOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z"
        })
    });
});

module.exports = CurrencyFrancOutlined;
