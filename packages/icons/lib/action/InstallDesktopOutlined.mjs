import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const InstallDesktopOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsx("path", {
                            d: "M20,17H4V5h8V3H4C2.89,3,2,3.89,2,5v12c0,1.1,0.89,2,2,2h4v2h8v-2h4c1.1,0,2-0.9,2-2v-3h-2V17z"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "17,14 22,9 20.59,7.59 18,10.17 18,3 16,3 16,10.17 13.41,7.59 12,9"
                        })
                    ]
                })
            })
        ]
    });
});

export { InstallDesktopOutlined as default };
