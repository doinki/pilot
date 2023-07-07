import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const NetworkCellOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("path", {
                    d: "M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z"
                })
            })
        ]
    });
});

export { NetworkCellOutlined as default };
