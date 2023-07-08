import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const HouseOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M19 9.3V4h-3v2.6L12 3 2 12h3v8h6v-6h2v6h6v-8h3l-3-2.7zM17 18h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M10 10h4c0-1.1-.9-2-2-2s-2 .9-2 2z"
            })
        ]
    });
});

export { HouseOutlined as default };
