import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const WidthNormalOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h4v12H4zm6 0V6h4v12h-4zm10 0h-4V6h4v12z"
        })
    });
});

export { WidthNormalOutlined as default };
