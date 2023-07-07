import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CallReceivedOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z"
            })
        ]
    });
});

export { CallReceivedOutlined as default };
