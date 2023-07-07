import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const NorthWestOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("rect", {
                fill: "none",
                height: "24",
                width: "24"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M5,15h2V8.41L18.59,20L20,18.59L8.41,7H15V5H5V15z"
            })
        ]
    });
});

export { NorthWestOutlined as default };
