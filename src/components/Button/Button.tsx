import { IButtonOptionalProps, IButtonProps } from './button.type';
import { LoadingButton as MuiButton } from '@mui/lab';
import { ButtonColor, ButtonVariant } from '../../utils/enum/button.enum';

const defaultProps: IButtonOptionalProps = {
    color: ButtonColor.primary,
    variant: ButtonVariant.Contained,
    disabled: false,
    isLoading: false,
    autoFocus: false
}

const Button = ({
    autoFocus,
    color,
    variant,
    disabled,
    isLoading,
    onClick,
    children,
}: IButtonProps) => {

    return <MuiButton
    color={color}
    loading={isLoading}
    onClick={onClick}
    variant={variant}
    disabled={disabled}
    autoFocus={autoFocus}>
        {children}
    </MuiButton>;
}

Button.defaultProps = defaultProps;

export default Button;