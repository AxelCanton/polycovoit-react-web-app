import { EventChangeType } from "../../utils/types/event.type";

export interface IStringInputRequiredProps {
    value: string,
    onChange: (event: EventChangeType) => void
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

