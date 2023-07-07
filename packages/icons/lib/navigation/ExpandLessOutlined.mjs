import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ExpandLessOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
            })
        ]
    });
});

export { ExpandLessOutlined as default };
