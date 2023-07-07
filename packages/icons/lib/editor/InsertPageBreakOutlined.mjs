import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const InsertPageBreakOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("path", {
                            d: "M18,20H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3h-2V20z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M6,4h7v5h5v2h2V8l-6-6H6C4.9,2,4,2.9,4,4v7h2V4z"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "6",
                            x: "9",
                            y: "13"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "6",
                            x: "17",
                            y: "13"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "6",
                            x: "1",
                            y: "13"
                        })
                    ]
                })
            })
        ]
    });
});

export { InsertPageBreakOutlined as default };
