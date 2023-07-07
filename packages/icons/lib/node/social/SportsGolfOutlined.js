'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SportsGolfOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M12,16c3.87,0,7-3.13,7-7c0-3.87-3.13-7-7-7C8.13,2,5,5.13,5,9C5,12.87,8.13,16,12,16z M12,4c2.76,0,5,2.24,5,5 s-2.24,5-5,5s-5-2.24-5-5S9.24,4,12,4z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("circle", {
                            cx: "10",
                            cy: "8",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("circle", {
                            cx: "14",
                            cy: "8",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("circle", {
                            cx: "12",
                            cy: "6",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M7,19h2c1.1,0,2,0.9,2,2v1h2v-1c0-1.1,0.9-2,2-2h2v-2H7V19z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = SportsGolfOutlined;
