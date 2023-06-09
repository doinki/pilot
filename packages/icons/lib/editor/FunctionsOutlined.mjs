import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const FunctionsOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z"
        })
    });
});

export { FunctionsOutlined as default };
