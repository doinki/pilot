'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FactCheckOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z",
                            fillRule: "evenodd"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            fillRule: "evenodd",
                            points: "19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            fillRule: "evenodd",
                            height: "2",
                            width: "5",
                            x: "5",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            fillRule: "evenodd",
                            height: "2",
                            width: "5",
                            x: "5",
                            y: "11"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            fillRule: "evenodd",
                            height: "2",
                            width: "5",
                            x: "5",
                            y: "15"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = FactCheckOutlined;
