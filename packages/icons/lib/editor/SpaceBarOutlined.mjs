import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SpaceBarOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M18 9v4H6V9H4v6h16V9h-2z"
        })
    });
});

export { SpaceBarOutlined as default };
