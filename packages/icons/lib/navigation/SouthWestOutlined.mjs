import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SouthWestOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("rect", {
                fill: "none",
                height: "24",
                width: "24"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M15,19v-2H8.41L20,5.41L18.59,4L7,15.59V9H5v10H15z"
            })
        ]
    });
});

export { SouthWestOutlined as default };
