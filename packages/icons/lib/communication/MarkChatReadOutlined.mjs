import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MarkChatReadOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxs("g", {
            children: [
                /*#__PURE__*/ jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ jsx("path", {
                    d: "M12,18l-6,0l-4,4V4c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v7l-2,0V4H4v12l8,0V18z M23,14.34l-1.41-1.41l-4.24,4.24l-2.12-2.12 l-1.41,1.41L17.34,20L23,14.34z"
                })
            ]
        })
    });
});

export { MarkChatReadOutlined as default };
