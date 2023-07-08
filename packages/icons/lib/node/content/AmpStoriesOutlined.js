'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AmpStoriesOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M7 19h10V4H7v15zM9 6h6v11H9V6zM3 6h2v11H3zm16 0h2v11h-2z"
        })
    });
});

module.exports = AmpStoriesOutlined;
