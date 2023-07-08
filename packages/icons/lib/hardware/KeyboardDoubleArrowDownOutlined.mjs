import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const KeyboardDoubleArrowDownOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"
            })
        ]
    });
});

export { KeyboardDoubleArrowDownOutlined as default };
