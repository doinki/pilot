import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const EmojiEmotionsOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("circle", {
                cx: "15.5",
                cy: "9.5",
                r: "1.5"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "8.5",
                cy: "9.5",
                r: "1.5"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            })
        ]
    });
});

export { EmojiEmotionsOutlined as default };
