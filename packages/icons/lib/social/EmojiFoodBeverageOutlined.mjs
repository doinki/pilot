import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const EmojiFoodBeverageOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M2 19h18v2H2zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h3v1.4L7.19 7.85c-.12.09-.19.24-.19.39v4.26c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5V8.24c0-.15-.07-.3-.19-.39L10 6.4V5h6v8zM9.5 7.28l1.5 1.2V12H8V8.48l1.5-1.2zM20 8h-2V5h2v3z"
        })
    });
});

export { EmojiFoodBeverageOutlined as default };
