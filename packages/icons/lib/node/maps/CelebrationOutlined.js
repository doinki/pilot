'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const CelebrationOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxRuntime.jsx("path", {
            d: "m2 22 14-5-9-9-5 14zm10.35-5.82L5.3 18.7l2.52-7.05 4.53 4.53zm2.18-3.65 5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59 1.06-1.06-.59-.59c-1.07-1.07-2.82-1.07-3.89 0l-5.59 5.59 1.06 1.06zm-4.47-5.65-.59.59 1.06 1.06.59-.59c1.07-1.07 1.07-2.82 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76zm7 5-1.59 1.59 1.06 1.06 1.59-1.59c.49-.49 1.28-.49 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61c-1.08-1.07-2.82-1.07-3.89 0zm-2-6-3.59 3.59 1.06 1.06 3.59-3.59c1.07-1.07 1.07-2.82 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77z"
        })
    });
});

module.exports = CelebrationOutlined;