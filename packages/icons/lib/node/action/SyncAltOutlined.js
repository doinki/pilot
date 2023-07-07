'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const SyncAltOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                    width: "24",
                    x: "0"
                })
            }),
            /*#__PURE__*/ jsxRuntime.jsx("g", {
                children: /*#__PURE__*/ jsxRuntime.jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "7.41,13.41 6,12 2,16 6,20 7.41,18.59 5.83,17 21,17 21,15 5.83,15"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "16.59,10.59 18,12 22,8 18,4 16.59,5.41 18.17,7 3,7 3,9 18.17,9"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = SyncAltOutlined;
