import { ICustomIconOptionalProps, ICustomIconProps } from "./customIcon.type"

const defaultProps: ICustomIconOptionalProps = {
    width: 25,
    height: 25,
}
const CustomIcon = ({
    path,
    width,
    height
}: ICustomIconProps) => {
    return (
        <img style={{
            width: width,
            height: height
        }} src={process.env.PUBLIC_URL + '/' + path} alt="icon"/>
    )
};

CustomIcon.defaultProps = defaultProps;

export default CustomIcon;