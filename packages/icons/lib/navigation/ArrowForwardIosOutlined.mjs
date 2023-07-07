import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ArrowForwardIosOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("polygon", {
                    points: "6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"
                })
            })
        ]
    });
});

export { ArrowForwardIosOutlined as default };
