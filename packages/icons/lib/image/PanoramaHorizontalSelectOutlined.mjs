import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PanoramaHorizontalSelectOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    d: "M12,5.5c-3.89,0-6.95-0.84-8.69-1.43C2.67,3.85,2,4.33,2,5.02L2,19c0,0.68,0.66,1.17,1.31,0.95 C5.36,19.26,8.1,18.5,12,18.5c3.87,0,6.66,0.76,8.69,1.45C21.34,20.16,22,19.68,22,19l0-14c0-0.68-0.66-1.17-1.31-0.95 C18.66,4.73,15.86,5.5,12,5.5z"
                })
            })
        ]
    });
});

export { PanoramaHorizontalSelectOutlined as default };
