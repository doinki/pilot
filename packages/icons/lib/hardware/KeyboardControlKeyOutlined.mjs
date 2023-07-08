import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const KeyboardControlKeyOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"
        })
    });
});

export { KeyboardControlKeyOutlined as default };
