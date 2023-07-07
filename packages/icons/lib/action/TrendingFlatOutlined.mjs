import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TrendingFlatOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M22 12l-4-4v3H3v2h15v3l4-4z"
            })
        ]
    });
});

export { TrendingFlatOutlined as default };
