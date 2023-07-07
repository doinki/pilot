import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const InputOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxs("g", {
                fill: "none",
                children: [
                    /*#__PURE__*/ jsx("path", {
                        d: "M0 0h24v24H0V0z"
                    }),
                    /*#__PURE__*/ jsx("path", {
                        d: "M0 0h24v24H0V0z",
                        opacity: ".87"
                    })
                ]
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3zM21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"
            })
        ]
    });
});

export { InputOutlined as default };
