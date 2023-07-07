import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SortOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
            })
        ]
    });
});

export { SortOutlined as default };
