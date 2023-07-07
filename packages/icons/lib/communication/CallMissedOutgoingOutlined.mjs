import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CallMissedOutgoingOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"
            })
        ]
    });
});

export { CallMissedOutgoingOutlined as default };
