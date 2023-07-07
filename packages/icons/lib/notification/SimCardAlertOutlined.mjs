import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SimCardAlertOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    children: /*#__PURE__*/ jsx("g", {
                        children: /*#__PURE__*/ jsxs("g", {
                            children: [
                                /*#__PURE__*/ jsx("path", {
                                    d: "M18,2h-8L4.02,8L4,20c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,20H6V8.83L10.83,4H18V20z"
                                }),
                                /*#__PURE__*/ jsx("rect", {
                                    height: "2",
                                    width: "2",
                                    x: "11",
                                    y: "15"
                                }),
                                /*#__PURE__*/ jsx("rect", {
                                    height: "5",
                                    width: "2",
                                    x: "11",
                                    y: "8"
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
});

export { SimCardAlertOutlined as default };
