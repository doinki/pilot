import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DehazeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"
        })
    });
});

export { DehazeOutlined as default };
