import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AmpStoriesOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsx("g", {}),
                    /*#__PURE__*/ jsxs("g", {
                        children: [
                            /*#__PURE__*/ jsx("path", {
                                d: "M7,19h10V4H7V19z M9,6h6v11H9V6z"
                            }),
                            /*#__PURE__*/ jsx("rect", {
                                height: "11",
                                width: "2",
                                x: "3",
                                y: "6"
                            }),
                            /*#__PURE__*/ jsx("rect", {
                                height: "11",
                                width: "2",
                                x: "19",
                                y: "6"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});

export { AmpStoriesOutlined as default };
