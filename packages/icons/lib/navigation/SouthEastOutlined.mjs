import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SouthEastOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M19,9h-2v6.59L5.41,4L4,5.41L15.59,17H9v2h10V9z"
            })
        ]
    });
});

export { SouthEastOutlined as default };
