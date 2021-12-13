import { EventChangeType } from "../../utils/types/event.type";

export interface IStringInputRequiredProps {
    value: string,
    onChange: (event: EventChangeType) => void
}

export interface IStringInputOptionalProps {
    disabled: boolean,
    placeholder: string,
    className: string
}

export interface IStringInputProps extends IStringInputRequiredProps, IStringInputOptionalProps {}

