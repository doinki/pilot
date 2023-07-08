import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const FlourescentOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-9h2v3h-2zm6.2863 4.3989 1.7897-1.8024 1.4192 1.4092-1.7897 1.8024zM11 19h2v3h-2zm6.29-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM3.4947 6.0091 4.902 4.602l1.789 1.789-1.4074 1.407zm-.0026 12.0672 1.8024-1.7897 1.4092 1.4192-1.8023 1.7897z"
        })
    });
});

export { FlourescentOutlined as default };
