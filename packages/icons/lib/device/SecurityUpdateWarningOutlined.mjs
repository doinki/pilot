import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SecurityUpdateWarningOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "11",
                            y: "15"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "6",
                            width: "2",
                            x: "11",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,21H7v-1h10V21z M17,18H7V6h10V18z M17,4H7V3h10V4z"
                        })
                    ]
                })
            })
        ]
    });
});

export { SecurityUpdateWarningOutlined as default };
