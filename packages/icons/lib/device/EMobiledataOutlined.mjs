import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const EMobiledataOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"
        })
    });
});

export { EMobiledataOutlined as default };
