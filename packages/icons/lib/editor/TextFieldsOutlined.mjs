import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TextFieldsOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
            })
        ]
    });
});

export { TextFieldsOutlined as default };
