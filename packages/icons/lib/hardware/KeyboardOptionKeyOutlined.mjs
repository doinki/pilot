import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const KeyboardOptionKeyOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "6",
                            x: "15",
                            y: "5"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "9,5 3,5 3,7 7.85,7 14.77,19 21,19 21,17 15.93,17"
                        })
                    ]
                })
            })
        ]
    });
});

export { KeyboardOptionKeyOutlined as default };
