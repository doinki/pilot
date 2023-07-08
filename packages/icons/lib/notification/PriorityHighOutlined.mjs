import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PriorityHighOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("circle", {
                cx: "12",
                cy: "19",
                r: "2"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M10 3h4v12h-4z"
            })
        ]
    });
});

export { PriorityHighOutlined as default };
