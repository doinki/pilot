import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CasesOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M3 9H1v11c0 1.11.89 2 2 2h17v-2H3V9z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z"
            })
        ]
    });
});

export { CasesOutlined as default };
