import React from "react";
import { ButtonColor, ButtonSize, ButtonType, ButtonVariant } from "../../utils/enum/button.enum";
import { EventClickType } from "../../utils/types/event.type";

export interface IButtonRequiredProps {
    children: React.ReactNode,
}

export interface IButtonOptionalProps {
    autoFocus: boolean
    color: ButtonColor
    size: ButtonSize
    variant: ButtonVariant,
    disabled: boolean,
    isLoading: boolean,
    startIcon: React.ReactNode,
    endIcon: React.ReactNode,
    type: ButtonType,
    onClick: (event: EventClickType) => void
}

export interface IButtonProps extends IButtonRequiredProps, IButtonOptionalProps {}