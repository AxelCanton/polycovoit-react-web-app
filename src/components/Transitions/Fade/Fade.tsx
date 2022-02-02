import { Fade as MuiFade } from '@mui/material';
import React from 'react';
import { WrapComponent } from '../WrapComponent';
import { IFadeOptionalProps, IFadeProps } from './fade.type';

const defaultProps: IFadeOptionalProps = {
    show: true,
    timeout: 1000
}

const Fade = ({
    children,
    show,
    timeout
}: IFadeProps) => {

    return (
    <MuiFade timeout={timeout} in={show}>
        <WrapComponent>{children}</WrapComponent>
    </MuiFade>
    );
}

Fade.defaultProps = defaultProps;

export default Fade;