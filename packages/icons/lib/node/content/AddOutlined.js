'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AddOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
            })
        ]
    });
});

module.exports = AddOutlined;
