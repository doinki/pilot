import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SegmentOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("path", {
                    d: "M9,18h12v-2H9V18z M3,6v2h18V6H3z M9,13h12v-2H9V13z"
                })
            })
        ]
    });
});

export { SegmentOutlined as default };
