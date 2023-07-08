import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ManOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "12",
                cy: "4",
                r: "2"
            })
        ]
    });
});

export { ManOutlined as default };
