import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MarkAsUnreadOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M16.23,7h2.6c-0.06-0.47-0.36-0.94-0.79-1.17L10.5,2L2.8,5.83C2.32,6.09,2,6.64,2,7.17V15c0,1.1,0.9,2,2,2V7.4L10.5,4 L16.23,7z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M20,8H7c-1.1,0-2,0.9-2,2v9c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2v-9C22,8.9,21.1,8,20,8z M20,19H7v-7l6.5,3.33L20,12V19z M13.5,13.33L7,10h13L13.5,13.33z"
                        })
                    ]
                })
            })
        ]
    });
});

export { MarkAsUnreadOutlined as default };
