'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FenceOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    d: "M21,12v-2h-2V7l-3-3l-2,2l-2-2l-2,2L8,4L5,7v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2H21z M16,6.83l1,1V10h-2V7.83l0.41-0.41 L16,6.83z M12,6.83l0.59,0.59L13,7.83V10h-2V7.83l0.41-0.41L12,6.83z M11,14v-2h2v2H11z M13,16v2h-2v-2H13z M7,7.83l1-1l0.59,0.59 L9,7.83V10H7V7.83z M7,12h2v2H7V12z M7,16h2v2H7V16z M17,18h-2v-2h2V18z M17,14h-2v-2h2V14z"
                })
            })
        ]
    });
});

module.exports = FenceOutlined;
