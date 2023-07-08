import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const HeightOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z"
        })
    });
});

export { HeightOutlined as default };
