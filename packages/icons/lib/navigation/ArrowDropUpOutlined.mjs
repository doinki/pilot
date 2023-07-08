import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ArrowDropUpOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "m7 14 5-5 5 5H7z"
        })
    });
});

export { ArrowDropUpOutlined as default };
