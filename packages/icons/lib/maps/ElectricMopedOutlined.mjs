import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ElectricMopedOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsxs("g", {
                        children: [
                            /*#__PURE__*/ jsx("path", {
                                d: "M19,5c0-1.1-0.9-2-2-2h-3v2h3v2.65L13.52,12H10V7H6c-2.21,0-4,1.79-4,4v3h2c0,1.66,1.34,3,3,3s3-1.34,3-3h4.48L19,8.35V5z M4,12v-1c0-1.1,0.9-2,2-2h2v3H4z M7,15c-0.55,0-1-0.45-1-1h2C8,14.55,7.55,15,7,15z"
                            }),
                            /*#__PURE__*/ jsx("rect", {
                                height: "2",
                                width: "5",
                                x: "5",
                                y: "4"
                            }),
                            /*#__PURE__*/ jsx("path", {
                                d: "M19,11c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S20.66,11,19,11z M19,15c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S19.55,15,19,15z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx("polygon", {
                        points: "7,20 11,20 11,18 17,21 13,21 13,23"
                    })
                ]
            })
        ]
    });
});

export { ElectricMopedOutlined as default };
