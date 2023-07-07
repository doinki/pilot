import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PauseOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
            })
        ]
    });
});

export { PauseOutlined as default };
