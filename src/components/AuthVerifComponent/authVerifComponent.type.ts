import React from "react";

export interface IAuthVerifComponentRequiredProps {
    children: React.ReactNode
}

export interface IAuthVerifComponentOptionalProps {}

export interface IAuthVerifComponentProps extends IAuthVerifComponentOptionalProps, IAuthVerifComponentRequiredProps {}