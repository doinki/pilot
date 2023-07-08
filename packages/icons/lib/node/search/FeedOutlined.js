'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const FeedOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zm3 16H5V5h10v4h4v10zM7 17h10v-2H7v2zm5-10H7v2h5V7zm-5 6h10v-2H7v2z"
        })
    });
});

module.exports = FeedOutlined;
