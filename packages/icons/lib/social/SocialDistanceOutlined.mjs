import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SocialDistanceOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58C7.93 8.21 6.99 8 6 8s-1.93.21-2.78.58C2.48 8.9 2 9.62 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85zM18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58C19.93 8.21 18.99 8 18 8c-.99 0-1.93.21-2.78.58-.74.32-1.22 1.04-1.22 1.85V11h8v-.57c0-.81-.48-1.53-1.22-1.85zm-2.77 4.43-1.41 1.41L18.17 16H5.83l1.58-1.59L6 13l-4 4 3.99 3.99 1.41-1.41L5.83 18h12.34l-1.58 1.58L18 20.99 22 17l-3.99-3.99z"
        })
    });
});

export { SocialDistanceOutlined as default };
