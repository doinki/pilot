import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SwitchAccessShortcutOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("rect", {
                fill: "none",
                height: "24",
                width: "24"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M7.06,8.94L5,8l2.06-0.94L8,5l0.94,2.06L11,8L8.94,8.94L8,11L7.06,8.94z M8,21l0.94-2.06L11,18l-2.06-0.94L8,15l-0.94,2.06 L5,18l2.06,0.94L8,21z M4.37,12.37L3,13l1.37,0.63L5,15l0.63-1.37L7,13l-1.37-0.63L5,11L4.37,12.37z M12,12c0-3.09,1.38-5.94,3.44-8 L12,4V2h7v7h-2l0-3.72c-1.8,1.74-3,4.2-3,6.72c0,3.32,2.1,6.36,5,7.82L19,22C14.91,20.41,12,16.35,12,12z"
            })
        ]
    });
});

export { SwitchAccessShortcutOutlined as default };
