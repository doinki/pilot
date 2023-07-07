import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const NorthEastOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"
            })
        ]
    });
});

export { NorthEastOutlined as default };
