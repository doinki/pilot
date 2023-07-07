import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const EightKPlusOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                    children: /*#__PURE__*/ jsxs("g", {
                        children: [
                            /*#__PURE__*/ jsx("path", {
                                d: "M7,15h2c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v4C6,14.55,6.45,15,7,15z M7.5,10h1v1.5h-1V10z M7.5,12.5h1V14h-1V12.5z"
                            }),
                            /*#__PURE__*/ jsx("path", {
                                d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"
                            }),
                            /*#__PURE__*/ jsx("polygon", {
                                points: "12.5,12.75 14.25,15 16,15 13.75,12 16,9 14.25,9 12.5,11.25 12.5,9 11,9 11,15 12.5,15"
                            })
                        ]
                    })
                })
            })
        ]
    });
});

export { EightKPlusOutlined as default };
