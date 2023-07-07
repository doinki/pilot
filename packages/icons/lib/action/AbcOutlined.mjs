import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AbcOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M21,11h-1.5v-0.5h-2v3h2V13H21v1c0,0.55-0.45,1-1,1h-3c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V11z M8,10v5H6.5v-1.5h-2V15H3v-5c0-0.55,0.45-1,1-1h3C7.55,9,8,9.45,8,10z M6.5,10.5h-2V12h2V10.5z M13.5,12c0.55,0,1,0.45,1,1v1 c0,0.55-0.45,1-1,1h-4V9h4c0.55,0,1,0.45,1,1v1C14.5,11.55,14.05,12,13.5,12z M11,10.5v0.75h2V10.5H11z M13,12.75h-2v0.75h2V12.75z"
                })
            })
        ]
    });
});

export { AbcOutlined as default };
