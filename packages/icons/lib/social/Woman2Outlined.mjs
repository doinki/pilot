import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const Woman2Outlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    children: /*#__PURE__*/ jsxs("g", {
                        children: [
                            /*#__PURE__*/ jsx("path", {
                                d: "M13.94,8.31C13.62,7.52,12.85,7,12,7s-1.62,0.52-1.94,1.31L7,16h3.5v6h3v-6H17L13.94,8.31z"
                            }),
                            /*#__PURE__*/ jsx("circle", {
                                cx: "12",
                                cy: "4",
                                r: "2"
                            })
                        ]
                    })
                })
            })
        ]
    });
});

export { Woman2Outlined as default };
