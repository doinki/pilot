import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PendingOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "7",
                            cy: "12",
                            r: "1.5"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "12",
                            cy: "12",
                            r: "1.5"
                        }),
                        /*#__PURE__*/ jsx("circle", {
                            cx: "17",
                            cy: "12",
                            r: "1.5"
                        })
                    ]
                })
            })
        ]
    });
});

export { PendingOutlined as default };
