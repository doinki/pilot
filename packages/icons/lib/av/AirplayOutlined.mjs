import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AirplayOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsx("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }),
                    /*#__PURE__*/ jsx("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }),
                    /*#__PURE__*/ jsx("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    })
                ]
            }),
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsx("g", {}),
                    /*#__PURE__*/ jsxs("g", {
                        children: [
                            /*#__PURE__*/ jsx("polygon", {
                                points: "6,22 18,22 12,16"
                            }),
                            /*#__PURE__*/ jsx("path", {
                                d: "M21,3H3C1.9,3,1,3.9,1,5v12c0,1.1,0.9,2,2,2h4v-2H3V5h18v12h-4v2h4c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

export { AirplayOutlined as default };
