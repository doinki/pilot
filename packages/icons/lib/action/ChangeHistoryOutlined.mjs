import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ChangeHistoryOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z"
        })
    });
});

export { ChangeHistoryOutlined as default };
