import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SosOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M13.5,7h-3c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h3c1.1,0,2-0.9,2-2V9C15.5,7.9,14.6,7,13.5,7z M13.5,15h-3V9h3V15z M1,15h4 v-2H3c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h4v2H3v2h2c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2H1V15z M17,15h4v-2h-2c-1.1,0-2-0.9-2-2V9 c0-1.1,0.9-2,2-2h4v2h-4v2h2c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2h-4V15z"
                })
            })
        ]
    });
});

export { SosOutlined as default };
