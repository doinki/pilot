'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const BlindOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "11.5",
                cy: "3.5",
                r: "2"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M12.13 7.12c-.17-.35-.44-.65-.8-.85-.61-.36-1.34-.34-1.93-.03v-.01L4 9.3V14h2v-3.54l1.5-.85C7.18 10.71 7 11.85 7 13v5.33L4.4 21.8 6 23l3-4 .22-3.54L11 18v5h2v-6.5l-1.97-2.81c-.04-.52-.14-1.76.45-3.4.75 1.14 1.88 1.98 3.2 2.41L20.63 23l.87-.5-5.48-9.5H17v-2c-.49 0-2.88.17-4.08-2.21"
            })
        ]
    });
});

module.exports = BlindOutlined;
