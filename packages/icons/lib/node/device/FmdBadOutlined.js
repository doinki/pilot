'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FmdBadOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,19.33 c-4.05-3.7-6-6.79-6-9.14C6,6.57,8.65,4,12,4s6,2.57,6,6.2C18,12.54,16.05,15.64,12,19.33z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "5",
                            width: "2",
                            x: "11",
                            y: "6"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "11",
                            y: "13"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = FmdBadOutlined;
