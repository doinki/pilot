import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PolylineOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6h-6zM12 4h2v2h-2V4zM7 14H5v-2h2v2zm12 6h-2v-2h2v2z"
        })
    });
});

export { PolylineOutlined as default };
