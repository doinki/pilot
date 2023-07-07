import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CastleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                                d: "M21,9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1,0.9-2,2-2s2,0.9,2,2v3h9V9H21z M21,19h-5v-1 c0-2.21-1.79-4-4-4s-4,1.79-4,4v1H3v-6h4V7h10v6h4V19z"
                            })
                        }),
                        /*#__PURE__*/ jsx("g", {
                            children: /*#__PURE__*/ jsx("rect", {
                                height: "3",
                                width: "2",
                                x: "9",
                                y: "9"
                            })
                        }),
                        /*#__PURE__*/ jsx("g", {
                            children: /*#__PURE__*/ jsx("rect", {
                                height: "3",
                                width: "2",
                                x: "13",
                                y: "9"
                            })
                        })
                    ]
                })
            })
        ]
    });
});

export { CastleOutlined as default };
