import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ScreenshotMonitorOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M20,3H4C2.89,3,2,3.89,2,5v12c0,1.1,0.89,2,2,2h4v2h8v-2h4c1.1,0,2-0.9,2-2V5C22,3.89,21.1,3,20,3z M20,17H4V5h16V17z"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "6.5,7.5 9,7.5 9,6 5,6 5,10 6.5,10"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "19,12 17.5,12 17.5,14.5 15,14.5 15,16 19,16"
                        })
                    ]
                })
            })
        ]
    });
});

export { ScreenshotMonitorOutlined as default };
