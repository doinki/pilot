import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const FastForwardOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    /*#__PURE__*/ jsx("path", {
                        d: "M15,9.86L18.03,12L15,14.14V9.86 M6,9.86L9.03,12L6,14.14V9.86 M13,6v12l8.5-6L13,6L13,6z M4,6v12l8.5-6L4,6L4,6z"
                    })
                ]
            })
        ]
    });
});

export { FastForwardOutlined as default };
