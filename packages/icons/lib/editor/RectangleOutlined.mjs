import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const RectangleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M2 4v16h20V4H2zm18 14H4V6h16v12z"
        })
    });
});

export { RectangleOutlined as default };
