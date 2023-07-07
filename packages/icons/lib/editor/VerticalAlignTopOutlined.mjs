import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const VerticalAlignTopOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"
            })
        ]
    });
});

export { VerticalAlignTopOutlined as default };
