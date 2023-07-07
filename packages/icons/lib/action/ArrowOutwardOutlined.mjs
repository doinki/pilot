import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ArrowOutwardOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    points: "6,6 6,8 14.59,8 5,17.59 6.41,19 16,9.41 16,18 18,18 18,6"
                })
            })
        ]
    });
});

export { ArrowOutwardOutlined as default };
