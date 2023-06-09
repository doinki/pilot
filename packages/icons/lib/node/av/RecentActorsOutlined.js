'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const RecentActorsOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M21 5h2v14h-2zm-4 0h2v14h-2zm-3 0H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H3V7h10v10z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("circle", {
                cx: "8",
                cy: "9.94",
                r: "1.95"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M11.89 15.35c0-1.3-2.59-1.95-3.89-1.95s-3.89.65-3.89 1.95V16h7.78v-.65z"
            })
        ]
    });
});

module.exports = RecentActorsOutlined;
