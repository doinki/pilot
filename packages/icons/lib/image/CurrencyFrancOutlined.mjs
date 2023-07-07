import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CurrencyFrancOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    points: "18,5 18,3 7,3 7,16 5,16 5,18 7,18 7,21 9,21 9,18 13,18 13,16 9,16 9,13 17,13 17,11 9,11 9,5"
                })
            })
        ]
    });
});

export { CurrencyFrancOutlined as default };
