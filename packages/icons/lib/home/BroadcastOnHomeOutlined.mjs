import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const BroadcastOnHomeOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ jsx("path", {
                d: "M22 6c0-1.1-.9-2-2-2H4v2h16v2.59c.73.29 1.4.69 2 1.17V6zM8 9H3c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-9c0-.5-.5-1-1-1zm-1 9H4v-7h3v7zm10.75-1.03c.3-.23.5-.57.5-.97 0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25c0 .4.2.75.5.97V22h1.5v-5.03z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M17 13.5c1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.31-.73 1.76l1.06 1.06C20.55 18.1 21 17.1 21 16c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.1.45 2.1 1.17 2.83l1.06-1.06c-.45-.45-.73-1.08-.73-1.77 0-1.38 1.12-2.5 2.5-2.5z"
            }),
            /*#__PURE__*/ jsx("path", {
                d: "M17 9.5c-3.59 0-6.5 2.91-6.5 6.5 0 1.79.73 3.42 1.9 4.6l1.06-1.06C12.56 18.63 12 17.38 12 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.37-.56 2.62-1.46 3.52l1.07 1.06c1.17-1.18 1.89-2.8 1.89-4.58 0-3.59-2.91-6.5-6.5-6.5z"
            })
        ]
    });
});

export { BroadcastOnHomeOutlined as default };
