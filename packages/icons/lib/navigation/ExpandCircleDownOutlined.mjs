import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ExpandCircleDownOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
            /*#__PURE__*/ jsx("path", {
                d: "M15.08,9.59L12,12.67L8.92,9.59L7.5,11l4.5,4.5l4.5-4.5L15.08,9.59z M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z"
            })
        ]
    });
});

export { ExpandCircleDownOutlined as default };
