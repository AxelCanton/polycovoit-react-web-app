import React from "react";

export interface IFormLayoutRequiredProps {
    children: JSX.Element | JSX.Element[]
}

export interface IFormLayoutOptionalProps {
    footer: React.ReactNode,
    title?: string
}

export interface IFormLayoutProps extends IFormLayoutOptionalProps, IFormLayoutRequiredProps {}