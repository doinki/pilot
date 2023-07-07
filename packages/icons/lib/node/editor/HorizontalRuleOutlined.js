'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const HorizontalRuleOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
            children: [
                /*#__PURE__*/ jsxRuntime.jsx("rect", {
                    fill: "none",
                    fillRule: "evenodd",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ jsxRuntime.jsx("g", {
                    children: /*#__PURE__*/ jsxRuntime.jsx("rect", {
                        fillRule: "evenodd",
                        height: "2",
                        width: "16",
                        x: "4",
                        y: "11"
                    })
                })
            ]
        })
    });
});

module.exports = HorizontalRuleOutlined;
