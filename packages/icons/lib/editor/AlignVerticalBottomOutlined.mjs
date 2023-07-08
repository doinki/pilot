import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AlignVerticalBottomOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"
        })
    });
});

export { AlignVerticalBottomOutlined as default };
