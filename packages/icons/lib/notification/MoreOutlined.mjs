import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MoreOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "9",
                cy: "12",
                r: "1.5"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "14",
                cy: "12",
                r: "1.5"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "19",
                cy: "12",
                r: "1.5"
            })
        ]
    });
});

export { MoreOutlined as default };
