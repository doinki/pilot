import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const GMobiledataOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("path", {
                    d: "M0,0h24v24H0V0z",
                    fill: "none"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsx("g", {
                    children: /*#__PURE__*/ jsx("path", {
                        d: "M12,11v2h2v2H9V9h7c0-1.1-0.9-2-2-2H9C7.9,7,7,7.9,7,9v6c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2v-4H12z"
                    })
                })
            })
        ]
    });
});

export { GMobiledataOutlined as default };
