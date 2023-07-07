import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const KeyboardControlKeyOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("polygon", {
                    points: "5,12 6.41,13.41 12,7.83 17.59,13.41 19,12 12,5"
                })
            })
        ]
    });
});

export { KeyboardControlKeyOutlined as default };
