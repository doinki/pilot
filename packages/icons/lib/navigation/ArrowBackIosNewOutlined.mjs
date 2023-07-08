import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ArrowBackIosNewOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
        })
    });
});

export { ArrowBackIosNewOutlined as default };
