import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PendingOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "7",
                cy: "12",
                r: "1.5"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "12",
                cy: "12",
                r: "1.5"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "17",
                cy: "12",
                r: "1.5"
            })
        ]
    });
});

export { PendingOutlined as default };
