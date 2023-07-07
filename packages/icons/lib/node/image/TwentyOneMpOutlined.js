'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const TwentyOneMpOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsx("rect", {
                    fill: "none",
                    height: "24",
                    width: "24"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "14.5,11.5 16,11.5 16,5.5 13,5.5 13,7 14.5,7"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M12,10H9V9h2c0.55,0,1-0.45,1-1V6.5c0-0.55-0.45-1-1-1H7.5V7h3v1h-2c-0.55,0-1,0.45-1,1v2.5H12V10z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M15,17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1h-3.5v6H15V17z M15,14h1.5v1.5H15V14z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = TwentyOneMpOutlined;
