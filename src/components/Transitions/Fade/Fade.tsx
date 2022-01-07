import { Fade as MuiFade } from '@mui/material';
import React from 'react';
import { IFadeOptionalProps, IFadeProps } from './fade.type';

type Props = { children: React.ReactNode };

const WrapComponent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
      <div ref={ref} {...props}>
        {props.children}
      </div>
    );
});

const defaultProps: IFadeOptionalProps = {
    show: true
}

const Fade = ({
    children,
    show
}: IFadeProps) => {

    return (
    <MuiFade in={show}>
        <WrapComponent>{children}</WrapComponent>
    </MuiFade>
    );
}

Fade.defaultProps = defaultProps;

export default Fade;