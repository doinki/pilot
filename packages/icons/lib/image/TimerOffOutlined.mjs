import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TimerOffOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "6",
                            x: "9",
                            y: "1"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M12,6c3.87,0,7,3.13,7,7c0,0.94-0.19,1.83-0.52,2.65l1.5,1.5C20.63,15.91,21,14.5,21,13c0-2.12-0.74-4.07-1.97-5.61 l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-1.5,0-2.91,0.37-4.15,1.02l1.5,1.5 C10.17,6.19,11.06,6,12,6z"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "11,8.17 13,10.17 13,8 11,8"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M2.81,2.81L1.39,4.22l3.4,3.4C3.67,9.12,3,10.98,3,13c0,4.97,4.02,9,9,9c2.02,0,3.88-0.67,5.38-1.79l2.4,2.4l1.41-1.41 L2.81,2.81z M12,20c-3.87,0-7-3.13-7-7c0-1.47,0.45-2.83,1.22-3.95l9.73,9.73C14.83,19.55,13.47,20,12,20z"
                        })
                    ]
                })
            })
        ]
    });
});

export { TimerOffOutlined as default };
