export interface ICenteredLayoutRequiredProps {
    children: JSX.Element | JSX.Element[]
}

export interface ICenteredLayoutOptionalProps {
    width: number | string
}

export interface ICenteredLayoutProps extends ICenteredLayoutOptionalProps, ICenteredLayoutRequiredProps {}