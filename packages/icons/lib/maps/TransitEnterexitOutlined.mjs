import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TransitEnterexitOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z"
            })
        ]
    });
});

export { TransitEnterexitOutlined as default };
