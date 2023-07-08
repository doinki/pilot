import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SegmentOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z"
        })
    });
});

export { SegmentOutlined as default };
