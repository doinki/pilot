import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SubdirectoryArrowRightOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M24 24H0V0h24v24z",
                fill: "none",
                opacity: ".87"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"
            })
        ]
    });
});

export { SubdirectoryArrowRightOutlined as default };
