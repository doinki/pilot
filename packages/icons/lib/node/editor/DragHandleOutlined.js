'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DragHandleOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z"
            })
        ]
    });
});

module.exports = DragHandleOutlined;
