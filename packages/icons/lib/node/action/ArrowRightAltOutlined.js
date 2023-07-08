'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ArrowRightAltOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
        })
    });
});

module.exports = ArrowRightAltOutlined;
