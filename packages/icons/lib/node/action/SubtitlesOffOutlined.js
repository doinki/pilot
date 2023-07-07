'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SubtitlesOffOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M20,4H6.83l2,2H20v11.17l1.76,1.76C21.91,18.65,22,18.34,22,18V6C22,4.9,21.1,4,20,4z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "18,10 12.83,10 14.83,12 18,12"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M1.04,3.87l1.2,1.2C2.09,5.35,2,5.66,2,6v12c0,1.1,0.9,2,2,2h13.17l2.96,2.96l1.41-1.41L2.45,2.45L1.04,3.87z M4,6.83 L7.17,10H6v2h2v-1.17L11.17,14H6v2h7.17l2,2H4V6.83z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = SubtitlesOffOutlined;
