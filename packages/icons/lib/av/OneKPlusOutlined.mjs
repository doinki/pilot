import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const OneKPlusOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                                d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"
                            }),
                            /*#__PURE__*/ jsx("polygon", {
                                points: "7.5,15 9,15 9,9 6,9 6,10.5 7.5,10.5"
                            }),
                            /*#__PURE__*/ jsx("polygon", {
                                points: "12,12.75 13.75,15 15.5,15 13.25,12 15.5,9 13.75,9 12,11.25 12,9 10.5,9 10.5,15 12,15"
                            })
                        ]
                    })
                })
            })
        ]
    });
});

export { OneKPlusOutlined as default };
