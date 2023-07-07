'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AmpStoriesOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
            /*#__PURE__*/ jsxRuntime.jsxs("g", {
                children: [
                    /*#__PURE__*/ jsxRuntime.jsx("g", {}),
                    /*#__PURE__*/ jsxRuntime.jsxs("g", {
                        children: [
                            /*#__PURE__*/ jsxRuntime.jsx("path", {
                                d: "M7,19h10V4H7V19z M9,6h6v11H9V6z"
                            }),
                            /*#__PURE__*/ jsxRuntime.jsx("rect", {
                                height: "11",
                                width: "2",
                                x: "3",
                                y: "6"
                            }),
                            /*#__PURE__*/ jsxRuntime.jsx("rect", {
                                height: "11",
                                width: "2",
                                x: "19",
                                y: "6"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

module.exports = AmpStoriesOutlined;
