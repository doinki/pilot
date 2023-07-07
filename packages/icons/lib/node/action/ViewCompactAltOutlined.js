'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ViewCompactAltOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "4",
                            width: "4",
                            x: "7.5",
                            y: "7.5"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "4",
                            width: "4",
                            x: "12.5",
                            y: "7.5"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "4",
                            width: "4",
                            x: "7.5",
                            y: "12.5"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "4",
                            width: "4",
                            x: "12.5",
                            y: "12.5"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = ViewCompactAltOutlined;
