'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const InstallMobileOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M17,18H7V6h7V4H7V3h7V1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-5h-2V18z M17,21H7v-1h10V21z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "18,14 23,9 21.59,7.59 19,10.17 19,3 17,3 17,10.17 14.41,7.59 13,9"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = InstallMobileOutlined;
