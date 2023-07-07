import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const StarOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsx("path", {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }),
                    /*#__PURE__*/ jsx("path", {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    })
                ]
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                })
            })
        ]
    });
});

export { StarOutlined as default };
