'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DataArrayOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "15,4 15,6 18,6 18,18 15,18 15,20 20,20 20,4"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "4,20 9,20 9,18 6,18 6,6 9,6 9,4 4,4"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = DataArrayOutlined;
