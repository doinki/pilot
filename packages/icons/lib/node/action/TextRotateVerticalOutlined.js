'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const TextRotateVerticalOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M15.75 5h-1.5L9.5 16h2.1l.9-2.2h5l.9 2.2h2.1L15.75 5zm-2.62 7L15 6.98 16.87 12h-3.74zM6 20l3-3H7V4H5v13H3l3 3z"
            })
        ]
    });
});

module.exports = TextRotateVerticalOutlined;
