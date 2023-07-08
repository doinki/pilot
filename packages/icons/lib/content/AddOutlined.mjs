import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AddOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
        })
    });
});

export { AddOutlined as default };
