import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const HomeWorkOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-6.97l5-3.57l5,3.57V19z"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "17",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "17",
                            y: "11"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "17",
                            y: "15"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "10,3 10,4.97 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3"
                        })
                    ]
                })
            })
        ]
    });
});

export { HomeWorkOutlined as default };
