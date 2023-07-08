import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DoubleArrowOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M8.5 5H4l5 7-5 7h4.5l5-7z"
            })
        ]
    });
});

export { DoubleArrowOutlined as default };
