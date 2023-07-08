import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const RemoveOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M19 13H5v-2h14v2z"
        })
    });
});

export { RemoveOutlined as default };
