'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DisplaySettingsOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M20,3H4C2.89,3,2,3.89,2,5v12c0,1.1,0.89,2,2,2h4v2h8v-2h4c1.1,0,2-0.9,2-2V5C22,3.89,21.1,3,20,3z M20,17H4V5h16V17z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "1.5",
                            width: "8",
                            x: "6",
                            y: "8.25"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "16.5,9.75 18,9.75 18,8.25 16.5,8.25 16.5,7 15,7 15,11 16.5,11"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "1.5",
                            width: "8",
                            x: "10",
                            y: "12.25"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "7.5,15 9,15 9,11 7.5,11 7.5,12.25 6,12.25 6,13.75 7.5,13.75"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = DisplaySettingsOutlined;
