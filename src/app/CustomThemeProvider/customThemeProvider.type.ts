import React from "react";

export interface ICustomThemeProviderRequiredProps {
    children: React.ReactNode
}

export interface ICustomThemeProviderOptionalProps {
}

export interface ICustomThemeProviderProps extends ICustomThemeProviderRequiredProps, ICustomThemeProviderOptionalProps {}