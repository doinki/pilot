import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ViewTimelineOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M6 15h6v2H6zm6-8h6v2h-6zm-3 4h6v2H9z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
            })
        ]
    });
});

export { ViewTimelineOutlined as default };
