export interface IMenuButtonRequiredProps {
    text: string
    onClick: () => void
}

export interface IMenuButtonOptionalProps {}

export interface IMenuButtonProps extends IMenuButtonRequiredProps, IMenuButtonOptionalProps {}
