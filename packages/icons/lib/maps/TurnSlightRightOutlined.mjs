import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TurnSlightRightOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("path", {
                    d: "M12.34,6V4H18v5.66h-2V7.41l-5,5V20H9v-7.58c0-0.53,0.21-1.04,0.59-1.41l5-5H12.34z"
                })
            })
        ]
    });
});

export { TurnSlightRightOutlined as default };
