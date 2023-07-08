import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ShortTextOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M4 9h16v2H4V9zm0 4h10v2H4v-2z"
        })
    });
});

export { ShortTextOutlined as default };
