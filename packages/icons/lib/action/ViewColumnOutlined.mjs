import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ViewColumnOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33V7h3.33v10zM19 17h-3.33V7H19v10z"
        })
    });
});

export { ViewColumnOutlined as default };
