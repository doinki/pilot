import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PhishingOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("g", {
                    children: /*#__PURE__*/ jsx("path", {
                        d: "M17,6.18V2h-2v4.18C13.84,6.6,13,7.7,13,9s0.84,2.4,2,2.82V15c0,2.21-1.79,4-4,4s-4-1.79-4-4v-1.17l1.59,1.59L10,14L5,9v6 c0,3.31,2.69,6,6,6s6-2.69,6-6v-3.18c1.16-0.41,2-1.51,2-2.82S18.16,6.6,17,6.18z M16,10c-0.55,0-1-0.45-1-1s0.45-1,1-1 s1,0.45,1,1S16.55,10,16,10z"
                    })
                })
            })
        ]
    });
});

export { PhishingOutlined as default };
