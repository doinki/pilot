import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const QuickreplyOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsx("g", {
                            children: /*#__PURE__*/ jsx("path", {
                                d: "M4,17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-2H5.17L4,17.17z"
                            })
                        }),
                        /*#__PURE__*/ jsx("g", {
                            children: /*#__PURE__*/ jsx("polygon", {
                                points: "22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23"
                            })
                        })
                    ]
                })
            })
        ]
    });
});

export { QuickreplyOutlined as default };
