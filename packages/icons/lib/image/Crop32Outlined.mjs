import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const Crop32Outlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("g", {
                    children: /*#__PURE__*/ jsx("g", {
                        children: /*#__PURE__*/ jsx("path", {
                            d: "M19,6H5C3.9,6,3,6.9,3,8v8c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8C21,6.9,20.1,6,19,6z M19,16H5V8h14V16z"
                        })
                    })
                })
            })
        ]
    });
});

export { Crop32Outlined as default };
