'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SubdirectoryArrowRightOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M24 24H0V0h24v24z",
                fill: "none",
                opacity: ".87"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"
            })
        ]
    });
});

module.exports = SubdirectoryArrowRightOutlined;
