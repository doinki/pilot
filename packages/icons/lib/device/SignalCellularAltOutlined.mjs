import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SignalCellularAltOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z"
            })
        ]
    });
});

export { SignalCellularAltOutlined as default };
