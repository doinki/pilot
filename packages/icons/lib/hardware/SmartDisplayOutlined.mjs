import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SmartDisplayOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M9.5 7.5v9l7-4.5z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14.01H4V5.99h16v12.02z"
            })
        ]
    });
});

export { SmartDisplayOutlined as default };
