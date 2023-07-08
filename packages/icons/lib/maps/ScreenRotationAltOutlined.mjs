import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ScreenRotationAltOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "m4 7.59 5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5V19z"
        })
    });
});

export { ScreenRotationAltOutlined as default };
