import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const GppMaybeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("path", {
                            d: "M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "2",
                            x: "11",
                            y: "14"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "5",
                            width: "2",
                            x: "11",
                            y: "7"
                        })
                    ]
                })
            })
        ]
    });
});

export { GppMaybeOutlined as default };
