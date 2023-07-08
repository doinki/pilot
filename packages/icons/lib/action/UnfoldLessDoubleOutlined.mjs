import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UnfoldLessDoubleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z"
            })
        ]
    });
});

export { UnfoldLessDoubleOutlined as default };
