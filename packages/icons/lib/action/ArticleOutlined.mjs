import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ArticleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
            })
        ]
    });
});

export { ArticleOutlined as default };
