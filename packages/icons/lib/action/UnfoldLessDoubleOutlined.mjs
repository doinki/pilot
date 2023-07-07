import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const UnfoldLessDoubleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                children: /*#__PURE__*/ jsxs("g", {
                    children: [
                        /*#__PURE__*/ jsx("polygon", {
                            points: "16.58,1.41 15.16,0 11.99,3.17 8.82,0 7.41,1.41 11.99,6"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "16.58,6.41 15.16,5 11.99,8.17 8.82,5 7.41,6.41 11.99,11"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "7.42,17.59 8.84,19 12.01,15.83 15.18,19 16.59,17.59 12.01,13"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "7.42,22.59 8.84,24 12.01,20.83 15.18,24 16.59,22.59 12.01,18"
                        })
                    ]
                })
            })
        ]
    });
});

export { UnfoldLessDoubleOutlined as default };
