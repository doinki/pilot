import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CommitOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M16.9 11c-.46-2.28-2.48-4-4.9-4s-4.44 1.72-4.9 4H2v2h5.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4H22v-2h-5.1zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        })
    });
});

export { CommitOutlined as default };
