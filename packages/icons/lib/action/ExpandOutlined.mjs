import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ExpandOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "16",
                            x: "4",
                            y: "20"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "16",
                            x: "4",
                            y: "2"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "9.41,13.59 8,15 12,19 16,15 14.59,13.59 13,15.17 13,8.83 14.59,10.41 16,9 12,5 8,9 9.41,10.41 11,8.83 11,15.17"
                        })
                    ]
                })
            })
        ]
    });
});

export { ExpandOutlined as default };
