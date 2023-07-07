import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AlignVerticalTopOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z"
            })
        ]
    });
});

export { AlignVerticalTopOutlined as default };
