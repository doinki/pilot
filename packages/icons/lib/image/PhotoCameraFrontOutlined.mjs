import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PhotoCameraFrontOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "12",
                cy: "11",
                r: "2"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M14.78 14.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58C8.48 14.9 8 15.62 8 16.43V17h8v-.57c0-.81-.48-1.53-1.22-1.85z"
            })
        ]
    });
});

export { PhotoCameraFrontOutlined as default };
