import { Divider } from "@mui/material"
import { ICustomDividerOptionalProps, ICustomDividerProps, OrientationDividerEnum } from "./customDivider.type"

const defaultProps: ICustomDividerOptionalProps = {
    content: undefined,
    orientation: OrientationDividerEnum.HORIZONTAL,
    spacing: 1, 
    spacingDown: undefined,
}

const CustomDivider = ({
    content,
    orientation,
    spacing,
    spacingDown,
}: ICustomDividerProps) => {
    
    return (<Divider sx={{
        marginTop: spacing,
        marginBottom: spacingDown? spacingDown:spacing,
    }} orientation={orientation}>{content}</Divider>);
}

CustomDivider.defaultProps = defaultProps;

export default CustomDivider;