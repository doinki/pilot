import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ImageNotSupportedOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxs("g", {
            children: [
                /*#__PURE__*/ jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ jsx("path", {
                    d: "M21.9,21.9l-6.1-6.1l-2.69-2.69l0,0L5,5l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31 L21.9,21.9z M5,19V7.83l6.84,6.84L11,15.72L9,13l-3,4h8.17l2,2H5z M7.83,5l-2-2H19c1.1,0,2,0.9,2,2v13.17l-2-2V5H7.83z"
                })
            ]
        })
    });
});

export { ImageNotSupportedOutlined as default };
