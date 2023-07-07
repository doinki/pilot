import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const FileDownloadDoneOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            points: "20.13,5.41 18.72,4 9.53,13.19 5.28,8.95 3.87,10.36 9.53,16.02"
                        }),
                        /*#__PURE__*/ jsx("rect", {
                            height: "2",
                            width: "14",
                            x: "5",
                            y: "18"
                        })
                    ]
                })
            })
        ]
    });
});

export { FileDownloadDoneOutlined as default };
