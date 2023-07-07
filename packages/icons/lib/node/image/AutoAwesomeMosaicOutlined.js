'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AutoAwesomeMosaicOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M3,5v14c0,1.1,0.89,2,2,2h6V3H5C3.89,3,3,3.9,3,5z M9,19H5V5h4V19z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M19,3h-6v8h8V5C21,3.9,20.1,3,19,3z M19,9h-4V5h4V9z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M13,21h6c1.1,0,2-0.9,2-2v-6h-8V21z M15,15h4v4h-4V15z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = AutoAwesomeMosaicOutlined;
