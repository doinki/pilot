import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const WifiFindOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M12 6c4.14 0 7.88 1.68 10.59 4.39L24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21l1.41-1.42L2.93 9.08C5.45 7.16 8.59 6 12 6z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M21 14c0-2.24-1.76-4-4-4s-4 1.76-4 4 1.76 4 4 4c.75 0 1.44-.21 2.03-.56L21.59 20 23 18.59l-2.56-2.56c.35-.59.56-1.28.56-2.03zm-4 2c-1.12 0-2-.88-2-2s.88-2 2-2 2 .88 2 2-.88 2-2 2z"
            })
        ]
    });
});

export { WifiFindOutlined as default };
