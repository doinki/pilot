import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const SensorDoorOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M18 4v16H6V4h12m0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2zm-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5z"
        })
    });
});

export { SensorDoorOutlined as default };
