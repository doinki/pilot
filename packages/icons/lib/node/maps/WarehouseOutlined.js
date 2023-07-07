'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const WarehouseOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M20,8.35V19h-2v-8H6v8H4V8.35l8-3.2L20,8.35z M22,21V7L12,3L2,7v14h6v-8h8v8H22z M11,19H9v2h2V19z M13,16h-2v2h2V16z M15,19h-2v2h2V19z"
                })
            })
        ]
    });
});

module.exports = WarehouseOutlined;
