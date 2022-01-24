export interface IModalRequiredProps {
    isVisible: boolean,
    close: () => void,
    children: React.ReactNode
}

export interface IModalOptionalProps {
    width: number | string
}

export interface IModalProps extends IModalOptionalProps, IModalRequiredProps {}