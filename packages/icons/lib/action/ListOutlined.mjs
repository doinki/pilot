import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ListOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
            })
        ]
    });
});

export { ListOutlined as default };
