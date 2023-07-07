import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DoubleArrowOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsx("polygon", {
                            points: "15.5,5 11,5 16,12 11,19 15.5,19 20.5,12"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "8.5,5 4,5 9,12 4,19 8.5,19 13.5,12"
                        })
                    ]
                })
            })
        ]
    });
});

export { DoubleArrowOutlined as default };
