import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ViewModuleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M3 5v14h18V5H3zm16 6h-3.33V7H19v4zm-5.33 0h-3.33V7h3.33v4zM8.33 7v4H5V7h3.33zM5 17v-4h3.33v4H5zm5.33 0v-4h3.33v4h-3.33zm5.34 0v-4H19v4h-3.33z"
        })
    });
});

export { ViewModuleOutlined as default };
