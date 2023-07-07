import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const Shop2Outlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M3,9H1v11c0,1.11,0.89,2,2,2h16v-2H3V9z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M18,5V3c0-1.11-0.89-2-2-2h-4c-1.11,0-2,0.89-2,2v2H5v11c0,1.11,0.89,2,2,2h14c1.11,0,2-0.89,2-2V5H18z M12,3h4v2h-4V3z M21,16H7V7h14V16z"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "12,8 12,15 17.5,11.5"
                        })
                    ]
                })
            })
        ]
    });
});

export { Shop2Outlined as default };
