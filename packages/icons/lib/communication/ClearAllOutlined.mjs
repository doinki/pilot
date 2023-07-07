import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ClearAllOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"
            })
        ]
    });
});

export { ClearAllOutlined as default };
