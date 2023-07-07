'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const MarkChatUnreadOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    height: "24",
                    width: "24",
                    x: "0",
                    y: "0"
                }),
                /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M22,6.98V16c0,1.1-0.9,2-2,2H6l-4,4V4c0-1.1,0.9-2,2-2h10.1C14.04,2.32,14,2.66,14,3s0.04,0.68,0.1,1H4v12h16V7.9 C20.74,7.75,21.42,7.42,22,6.98z M16,3c0,1.66,1.34,3,3,3s3-1.34,3-3s-1.34-3-3-3S16,1.34,16,3z"
                })
            ]
        })
    });
});

module.exports = MarkChatUnreadOutlined;
