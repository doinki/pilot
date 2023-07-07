import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DragHandleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z"
            })
        ]
    });
});

export { DragHandleOutlined as default };
