import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const LyricsOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "7",
                            x: "6",
                            y: "6"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "4",
                            x: "6",
                            y: "12"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M15,11.97V16H6l-2,2V4h11v2.03c0.52-0.69,1.2-1.25,2-1.6V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9 c1.1,0,2-0.9,2-2v-2.42C16.2,13.22,15.52,12.66,15,11.97z"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "7",
                            x: "6",
                            y: "9"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M20,6.18C19.69,6.07,19.35,6,19,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3V3h2V1h-4V6.18z"
                        })
                    ]
                })
            })
        ]
    });
});

export { LyricsOutlined as default };
