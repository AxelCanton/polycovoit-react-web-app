import { IButtonOptionalProps, IButtonProps } from './button.type';
import { LoadingButton as MuiButton } from '@mui/lab';
import { ButtonColor, ButtonVariant } from '../../utils/enum/button.enum';

const defaultProps: IButtonOptionalProps = {
    color: ButtonColor.primary,
    variant: ButtonVariant.Contained,
    disabled: false,
    isLoading: false,
    autoFocus: false,
    startIcon: null,
    endIcon: null
}

const Button = ({
    autoFocus,
    color,
    variant,
    disabled,
    isLoading,
    onClick,
    startIcon,
    endIcon,
    children,
}: IButtonProps) => {

    return <MuiButton
    color={color}
    loading={isLoading}
    onClick={onClick}
    variant={variant}
    disabled={disabled}
    autoFocus={autoFocus}
    startIcon={startIcon}
    endIcon={endIcon}
    >
        {children}
    </MuiButton>;
}

Button.defaultProps = defaultProps;

export default Button;