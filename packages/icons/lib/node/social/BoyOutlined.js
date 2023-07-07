'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const BoyOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxRuntime.jsx("g", {
                    children: /*#__PURE__*/ jsxRuntime.jsx("path", {
                        d: "M12,7.5c0.97,0,1.75-0.78,1.75-1.75S12.97,4,12,4s-1.75,0.78-1.75,1.75S11.03,7.5,12,7.5z M14,20v-5h1v-4.5 c0-1.1-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2V15h1v5H14z"
                    })
                })
            })
        ]
    });
});

module.exports = BoyOutlined;
