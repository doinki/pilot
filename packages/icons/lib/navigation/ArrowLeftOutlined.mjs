import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ArrowLeftOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M24 0v24H0V0h24z",
                fill: "none",
                opacity: ".87"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M14 7l-5 5 5 5V7z"
            })
        ]
    });
});

export { ArrowLeftOutlined as default };
