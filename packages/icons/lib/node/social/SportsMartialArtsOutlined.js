'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SportsMartialArtsOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "m19.8 2-8.2 6.7-1.21-1.04 3.6-2.08L9.41 1 8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17 8 16l-2.03-3.52.35-1.3L9.5 13l.5 9h2l.5-10L21 3.4z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "5",
                cy: "5",
                r: "2"
            })
        ]
    });
});

module.exports = SportsMartialArtsOutlined;
