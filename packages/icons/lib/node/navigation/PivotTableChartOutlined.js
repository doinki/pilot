'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PivotTableChartOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M21,5c0-1.1-0.9-2-2-2h-9v5h11V5z M3,19c0,1.1,0.9,2,2,2h3V10H3V19z M3,5v3h5V3H5C3.9,3,3,3.9,3,5z M18,8.99L14,13 l1.41,1.41l1.59-1.6V15c0,1.1-0.9,2-2,2h-2.17l1.59-1.59L13,14l-4,4l4,4l1.41-1.41L12.83,19H15c2.21,0,4-1.79,4-4v-2.18l1.59,1.6 L22,13L18,8.99z"
                })
            })
        ]
    });
});

module.exports = PivotTableChartOutlined;
