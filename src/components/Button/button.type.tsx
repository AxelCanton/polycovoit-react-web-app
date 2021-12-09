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
    variant: ButtonVariant,
    disabled: boolean,
}

export interface IButtonProps extends IButtonRequiredProps, IButtonOptionalProps {}