import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const FitScreenOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M6,16h12V8H6V16z M8,10h8v4H8V10z M4,15H2v3c0,1.1,0.9,2,2,2h3v-2H4V15z M4,6h3V4H4C2.9,4,2,4.9,2,6v3h2V6z M20,4h-3v2h3v3 h2V6C22,4.9,21.1,4,20,4z M20,18h-3v2h3c1.1,0,2-0.9,2-2v-3h-2V18z"
                })
            })
        ]
    });
});

export { FitScreenOutlined as default };
