import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const Wifi2BarOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("g", {
                display: "none",
                children: /*#__PURE__*/ jsx("rect", {
                    display: "inline",
                    fill: "none",
                    height: "24",
                    width: "24"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M12,10c3.03,0,5.78,1.23,7.76,3.22l-2.12,2.12C16.2,13.9,14.2,13,12,13c-2.2,0-4.2,0.9-5.64,2.35l-2.12-2.12 C6.22,11.23,8.97,10,12,10z M12,16c-1.38,0-2.63,0.56-3.53,1.46L12,21l3.53-3.54C14.63,16.56,13.38,16,12,16z"
                })
            })
        ]
    });
});

export { Wifi2BarOutlined as default };
