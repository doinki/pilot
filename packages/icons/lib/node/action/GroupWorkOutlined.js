'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const GroupWorkOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "8",
                cy: "14",
                r: "2"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "12",
                cy: "8",
                r: "2"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "16",
                cy: "14",
                r: "2"
            })
        ]
    });
});

module.exports = GroupWorkOutlined;
