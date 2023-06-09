import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DatasetOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M7 13h4v4H7zm6 0h4v4h-4z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M7 7h4v4H7zm6 0h4v4h-4z"
            })
        ]
    });
});

export { DatasetOutlined as default };
