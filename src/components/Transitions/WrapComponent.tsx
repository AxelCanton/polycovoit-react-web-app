import React from "react";

type Props = { children: React.ReactNode };

// Used by mui transition component which needs a children which can hold a ref
export const WrapComponent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
      <div ref={ref} {...props}>
        {props.children}
      </div>
    );
});