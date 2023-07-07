import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ChangeHistoryOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"
            })
        ]
    });
});

export { ChangeHistoryOutlined as default };
