import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TypeSpecimenOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M12.19 12.2h3.63l.8 2.3h1.56l-3.38-9h-1.6l-3.38 9h1.56l.81-2.3zm1.77-5.03h.08l1.31 3.72h-2.69l1.3-3.72z"
            })
        ]
    });
});

export { TypeSpecimenOutlined as default };
