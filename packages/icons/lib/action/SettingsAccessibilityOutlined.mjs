import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SettingsAccessibilityOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    d: "M20.5,4c-2.61,0.7-5.67,1-8.5,1S6.11,4.7,3.5,4L3,6c1.86,0.5,4,0.83,6,1v12h2v-6h2v6h2V7c2-0.17,4.14-0.5,6-1L20.5,4z M12,4c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,4,12,4z M7,24h2v-2H7V24z M11,24h2v-2h-2V24z M15,24h2v-2h-2V24z"
                })
            })
        ]
    });
});

export { SettingsAccessibilityOutlined as default };
