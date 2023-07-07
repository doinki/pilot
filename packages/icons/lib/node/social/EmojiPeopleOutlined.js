'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const EmojiPeopleOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsxs("g", {
                children: [
                    /*#__PURE__*/ jsxRuntime.jsx("g", {}),
                    /*#__PURE__*/ jsxRuntime.jsxs("g", {
                        children: [
                            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                                cx: "12",
                                cy: "4",
                                r: "2"
                            }),
                            /*#__PURE__*/ jsxRuntime.jsx("path", {
                                d: "M15.89,8.11C15.5,7.72,14.83,7,13.53,7c-0.21,0-1.42,0-2.54,0C8.24,6.99,6,4.75,6,2H4c0,3.16,2.11,5.84,5,6.71V22h2v-6h2 v6h2V10.05L18.95,14l1.41-1.41L15.89,8.11z"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

module.exports = EmojiPeopleOutlined;
