'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PostAddOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            /*#__PURE__*/ jsxRuntime.jsx("path", {
                                d: "M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z"
                            }),
                            /*#__PURE__*/ jsxRuntime.jsx("path", {
                                d: "M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z"
                            }),
                            /*#__PURE__*/ jsxRuntime.jsx("rect", {
                                height: "2",
                                width: "8",
                                x: "7",
                                y: "9"
                            }),
                            /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                                points: "7,12 7,14 15,14 15,12 12,12"
                            }),
                            /*#__PURE__*/ jsxRuntime.jsx("rect", {
                                height: "2",
                                width: "8",
                                x: "7",
                                y: "15"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

module.exports = PostAddOutlined;
