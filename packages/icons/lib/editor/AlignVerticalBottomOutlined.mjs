import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AlignVerticalBottomOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z"
            })
        ]
    });
});

export { AlignVerticalBottomOutlined as default };
