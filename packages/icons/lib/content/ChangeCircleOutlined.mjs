import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const ChangeCircleOutlined = /*#__PURE__*/ forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        ref: ref,
        ...props,
        children: /*#__PURE__*/ jsx("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.17-5.24-1.1-1.1c.71-1.33.53-3.01-.59-4.13C13.79 8.84 12.9 8.5 12 8.5c-.03 0-.06.01-.09.01L13 9.6l-1.06 1.06-2.83-2.83L11.94 5 13 6.06l-.96.96c1.27.01 2.53.48 3.5 1.44 1.7 1.71 1.91 4.36.63 6.3zm-1.28 1.41L12.06 19 11 17.94l.95-.95c-1.26-.01-2.52-.5-3.48-1.46-1.71-1.71-1.92-4.35-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13.7.7 1.63 1.04 2.56 1.01L11 14.4l1.06-1.06 2.83 2.83z"
        })
    });
});

export { ChangeCircleOutlined as default };
