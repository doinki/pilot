'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SportsCricketOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M15.04,12.79l-8.5-8.5C6.35,4.1,6.09,4,5.83,4S5.32,4.1,5.13,4.29L2.29,7.13c-0.39,0.39-0.39,1.03,0,1.42l8.5,8.5 c0.2,0.2,0.45,0.29,0.71,0.29c0.26,0,0.51-0.1,0.71-0.29l2.83-2.83C15.43,13.82,15.43,13.18,15.04,12.79z M11.5,14.92L4.41,7.83 l1.42-1.42l7.09,7.09L11.5,14.92z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "6",
                            transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -8.5264 17.7562)",
                            width: "2",
                            x: "16.17",
                            y: "16.17"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M18.5,2C16.57,2,15,3.57,15,5.5C15,7.43,16.57,9,18.5,9S22,7.43,22,5.5C22,3.57,20.43,2,18.5,2z M18.5,7 C17.67,7,17,6.33,17,5.5S17.67,4,18.5,4S20,4.67,20,5.5S19.33,7,18.5,7z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = SportsCricketOutlined;
