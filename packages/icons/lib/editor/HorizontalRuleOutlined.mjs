import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const HorizontalRuleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxs("g", {
            children: [
                /*#__PURE__*/ jsx("rect", {
                    fill: "none",
                    fillRule: "evenodd",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ jsx("g", {
                    children: /*#__PURE__*/ jsx("rect", {
                        fillRule: "evenodd",
                        height: "2",
                        width: "16",
                        x: "4",
                        y: "11"
                    })
                })
            ]
        })
    });
});

export { HorizontalRuleOutlined as default };
