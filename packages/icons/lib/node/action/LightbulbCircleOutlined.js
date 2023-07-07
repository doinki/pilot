'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const LightbulbCircleOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M12,19c0.83,0,1.5-0.67,1.5-1.5h-3C10.5,18.33,11.17,19,12,19z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "1.5",
                            width: "6",
                            x: "9",
                            y: "15"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M12,5c-2.76,0-5,2.24-5,5c0,1.64,0.8,3.09,2.03,4h5.95C16.2,13.09,17,11.64,17,10C17,7.24,14.76,5,12,5z M14.43,12.5H9.57 C8.89,11.84,8.5,10.95,8.5,10c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5C15.5,10.95,15.11,11.84,14.43,12.5z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = LightbulbCircleOutlined;
