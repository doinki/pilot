'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const TwoKPlusOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5z"
            }),
            /*#__PURE__*/ jsxRuntime.jsx("path", {
                d: "M10 13.5H7.5v-1H9c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H6v1.5h2.5v1H7c-.55 0-1 .45-1 1V15h4v-1.5zm2.5-.75L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z"
            })
        ]
    });
});

module.exports = TwoKPlusOutlined;
