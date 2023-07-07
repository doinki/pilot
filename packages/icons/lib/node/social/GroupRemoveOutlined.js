'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const GroupRemoveOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("rect", {
                fill: "none",
                height: "24",
                width: "24"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M24,9v2h-6V9H24z M8,4C5.79,4,4,5.79,4,8s1.79,4,4,4s4-1.79,4-4S10.21,4,8,4z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S9.1,10,8,10z M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z M14,18H2v-0.99C2.2,16.29,5.3,15,8,15s5.8,1.29,6,2V18z M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z M16.53,13.83 C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z"
            })
        ]
    });
});

module.exports = GroupRemoveOutlined;
