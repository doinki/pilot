import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const BrowseGalleryOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                        /*#__PURE__*/ jsx("path", {
                            d: "M9,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9S13.97,3,9,3z M9,19c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7 S12.86,19,9,19z"
                        }),
                        /*#__PURE__*/ jsx("polygon", {
                            points: "10,7 8,7 8,12.41 11.79,16.21 13.21,14.79 10,11.59"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M17.99,3.52v2.16C20.36,6.8,22,9.21,22,12c0,2.79-1.64,5.2-4.01,6.32v2.16C21.48,19.24,24,15.91,24,12 C24,8.09,21.48,4.76,17.99,3.52z"
                        })
                    ]
                })
            })
        ]
    });
});

export { BrowseGalleryOutlined as default };
