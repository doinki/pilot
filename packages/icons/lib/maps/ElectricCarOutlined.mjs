import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ElectricCarOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                                d: "M18.92,2.01C18.72,1.42,18.16,1,17.5,1h-11C5.84,1,5.29,1.42,5.08,2.01L3,8v8c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1 h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1V8L18.92,2.01z M6.85,3h10.29l1.08,3.11H5.77L6.85,3z M19,13H5V8h14V13z"
                            }),
                            /*#__PURE__*/ jsx("circle", {
                                cx: "7.5",
                                cy: "10.5",
                                r: "1.5"
                            }),
                            /*#__PURE__*/ jsx("circle", {
                                cx: "16.5",
                                cy: "10.5",
                                r: "1.5"
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

export { ElectricCarOutlined as default };
