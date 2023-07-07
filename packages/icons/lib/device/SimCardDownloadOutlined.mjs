import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SimCardDownloadOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M18,2h-8L4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,4v16H6V8.83L10.83,4H18z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M16,13l-4,4l-4-4l1.41-1.41L11,13.17V9.02L13,9v4.17l1.59-1.59L16,13z"
                        })
                    ]
                })
            })
        ]
    });
});

export { SimCardDownloadOutlined as default };
