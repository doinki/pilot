import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const RMobiledataOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("g", {
                    children: /*#__PURE__*/ jsx("path", {
                        d: "M7.8,7.2L9,10H7L5.87,7.33H4V10H2V2h5c1.13,0,2,0.87,2,2v1.33C9,6.13,8.47,6.87,7.8,7.2z M7,4H4v1.33h3V4z"
                    })
                })
            })
        ]
    });
});

export { RMobiledataOutlined as default };
