import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DragHandleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z"
        })
    });
});

export { DragHandleOutlined as default };
