export interface IDialogRequiredProps {
    open: boolean,
    onClose: () => void,
    onAccept: () => void,
}

export interface IDialogOptionalProps {
    title?: string,
    message?: string,
    onDeny: () => void,
}

export interface IDialogProps extends IDialogOptionalProps, IDialogRequiredProps {}