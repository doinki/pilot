'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AddChartOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M19,19H5V5h9V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-9h-2V19z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "4",
                            width: "2",
                            x: "15",
                            y: "13"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "7",
                            width: "2",
                            x: "7",
                            y: "10"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "10",
                            width: "2",
                            x: "11",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "19,5 19,3 17,3 17,5 15,5 15,7 17,7 17,9 19,9 19,7 21,7 21,5"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = AddChartOutlined;
