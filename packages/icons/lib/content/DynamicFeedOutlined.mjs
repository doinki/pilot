import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DynamicFeedOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsx("g", {}),
                    /*#__PURE__*/ jsxs("g", {
                        children: [
                            /*#__PURE__*/ jsx("path", {
                                d: "M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z"
                            }),
                            /*#__PURE__*/ jsx("path", {
                                d: "M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z"
                            }),
                            /*#__PURE__*/ jsx("path", {
                                d: "M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsxs("g", {
                display: "none",
                children: [
                    /*#__PURE__*/ jsx("g", {
                        display: "inline"
                    }),
                    /*#__PURE__*/ jsxs("g", {
                        display: "inline",
                        children: [
                            /*#__PURE__*/ jsx("path", {
                                d: "M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z"
                            }),
                            /*#__PURE__*/ jsx("path", {
                                d: "M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z"
                            }),
                            /*#__PURE__*/ jsx("path", {
                                d: "M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

export { DynamicFeedOutlined as default };
