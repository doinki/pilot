import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DashboardCustomizeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("path", {
                            d: "M3,11h8V3H3V11z M5,5h4v4H5V5z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M13,3v8h8V3H13z M19,9h-4V5h4V9z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M3,21h8v-8H3V21z M5,15h4v4H5V15z"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "18,13 16,13 16,16 13,16 13,18 16,18 16,21 18,21 18,18 21,18 21,16 18,16"
                        })
                    ]
                })
            })
        ]
    });
});

export { DashboardCustomizeOutlined as default };
