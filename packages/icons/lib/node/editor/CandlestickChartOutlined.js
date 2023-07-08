'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const CandlestickChartOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm0 12H7V8h2v8zm10-8h-2V4h-2v4h-2v7h2v5h2v-5h2V8zm-2 5h-2v-3h2v3z"
        })
    });
});

module.exports = CandlestickChartOutlined;
