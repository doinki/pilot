import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ArrowRightAltOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
        })
    });
});

export { ArrowRightAltOutlined as default };
