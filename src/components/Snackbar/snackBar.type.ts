import { SeverityEnum } from "../../utils/enum/severity.enum";

export interface ISnackBarRequiredProps {
    open: boolean,
    onClose: () => void
    message: string,
    severity: SeverityEnum

}

export interface ISnackBarOptionalProps {}

export interface ISnackBarProps extends ISnackBarOptionalProps, ISnackBarRequiredProps {}