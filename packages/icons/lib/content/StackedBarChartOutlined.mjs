import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const StackedBarChartOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            height: "11",
                            width: "4",
                            x: "4",
                            y: "9"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "4",
                            width: "4",
                            x: "4",
                            y: "4"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "4",
                            width: "4",
                            x: "10",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "4",
                            width: "4",
                            x: "16",
                            y: "10"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "5",
                            width: "4",
                            x: "16",
                            y: "15"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "8",
                            width: "4",
                            x: "10",
                            y: "12"
                        })
                    ]
                })
            })
        ]
    });
});

export { StackedBarChartOutlined as default };
