'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const LteMobiledataOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("g", {
                    children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                        d: "M6,14h3v2H4V8h2V14z M9,10h2v6h2v-6h2V8H9V10z M21,10V8h-5v8h5v-2h-3v-1h3v-2h-3v-1H21z"
                    })
                })
            })
        ]
    });
});

module.exports = LteMobiledataOutlined;
