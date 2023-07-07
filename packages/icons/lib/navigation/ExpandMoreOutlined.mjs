import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ExpandMoreOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M24 24H0V0h24v24z",
                fill: "none",
                opacity: ".87"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
            })
        ]
    });
});

export { ExpandMoreOutlined as default };
