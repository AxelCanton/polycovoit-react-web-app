import { EventClickType } from "../../utils/types/event.type";

export interface ILoginFormRequiredProps {
    onLoginClick: (email: string, password: string) => void
}

export interface ILoginFormOptionalProps {}

export interface ILoginFormProps extends ILoginFormOptionalProps, ILoginFormRequiredProps {}