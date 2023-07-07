import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const BusAlertOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    width: "24",
                    y: "0"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("g", {
                            children: /*#__PURE__*/ jsx("circle", {
                                cx: "6.5",
                                cy: "15.5",
                                r: "1.5"
                            })
                        }),
                        /*#__PURE__*/ jsx("g", {
                            children: /*#__PURE__*/ jsx("circle", {
                                cx: "13.5",
                                cy: "15.5",
                                r: "1.5"
                            })
                        }),
                        /*#__PURE__*/ jsx("g", {
                            children: /*#__PURE__*/ jsx("path", {
                                d: "M4,11V8h7.29C11.1,7.37,11,6.7,11,6H4.43c0.83-0.71,2.98-1.09,6.65-0.98c0.1-0.7,0.3-1.37,0.59-1.99 C2.97,2.67,2,5.02,2,7v9.5c0,0.95,0.38,1.81,1,2.44V21c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h8v1c0,0.55,0.45,1,1,1h1 c0.55,0,1-0.45,1-1v-2.06c0.62-0.63,1-1.49,1-2.44V13c-1.91,0-3.63-0.76-4.89-2H4z M16,16c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-3 h12V16z"
                            })
                        }),
                        /*#__PURE__*/ jsx("g", {
                            children: /*#__PURE__*/ jsx("path", {
                                d: "M18,1c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,1,18,1z M18.5,9h-1V8h1V9z M18.5,7h-1V3h1V7z"
                            })
                        })
                    ]
                })
            })
        ]
    });
});

export { BusAlertOutlined as default };
