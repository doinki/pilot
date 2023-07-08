import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const VillaOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2zM5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z"
        })
    });
});

export { VillaOutlined as default };
