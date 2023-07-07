import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const FilterListOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
            })
        ]
    });
});

export { FilterListOutlined as default };
