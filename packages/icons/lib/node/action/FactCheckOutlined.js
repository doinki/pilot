'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FactCheckOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
            fillRule: "evenodd",
            children: [
                /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"
                }),
                /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z"
                })
            ]
        })
    });
});

module.exports = FactCheckOutlined;
