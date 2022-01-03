export interface IModalRequiredProps {
    isVisible: boolean,
    close: () => void,
    children: React.ReactNode
}

export interface IModalOptionalProps {}

export interface IModalProps extends IModalOptionalProps, IModalRequiredProps {}