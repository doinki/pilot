import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ScreenshotMonitorOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H4V5h16v12z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"
            })
        ]
    });
});

export { ScreenshotMonitorOutlined as default };
