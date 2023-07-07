import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const KeyboardDoubleArrowUpOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            points: "6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5"
                        })
                    ]
                })
            })
        ]
    });
});

export { KeyboardDoubleArrowUpOutlined as default };
