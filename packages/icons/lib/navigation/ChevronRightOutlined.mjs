import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ChevronRightOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
            })
        ]
    });
});

export { ChevronRightOutlined as default };
