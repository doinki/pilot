import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SignalCellularConnectedNoInternet4BarOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsx("g", {
                    children: /*#__PURE__*/ jsx("g", {
                        children: /*#__PURE__*/ jsx("path", {
                            d: "M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M2,22h16V8h4V2L2,22z"
                        })
                    })
                })
            })
        ]
    });
});

export { SignalCellularConnectedNoInternet4BarOutlined as default };
