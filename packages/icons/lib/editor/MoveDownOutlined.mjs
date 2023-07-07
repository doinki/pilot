import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MoveDownOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M3,11c0,2.45,1.76,4.47,4.08,4.91l-1.49-1.49L7,13l4,4.01L7,21l-1.41-1.41l1.58-1.58l0-0.06C3.7,17.54,1,14.58,1,11 c0-3.87,3.13-7,7-7h3v2H8C5.24,6,3,8.24,3,11z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M22,11V4h-9v7H22z M20,9h-5V6h5V9z"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "7",
                            width: "9",
                            x: "13",
                            y: "13"
                        })
                    ]
                })
            })
        ]
    });
});

export { MoveDownOutlined as default };
