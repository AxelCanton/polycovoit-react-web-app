export interface IFadeRequiredProps {
    children: React.ReactNode
}

export interface IFadeOptionalProps {
    show: boolean,
    timeout: number
}

export interface IFadeProps extends IFadeRequiredProps, IFadeOptionalProps {}

