'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AddBusinessOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "15",
                            x: "2",
                            y: "4"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M15,17h2v-3h1v-2l-1-5H2l-1,5v2h1v6h9v-6h4V17z M9,18H4v-4h5V18z M3.04,12l0.6-3h11.72l0.6,3H3.04z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "23,18 20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = AddBusinessOutlined;
