import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const AutoAwesomeMosaicOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
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
                            d: "M3,5v14c0,1.1,0.89,2,2,2h6V3H5C3.89,3,3,3.9,3,5z M9,19H5V5h4V19z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M19,3h-6v8h8V5C21,3.9,20.1,3,19,3z M19,9h-4V5h4V9z"
                        }),
                        /*#__PURE__*/ jsx("path", {
                            d: "M13,21h6c1.1,0,2-0.9,2-2v-6h-8V21z M15,15h4v4h-4V15z"
                        })
                    ]
                })
            })
        ]
    });
});

export { AutoAwesomeMosaicOutlined as default };
