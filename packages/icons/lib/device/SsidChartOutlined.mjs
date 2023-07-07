import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SsidChartOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    d: "M21,5.47L12,12L7.62,7.62L3,11V8.52L7.83,5l4.38,4.38L21,3L21,5.47z M21,15h-4.7l-4.17,3.34L6,12.41l-3,2.13L3,17l2.8-2 l6.2,6l5-4h4V15z"
                })
            })
        ]
    });
});

export { SsidChartOutlined as default };
