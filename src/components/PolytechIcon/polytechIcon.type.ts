import { Speciality } from "../../utils/enum/speciality.enum";

export interface IPolytechIconRequiredProps {
    speciality: Speciality
}

export interface IPolytechIconOptionalProps {}

export interface IPolytechIconProps extends IPolytechIconOptionalProps, IPolytechIconRequiredProps {}