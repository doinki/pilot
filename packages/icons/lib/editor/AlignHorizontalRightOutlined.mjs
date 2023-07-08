import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AlignHorizontalRightOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z"
        })
    });
});

export { AlignHorizontalRightOutlined as default };
