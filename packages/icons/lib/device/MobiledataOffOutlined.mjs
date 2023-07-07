import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MobiledataOffOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsx("polygon", {
                            points: "16,6.82 17.59,8.41 19,7 15,3 11,7 12.41,8.41 14,6.82 14,11.17 16,13.17"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "1.39,4.22 8,10.83 8,17.18 6.41,15.59 5,17 9,21 13,17 11.59,15.59 10,17.18 10,12.83 19.78,22.61 21.19,21.19 2.81,2.81"
                        })
                    ]
                })
            })
        ]
    });
});

export { MobiledataOffOutlined as default };
