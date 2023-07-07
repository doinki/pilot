'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ViewCarouselOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("rect", {
                fill: "none",
                height: "24",
                width: "24"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M2,7h4v10H2V7z M7,19h10V5H7V19z M9,7h6v10H9V7z M18,7h4v10h-4V7z"
            })
        ]
    });
});

module.exports = ViewCarouselOutlined;
