import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AdfScannerOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zM8 6h8v6H8V6zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z"
            }),
            /*#__PURE__*/ jsx("circle", {
                cx: "18",
                cy: "16",
                r: "1"
            })
        ]
    });
});

export { AdfScannerOutlined as default };
