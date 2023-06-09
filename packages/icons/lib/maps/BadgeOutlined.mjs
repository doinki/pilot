import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const BadgeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M14 12h4v1.5h-4zm0 3h4v1.5h-4z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0V4h2v5h-2V7zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "9",
                cy: "13.5",
                r: "1.5"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39z"
            })
        ]
    });
});

export { BadgeOutlined as default };
