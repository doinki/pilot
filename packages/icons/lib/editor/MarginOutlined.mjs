import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MarginOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("g", {
                    children: /*#__PURE__*/ jsx("path", {
                        d: "M3,3v18h18V3H3z M19,19H5V5h14V19z M11,7h2v2h-2V7z M7,7h2v2H7V7z M15,7h2v2h-2V7z M7,11h2v2H7V11z M11,11h2v2h-2V11z M15,11h2v2h-2V11z"
                    })
                })
            })
        ]
    });
});

export { MarginOutlined as default };
