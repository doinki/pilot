import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AlignHorizontalLeftOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z"
            })
        ]
    });
});

export { AlignHorizontalLeftOutlined as default };
