'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const IntegrationInstructionsOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
            children: [
                /*#__PURE__*/ jsxRuntime.jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ jsxRuntime.jsx("circle", {
                    cx: "12",
                    cy: "3.5",
                    fill: "none",
                    r: ".75"
                }),
                /*#__PURE__*/ jsxRuntime.jsx("circle", {
                    cx: "12",
                    cy: "3.5",
                    fill: "none",
                    r: ".75"
                }),
                /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                    fill: "none",
                    points: "5,15 5,16 5,19 19,19 19,16 19,15 19,5 5,5"
                }),
                /*#__PURE__*/ jsxRuntime.jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "11,14.17 8.83,12 11,9.83 9.59,8.41 6,12 9.59,15.59"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "14.41,15.59 18,12 14.41,8.41 13,9.83 15.17,12 13,14.17"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C4.86,3,4.73,3.01,4.6,3.04C4.21,3.12,3.86,3.32,3.59,3.59 c-0.18,0.18-0.33,0.4-0.43,0.64C3.06,4.46,3,4.72,3,5v10v1v3c0,0.27,0.06,0.54,0.16,0.78c0.1,0.24,0.25,0.45,0.43,0.64 c0.27,0.27,0.62,0.47,1.01,0.55C4.73,20.99,4.86,21,5,21h14c1.1,0,2-0.9,2-2v-3v-1V5C21,3.9,20.1,3,19,3z M12,2.75 c0.41,0,0.75,0.34,0.75,0.75S12.41,4.25,12,4.25s-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75z M19,15v1v3H5v-3v-1V5h14V15z"
                        })
                    ]
                })
            ]
        })
    });
});

module.exports = IntegrationInstructionsOutlined;
