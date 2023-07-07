import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ElectricMeterOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsx("path", {
                            d: "M21,11c0-4.97-4.03-9-9-9s-9,4.03-9,9c0,3.92,2.51,7.24,6,8.48V22h2v-2.06c0.33,0.04,0.66,0.06,1,0.06s0.67-0.02,1-0.06 V22h2v-2.52C18.49,18.24,21,14.92,21,11z M12,18c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S15.86,18,12,18z"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "8",
                            x: "8",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "12.75,10 9.75,13 11,14.25 9.75,15.5 11.25,17 14.25,14 13,12.75 14.25,11.5"
                        })
                    ]
                })
            })
        ]
    });
});

export { ElectricMeterOutlined as default };
