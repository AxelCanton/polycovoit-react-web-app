import * as React from 'react';
import { ButtonVariant, IButtonOptionalProps, IButtonProps } from './button.type';
import { Button as MuiButton } from '@mui/material';

const defaultProps: IButtonOptionalProps = {
    variant: ButtonVariant.Contained,
    disabled: false
}

const Button = ({
    variant,
    disabled,
    onClick,
    children
}: IButtonProps) => {

    return <MuiButton onClick={onClick} variant={variant} disabled={disabled}>{children}</MuiButton>;
}

Button.defaultProps = defaultProps;

export default Button;