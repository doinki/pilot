import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MicOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    /*#__PURE__*/ jsx("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }),
                    /*#__PURE__*/ jsx("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }),
                    /*#__PURE__*/ jsx("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    })
                ]
            }),
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsx("g", {}),
                    /*#__PURE__*/ jsxs("g", {
                        children: [
                            /*#__PURE__*/ jsx("path", {
                                d: "M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z"
                            }),
                            /*#__PURE__*/ jsx("path", {
                                d: "M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

export { MicOutlined as default };
