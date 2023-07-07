'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ViewKanbanOutlined = /*#__PURE__*/ react.forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "10",
                            width: "2",
                            x: "7",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "5",
                            width: "2",
                            x: "11",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("rect", {
                            height: "8",
                            width: "2",
                            x: "15",
                            y: "7"
                        }),
                        /*#__PURE__*/ jsxRuntime.jsx("path", {
                            d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"
                        })
                    ]
                })
            })
        ]
    });
});

module.exports = ViewKanbanOutlined;
