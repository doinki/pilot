'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const AddToDriveOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M19 11c.17 0 .33.01.49.02L15 3H9l5.68 9.84C15.77 11.71 17.3 11 19 11zM8.15 4.52 2 15.5 5 21l6.33-10.97zM13.2 15.5H9.9L6.73 21h7.81c-.96-1.06-1.54-2.46-1.54-4 0-.52.07-1.02.2-1.5zm6.8.5v-3h-2v3h-3v2h3v3h2v-3h3v-2z"
        })
    });
});

module.exports = AddToDriveOutlined;
