import * as React from 'react';
import { ButtonVariant, IButtonOptionalProps, IButtonProps } from './button.type';
import { LoadingButton as MuiButton } from '@mui/lab';

const defaultProps: IButtonOptionalProps = {
    variant: ButtonVariant.Contained,
    disabled: false,
    isLoading: false,
    autoFocus: false
}

const Button = ({
    autoFocus,
    variant,
    disabled,
    isLoading,
    onClick,
    children,
}: IButtonProps) => {

    return <MuiButton loading={isLoading} onClick={onClick} variant={variant} disabled={disabled} autoFocus={autoFocus}>{children}</MuiButton>;
}

Button.defaultProps = defaultProps;

export default Button;