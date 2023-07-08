import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const LineAxisOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "m22 7.43-1.41-1.41-4.03 4.53L9.5 4 2 11.51l1.5 1.5 6.14-6.15 5.59 5.18-1.73 1.95-4-4L2 17.5 3.5 19l6-6.01 4 4 3.19-3.59 3.9 3.61L22 15.6l-3.98-3.7z"
        })
    });
});

export { LineAxisOutlined as default };
