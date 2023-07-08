import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const KeyboardOptionKeyOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"
        })
    });
});

export { KeyboardOptionKeyOutlined as default };
