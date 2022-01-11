import { ICustomIconProps } from "./customIcon.type"

const CustomIcon = ({
    path
}: ICustomIconProps) => {
    return (
        <img style={{
            width: 25,
            height: 25
        }} src={process.env.PUBLIC_URL + '/' + path} alt="icon"/>
    )
};

export default CustomIcon;