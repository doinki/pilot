'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DiningOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M14.75 6c-1.37 0-2.5 1.52-2.5 3.4 0 1.48.7 2.71 1.67 3.18l.08.04V19h1.5v-6.38l.08-.03c.97-.47 1.67-1.7 1.67-3.18 0-1.88-1.12-3.41-2.5-3.41M10.5 6c-.27 0-.5.22-.5.5V9h-.75V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V9H7.5V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3.8c0 .93.64 1.71 1.5 1.93V19h1.5v-6.77c.86-.22 1.5-1 1.5-1.93V6.5c0-.28-.22-.5-.5-.5zM20 4H4v16h16V4m0-2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16z"
        })
    });
});

module.exports = DiningOutlined;