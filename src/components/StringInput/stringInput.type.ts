export interface IStringInputRequiredProps {
    value: string,
    onChange: (value: string) => void
}

export interface IStringInputOptionalProps {
    disabled: boolean,
    fullWidth: boolean,
    label: string,
    required: boolean,
    type: string,
    className: string
}

export interface IStringInputProps extends IStringInputRequiredProps, IStringInputOptionalProps {}

