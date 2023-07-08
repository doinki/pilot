import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SportsGolfOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7zm0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "10",
                cy: "8",
                r: "1"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "14",
                cy: "8",
                r: "1"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "12",
                cy: "6",
                r: "1"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7v2z"
            })
        ]
    });
});

export { SportsGolfOutlined as default };
