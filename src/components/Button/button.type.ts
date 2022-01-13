import React from "react";
import { ButtonColor, ButtonVariant } from "../../utils/enum/button.enum";
import { EventClickType } from "../../utils/types/event.type";

export interface IButtonRequiredProps {
    children: React.ReactNode,
    onClick: (event: EventClickType) => void
}

export interface IButtonOptionalProps {
    autoFocus: boolean
    color: ButtonColor
    variant: ButtonVariant,
    disabled: boolean,
    isLoading: boolean,
    startIcon: React.ReactNode,
    endIcon: React.ReactNode

}

export interface IButtonProps extends IButtonRequiredProps, IButtonOptionalProps {}