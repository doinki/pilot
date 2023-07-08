'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const RemoveRoadOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm11.5.41L21.09 15 19 17.09 16.91 15l-1.41 1.41 2.09 2.09-2.09 2.09L16.91 22 19 19.91 21.09 22l1.41-1.41-2.09-2.09z"
        })
    });
});

module.exports = RemoveRoadOutlined;
