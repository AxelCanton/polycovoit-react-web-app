import { EventClickType } from "../../utils/types/event.type";

export enum ButtonVariant {
    Text = 'text',
    Contained = 'contained',
    Outlined = 'outlined',
}

export interface IButtonRequiredProps {
    children: React.ReactNode,
    onClick: (event: EventClickType) => void
}

export interface IButtonOptionalProps {
    autoFocus: boolean
    variant: ButtonVariant,
    disabled: boolean,
    isLoading: boolean,
}

export interface IButtonProps extends IButtonRequiredProps, IButtonOptionalProps {}