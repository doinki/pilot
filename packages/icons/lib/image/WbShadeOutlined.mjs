import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const WbShadeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    children: /*#__PURE__*/ jsx("path", {
                        d: "M14,12v2.5l5.5,5.5H22L14,12z M14,20h3l-3-3V20z M8,4l-6,6h2v10h8V10h2L8,4z M9,14H7v-4h2V14z"
                    })
                })
            })
        ]
    });
});

export { WbShadeOutlined as default };
