import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const VillaOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M19,10c-1.1,0-2,0.9-2,2h-1V3L3,8v13h18v-9C21,10.9,20.1,10,19,10z M5,9.37l9-3.46V12H9v7H5V9.37z M19,19h-3v-3h-2v3h-3v-5 h8V19z"
            })
        ]
    });
});

export { VillaOutlined as default };
