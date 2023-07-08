'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const MuseumOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z"
            })
        ]
    });
});

module.exports = MuseumOutlined;
