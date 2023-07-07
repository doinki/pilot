import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const FolderCopyOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M3,19h17v2H3c-1.1,0-2-0.9-2-2V6h2V19z M23,6v9c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2L5.01,4C5.01,2.9,5.9,2,7,2h5l2,2h7 C22.1,4,23,4.9,23,6z M7,15h14V6h-7.83l-2-2H7V15z"
                })
            })
        ]
    });
});

export { FolderCopyOutlined as default };
