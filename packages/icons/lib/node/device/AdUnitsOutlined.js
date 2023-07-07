'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AdUnitsOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                /*#__PURE__*/ jsxRuntime.jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsxRuntime.jsx("g", {
                            children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                                d: "M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1L17,1z M7,4V3h10v1H7L7,4z M7,18V6 h10v12H7L7,18z M7,21v-1h10v1H7L7,21z"
                            })
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("g", {
                            children: /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                                points: "16,7 8,7 8,9 16,9 16,7"
                            })
                        })
                    ]
                })
            ]
        })
    });
});

module.exports = AdUnitsOutlined;
