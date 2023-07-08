import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DoorBackOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M9 11h2v2H9z"
            })
        ]
    });
});

export { DoorBackOutlined as default };
