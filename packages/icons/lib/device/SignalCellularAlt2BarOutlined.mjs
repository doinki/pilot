import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SignalCellularAlt2BarOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    children: /*#__PURE__*/ jsx("path", {
                        d: "M5,14h3v6H5V14z M11,9h3v11h-3V9z"
                    })
                })
            })
        ]
    });
});

export { SignalCellularAlt2BarOutlined as default };
