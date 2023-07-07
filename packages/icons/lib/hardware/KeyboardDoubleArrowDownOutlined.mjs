import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const KeyboardDoubleArrowDownOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            points: "18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19"
                        })
                    ]
                })
            })
        ]
    });
});

export { KeyboardDoubleArrowDownOutlined as default };
