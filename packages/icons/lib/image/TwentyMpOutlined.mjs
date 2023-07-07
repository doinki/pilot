import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TwentyMpOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M13.5,12.5v6H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1H13.5z M16.5,15.5H15V14h1.5V15.5z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M14,11.5h2.5c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1H14c-0.55,0-1,0.45-1,1v4C13,11.05,13.45,11.5,14,11.5z M14.5,7H16v3 h-1.5V7z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M11,10H8V9h2c0.55,0,1-0.45,1-1V6.5c0-0.55-0.45-1-1-1H6.5V7h3v1h-2c-0.55,0-1,0.45-1,1v2.5H11V10z"
                        })
                    ]
                })
            })
        ]
    });
});

export { TwentyMpOutlined as default };
