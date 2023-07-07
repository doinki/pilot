'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const MenuOpenOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M0,0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
            })
        ]
    });
});

module.exports = MenuOpenOutlined;
