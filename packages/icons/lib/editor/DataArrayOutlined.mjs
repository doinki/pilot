import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DataArrayOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"
        })
    });
});

export { DataArrayOutlined as default };
