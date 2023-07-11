import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MedicalServicesOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z"
            })
        ]
    });
});

export { MedicalServicesOutlined as default };