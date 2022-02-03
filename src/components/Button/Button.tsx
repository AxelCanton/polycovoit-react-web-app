import { IButtonOptionalProps, IButtonProps } from './button.type';
import { LoadingButton as MuiButton } from '@mui/lab';
import { ButtonColor, ButtonSize, ButtonType, ButtonVariant } from '../../utils/enum/button.enum';

const defaultProps: IButtonOptionalProps = {
    color: ButtonColor.primary,
    variant: ButtonVariant.Contained,
    disabled: false,
    size: ButtonSize.Medium,
    isLoading: false,
    autoFocus: false,
    startIcon: null,
    endIcon: null,
    type: ButtonType.Button,
    onClick: () => {}
}

const Button = ({
    autoFocus,
    color,
    variant,
    disabled,
    size,
    isLoading,
    onClick,
    startIcon,
    endIcon,
    children,
    type
}: IButtonProps) => {

    return <MuiButton
    size={size}
    type={type}
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