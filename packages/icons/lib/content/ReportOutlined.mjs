import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ReportOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "12",
                cy: "16",
                r: "1"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M11 7h2v7h-2z"
            })
        ]
    });
});

export { ReportOutlined as default };
