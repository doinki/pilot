import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AlignHorizontalLeftOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z"
        })
    });
});

export { AlignHorizontalLeftOutlined as default };
