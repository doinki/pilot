import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ReadMoreOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            width: "9",
                            x: "13",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "9",
                            x: "13",
                            y: "15"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "6",
                            x: "16",
                            y: "11"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "13,12 8,7 8,11 2,11 2,13 8,13 8,17"
                        })
                    ]
                })
            })
        ]
    });
});

export { ReadMoreOutlined as default };
