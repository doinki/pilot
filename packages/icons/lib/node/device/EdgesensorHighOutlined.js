'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const EdgesensorHighOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        d: "M3,7h2v7H3V7z M0,10h2v7H0V10z M22,7h2v7h-2V7z M19,10h2v7h-2V10z M16,2.01L8,2C6.9,2,6,2.9,6,4v16c0,1.1,0.9,2,2,2h8 c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2.01,16,2.01z M16,20H8v-1h8V20z M16,17H8V7h8V17z M8,5V4h8v1H8z"
                    })
                })
            })
        ]
    });
});

module.exports = EdgesensorHighOutlined;
