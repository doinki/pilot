import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TheaterComedyOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            cx: "19",
                            cy: "6.5",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "15",
                            cy: "6.5",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M16.99,9c-1.38,0-2.5,0.84-2.5,1.88h5C19.49,9.84,18.37,9,16.99,9z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M1,16c0,3.31,2.69,6,6,6s6-2.69,6-6V9H1V16z M3,11h8v5c0,2.21-1.79,4-4,4s-4-1.79-4-4V11z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M11,2v5.5h2V4h8v5c0,2.21-1.79,4-4,4c-0.95,0-1.81-0.35-2.5-0.9v2.35C15.26,14.8,16.11,15,17,15c3.31,0,6-2.69,6-6V2H11z"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "5",
                            cy: "13.5",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "9",
                            cy: "13.5",
                            r: "1"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M7,17.88c1.38,0,2.5-0.84,2.5-1.88h-5C4.5,17.04,5.62,17.88,7,17.88z"
                        })
                    ]
                })
            })
        ]
    });
});

export { TheaterComedyOutlined as default };
