import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const NetworkPingOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    d: "M12,14.67L3.41,6.09L2,7.5l8.5,8.5H4v2h16v-2h-6.5l5.15-5.15C18.91,10.95,19.2,11,19.5,11c1.38,0,2.5-1.12,2.5-2.5 S20.88,6,19.5,6S17,7.12,17,8.5c0,0.35,0.07,0.67,0.2,0.97L12,14.67z"
                })
            })
        ]
    });
});

export { NetworkPingOutlined as default };
