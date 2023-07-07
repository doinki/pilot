import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DomainVerificationOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsx("polygon", {
                            points: "16.6,10.88 15.18,9.46 10.94,13.71 8.82,11.58 7.4,13 10.94,16.54"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.11,4,19,4z M19,18H5V8h14V18z"
                        })
                    ]
                })
            })
        ]
    });
});

export { DomainVerificationOutlined as default };
