import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const FlashOnOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M7 2v11h3v9l7-12h-4l3-8z"
        })
    });
});

export { FlashOnOutlined as default };
