import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const HeightOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsx("g", {}),
                    /*#__PURE__*/ jsx("polygon", {
                        points: "13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01"
                    })
                ]
            })
        ]
    });
});

export { HeightOutlined as default };
