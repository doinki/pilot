import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SmartScreenOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    width: "24",
                    y: "0"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("rect", {
                            height: "1.5",
                            width: "1.5",
                            x: "12.5",
                            y: "11.25"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "1.5",
                            width: "1.5",
                            x: "15",
                            y: "11.25"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "1.5",
                            width: "1.5",
                            x: "10",
                            y: "11.25"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "1.5",
                            width: "1.5",
                            x: "7.5",
                            y: "11.25"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M4,17H3V7h1V17z M18,17H6V7h12V17z M21,17h-1V7h1V17z"
                        })
                    ]
                })
            })
        ]
    });
});

export { SmartScreenOutlined as default };
