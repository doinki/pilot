import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DeblurOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsx("circle", {
                            cx: "6",
                            cy: "14",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "6",
                            cy: "18",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "6",
                            cy: "10",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "3",
                            cy: "10",
                            r: ".5"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "6",
                            cy: "6",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "3",
                            cy: "14",
                            r: ".5"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "10",
                            cy: "21",
                            r: ".5"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "10",
                            cy: "3",
                            r: ".5"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "10",
                            cy: "6",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "10",
                            cy: "14",
                            r: "1.5"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "10",
                            cy: "10",
                            r: "1.5"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "10",
                            cy: "18",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M12,3v2c3.86,0,7,3.14,7,7s-3.14,7-7,7v2c4.96,0,9-4.04,9-9S16.96,3,12,3z"
                        })
                    ]
                })
            })
        ]
    });
});

export { DeblurOutlined as default };
