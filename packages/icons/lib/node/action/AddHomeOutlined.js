'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AddHomeOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("g", {
                            children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                                d: "M12,5.5l6,4.5v1c0.7,0,1.37,0.1,2,0.29V9l-8-6L4,9v12h7.68c-0.3-0.62-0.5-1.29-0.6-2H6v-9L12,5.5z"
                            })
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("g", {
                            children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                                d: "M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M21,18.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21V18.5z"
                            })
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = AddHomeOutlined;
