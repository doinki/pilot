'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const PanoramaVerticalOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8s-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8s.39 5.4 1.16 8H6.54z"
        })
    });
});

module.exports = PanoramaVerticalOutlined;