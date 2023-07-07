import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ArrowBackIosNewOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("rect", {
                fill: "none",
                height: "24",
                width: "24"
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("polygon", {
                    points: "17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"
                })
            })
        ]
    });
});

export { ArrowBackIosNewOutlined as default };
