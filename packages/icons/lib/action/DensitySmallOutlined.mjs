import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DensitySmallOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            width: "18",
                            x: "3",
                            y: "2"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "18",
                            x: "3",
                            y: "20"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "18",
                            x: "3",
                            y: "14"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "18",
                            x: "3",
                            y: "8"
                        })
                    ]
                })
            })
        ]
    });
});

export { DensitySmallOutlined as default };
