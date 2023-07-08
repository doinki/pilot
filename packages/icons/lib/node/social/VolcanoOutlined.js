'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const VolcanoOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M18 8h-7l-2 5H6l-4 9h20L18 8zM7.3 15h3.05l.5-1.26 1.5-3.74h4.14l2.86 10H5.08l2.22-5zM13 1h2v4h-2zm3.1212 4.4683L18.9496 2.64l1.4142 1.4142-2.8284 2.8284zm-8.4815-1.418 1.4142-1.4142 2.8284 2.8284-1.4142 1.4142z"
        })
    });
});

module.exports = VolcanoOutlined;
