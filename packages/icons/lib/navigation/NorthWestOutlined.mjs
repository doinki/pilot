import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const NorthWestOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z"
        })
    });
});

export { NorthWestOutlined as default };
