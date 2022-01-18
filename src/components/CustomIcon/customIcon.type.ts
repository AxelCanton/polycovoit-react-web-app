export interface ICustomIconRequiredProps {
    path: string
}

export interface ICustomIconOptionalProps {
    width: number,
    height: number
}

export interface ICustomIconProps extends ICustomIconOptionalProps, ICustomIconRequiredProps {}