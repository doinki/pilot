import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PauseCircleFilledOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsx("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }),
                    /*#__PURE__*/ jsx("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }),
                    /*#__PURE__*/ jsx("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    })
                ]
            }),
            /*#__PURE__*/ jsxs("g", {
                children: [
                    /*#__PURE__*/ jsx("g", {}),
                    /*#__PURE__*/ jsx("path", {
                        d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,16H9V8h2V16z M15,16h-2V8h2V16z"
                    })
                ]
            })
        ]
    });
});

export { PauseCircleFilledOutlined as default };
