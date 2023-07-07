import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DoorSlidingOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("path", {
                    d: "M10,13H8v-2h2V13z M16,11h-2v2h2V11z M21,19v2H3v-2h1V5c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v14H21z M11,5H6v14h5V5z M18,5 h-5v14h5V5z"
                })
            })
        ]
    });
});

export { DoorSlidingOutlined as default };
