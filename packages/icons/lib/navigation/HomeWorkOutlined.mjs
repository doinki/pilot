import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const HomeWorkOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-6.97l5-3.57 5 3.57V19zm4-12h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z"
            })
        ]
    });
});

export { HomeWorkOutlined as default };
