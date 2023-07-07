import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const StopOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M16 8v8H8V8h8m2-2H6v12h12V6z"
            })
        ]
    });
});

export { StopOutlined as default };
