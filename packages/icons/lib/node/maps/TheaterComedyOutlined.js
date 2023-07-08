'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const TheaterComedyOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "19",
                cy: "6.5",
                r: "1"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "15",
                cy: "6.5",
                r: "1"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M16.99 9c-1.38 0-2.5.84-2.5 1.88h5c0-1.04-1.12-1.88-2.5-1.88zM1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1v7zm2-5h8v5c0 2.21-1.79 4-4 4s-4-1.79-4-4v-5z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M11 2v5.5h2V4h8v5c0 2.21-1.79 4-4 4-.95 0-1.81-.35-2.5-.9v2.35c.76.35 1.61.55 2.5.55 3.31 0 6-2.69 6-6V2H11z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "5",
                cy: "13.5",
                r: "1"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "9",
                cy: "13.5",
                r: "1"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M7 17.88c1.38 0 2.5-.84 2.5-1.88h-5c0 1.04 1.12 1.88 2.5 1.88z"
            })
        ]
    });
});

module.exports = TheaterComedyOutlined;
