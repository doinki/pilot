import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MeetingRoomOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2z"
            })
        ]
    });
});

export { MeetingRoomOutlined as default };
