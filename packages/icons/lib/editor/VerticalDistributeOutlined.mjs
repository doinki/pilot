import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const VerticalDistributeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z"
            })
        ]
    });
});

export { VerticalDistributeOutlined as default };
