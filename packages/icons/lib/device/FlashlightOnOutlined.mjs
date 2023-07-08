import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const FlashlightOnOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M18 2H6v6l2 3v11h8V11l2-3V2zm-2 2v1H8V4h8zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39l-2 3.01z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "12",
                cy: "14",
                r: "1.5"
            })
        ]
    });
});

export { FlashlightOnOutlined as default };
