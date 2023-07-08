import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SquareOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M3 3v18h18V3H3zm16 16H5V5h14v14z"
        })
    });
});

export { SquareOutlined as default };
