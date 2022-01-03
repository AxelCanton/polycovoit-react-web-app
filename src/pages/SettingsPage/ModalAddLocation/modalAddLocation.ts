export interface IModalAddLocationRequiredProps {
    isVisible: boolean,
    setIsVisible: (newValue: boolean) => void
}

export interface IModalAddLocationOptionalProps {

}

export interface IModalAddLocationProps extends IModalAddLocationRequiredProps, IModalAddLocationOptionalProps {}