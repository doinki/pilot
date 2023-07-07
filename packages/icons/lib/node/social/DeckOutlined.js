'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const DeckOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                            d: "M22,9L12,2L2,9h9v13h2V9H22z M12,4.44L15.66,7H8.34L12,4.44z"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "4.14,12 2.18,12.37 3,16.74 3,22 5,22 5.02,18 7,18 7,22 9,22 9,16 4.9,16"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("polygon", {
                            points: "19.1,16 15,16 15,22 17,22 17,18 18.98,18 19,22 21,22 21,16.74 21.82,12.37 19.86,12"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = DeckOutlined;
