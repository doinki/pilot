import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AutoAwesomeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    width: "24",
                    x: "0"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("polygon", {
                            points: "19,9 20.25,6.25 23,5 20.25,3.75 19,1 17.75,3.75 15,5 17.75,6.25"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "19,15 17.75,17.75 15,19 17.75,20.25 19,23 20.25,20.25 23,19 20.25,17.75"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M11.5,9.5L9,4L6.5,9.5L1,12l5.5,2.5L9,20l2.5-5.5L17,12L11.5,9.5z M9.99,12.99L9,15.17l-0.99-2.18L5.83,12l2.18-0.99 L9,8.83l0.99,2.18L12.17,12L9.99,12.99z"
                        })
                    ]
                })
            })
        ]
    });
});

export { AutoAwesomeOutlined as default };
