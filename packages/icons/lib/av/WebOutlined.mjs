import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const WebOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        d: "M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,9h10.5v3.5H4V9z M4,14.5 h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z"
                    })
                ]
            })
        ]
    });
});

export { WebOutlined as default };
