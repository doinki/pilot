import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UpgradeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z"
        })
    });
});

export { UpgradeOutlined as default };
