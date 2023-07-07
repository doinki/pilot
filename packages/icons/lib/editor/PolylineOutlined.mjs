import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PolylineOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    d: "M15,16v1.26l-6-3v-3.17L11.7,8H16V2h-6v4.9L7.3,10H3v6h5l7,3.5V22h6v-6H15z M12,4h2v2h-2V4z M7,14H5v-2h2V14z M19,20h-2v-2 h2V20z"
                })
            })
        ]
    });
});

export { PolylineOutlined as default };
