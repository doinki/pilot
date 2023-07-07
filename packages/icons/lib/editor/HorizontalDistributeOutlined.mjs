import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const HorizontalDistributeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z"
            })
        ]
    });
});

export { HorizontalDistributeOutlined as default };
