'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const JoinFullOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("ellipse", {
                            cx: "12",
                            cy: "12",
                            rx: "3",
                            ry: "5.74"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M7.5,12c0-0.97,0.23-4.16,3.03-6.5C9.75,5.19,8.9,5,8,5c-3.86,0-7,3.14-7,7s3.14,7,7,7c0.9,0,1.75-0.19,2.53-0.5 C7.73,16.16,7.5,12.97,7.5,12z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M16,5c-0.9,0-1.75,0.19-2.53,0.5c2.8,2.34,3.03,5.53,3.03,6.5c0,0.97-0.23,4.16-3.03,6.5C14.25,18.81,15.1,19,16,19 c3.86,0,7-3.14,7-7S19.86,5,16,5z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = JoinFullOutlined;
