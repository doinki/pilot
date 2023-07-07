'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ViewSidebarOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
            children: [
                /*#__PURE__*/ jsxRuntime.jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ jsxRuntime.jsx("g", {
                    children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                        d: "M2,4v16h20V4H2z M20,8.67h-2.5V6H20V8.67z M17.5,10.67H20v2.67h-2.5V10.67z M4,6h11.5v12H4V6z M17.5,18v-2.67H20V18H17.5z"
                    })
                })
            ]
        })
    });
});

module.exports = ViewSidebarOutlined;
