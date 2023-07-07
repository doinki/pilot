'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const CycloneOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M12,8c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4c2.21,0,4-1.79,4-4C16,9.79,14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C14,13.1,13.1,14,12,14z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M22,7.47V5.35C20.05,4.77,16.56,4,12,4C9.85,4,7.89,4.86,6.46,6.24C6.59,5.39,6.86,3.84,7.47,2H5.35 C4.77,3.95,4,7.44,4,12c0,2.15,0.86,4.11,2.24,5.54c-0.85-0.14-2.4-0.4-4.24-1.01v2.12C3.95,19.23,7.44,20,12,20 c2.15,0,4.11-0.86,5.54-2.24c-0.14,0.85-0.4,2.4-1.01,4.24h2.12C19.23,20.05,20,16.56,20,12c0-2.15-0.86-4.11-2.24-5.54 C18.61,6.59,20.16,6.86,22,7.47z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S15.31,18,12,18z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = CycloneOutlined;
