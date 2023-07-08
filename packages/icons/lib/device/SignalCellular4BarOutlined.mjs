import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SignalCellular4BarOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M2 22h20V2L2 22z"
        })
    });
});

export { SignalCellular4BarOutlined as default };
