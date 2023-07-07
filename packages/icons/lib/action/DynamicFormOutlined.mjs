import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DynamicFormOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsxs("g", {
            children: [
                /*#__PURE__*/ jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                }),
                /*#__PURE__*/ jsx("path", {
                    d: "M13,11H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h9V11z M4,9h7V6H4V9z M15,20H4c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h11V20z M4,18h9v-3H4V18z M22,9h-2l2-5h-7v7h2v9L22,9z M4.75,17.25h1.5v-1.5h-1.5V17.25z M4.75,8.25h1.5v-1.5h-1.5V8.25z"
                })
            ]
        })
    });
});

export { DynamicFormOutlined as default };
