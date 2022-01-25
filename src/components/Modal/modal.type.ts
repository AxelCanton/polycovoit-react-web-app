export interface IModalRequiredProps {
    isVisible: boolean,
    close: () => void,
    children: React.ReactNode
}

export interface IModalOptionalProps {
    width: number | string,
    iconButton: boolean
}

export interface IModalProps extends IModalOptionalProps, IModalRequiredProps {}