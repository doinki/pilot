import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DataSaverOffOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        d: "M13,2.05v3.03c3.39,0.49,6,3.39,6,6.92c0,0.9-0.18,1.75-0.48,2.54l2.6,1.53C21.68,14.83,22,13.45,22,12 C22,6.82,18.05,2.55,13,2.05z M12,19c-3.87,0-7-3.13-7-7c0-3.53,2.61-6.43,6-6.92V2.05C5.94,2.55,2,6.81,2,12 c0,5.52,4.47,10,9.99,10c3.31,0,6.24-1.61,8.06-4.09l-2.6-1.53C16.17,17.98,14.21,19,12,19z"
                    })
                })
            })
        ]
    });
});

export { DataSaverOffOutlined as default };
