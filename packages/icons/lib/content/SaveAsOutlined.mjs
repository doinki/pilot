import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SaveAsOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M21 12.4V7l-4-4H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h7.4l2-2H5V5h11.17L19 7.83v6.57l2-2zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.26.26-.85.85-1.77-1.77.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71z"
        })
    });
});

export { SaveAsOutlined as default };
