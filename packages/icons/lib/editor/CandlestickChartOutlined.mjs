import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CandlestickChartOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M9,4H7v2H5v12h2v2h2v-2h2V6H9V4z M9,16H7V8h2V16z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M19,8h-2V4h-2v4h-2v7h2v5h2v-5h2V8z M17,13h-2v-3h2V13z"
                        })
                    ]
                })
            })
        ]
    });
});

export { CandlestickChartOutlined as default };
