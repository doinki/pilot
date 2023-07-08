'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const NotesOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"
        })
    });
});

module.exports = NotesOutlined;
