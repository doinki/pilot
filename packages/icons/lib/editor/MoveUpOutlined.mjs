import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MoveUpOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M3,13c0-2.45,1.76-4.47,4.08-4.91L5.59,9.59L7,11l4-4.01L7,3L5.59,4.41l1.58,1.58l0,0.06C3.7,6.46,1,9.42,1,13 c0,3.87,3.13,7,7,7h3v-2H8C5.24,18,3,15.76,3,13z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M13,13v7h9v-7H13z M20,18h-5v-3h5V18z"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "7",
                            width: "9",
                            x: "13",
                            y: "4"
                        })
                    ]
                })
            })
        ]
    });
});

export { MoveUpOutlined as default };
