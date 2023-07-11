import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TimeToLeaveOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 6h10.29l1.04 3H5.81l1.04-3zM19 16H5v-4.66l.12-.34h13.77l.11.34V16z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "7.5",
                cy: "13.5",
                r: "1.5"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "16.5",
                cy: "13.5",
                r: "1.5"
            })
        ]
    });
});

export { TimeToLeaveOutlined as default };