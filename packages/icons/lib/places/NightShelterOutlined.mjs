import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const NightShelterOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm3 9h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2zm-5.25.5c-.69 0-1.25.56-1.25 1.25S9.06 15 9.75 15 11 14.44 11 13.75s-.56-1.25-1.25-1.25z"
        })
    });
});

export { NightShelterOutlined as default };
