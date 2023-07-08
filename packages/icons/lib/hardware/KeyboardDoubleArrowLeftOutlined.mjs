import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const KeyboardDoubleArrowLeftOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"
            })
        ]
    });
});

export { KeyboardDoubleArrowLeftOutlined as default };
