import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AddToDriveOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    width: "24",
                    x: "0"
                })
            }),
            /*#__PURE__*/ jsx("g", {
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("path", {
                            d: "M19,11c0.17,0,0.33,0.01,0.49,0.02L15,3H9l5.68,9.84C15.77,11.71,17.3,11,19,11z"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "8.15,4.52 2,15.5 5,21 11.33,10.03"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M13.2,15.5H9.9L6.73,21h7.81C13.58,19.94,13,18.54,13,17C13,16.48,13.07,15.98,13.2,15.5z"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "20,16 20,13 18,13 18,16 15,16 15,18 18,18 18,21 19,21 20,21 20,18 23,18 23,16"
                        })
                    ]
                })
            })
        ]
    });
});

export { AddToDriveOutlined as default };
