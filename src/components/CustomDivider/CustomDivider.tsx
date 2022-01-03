import { Divider } from "@mui/material"
import { ICustomDividerOptionalProps, ICustomDividerProps, OrientationDividerEnum } from "./customDivider.type"

const defaultProps: ICustomDividerOptionalProps = {
    content: undefined,
    orientation: OrientationDividerEnum.HORIZONTAL,
    spacing: 1
}

const CustomDivider = ({
    content,
    orientation,
    spacing
}: ICustomDividerProps) => {
    
    return (<Divider sx={{
        marginTop: spacing,
        marginBottom: spacing
    }} orientation={orientation}>{content}</Divider>);
}

CustomDivider.defaultProps = defaultProps;

export default CustomDivider;