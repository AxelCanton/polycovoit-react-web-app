import { Gender } from "../../utils/enum/gender.enum";
import { Speciality } from "../../utils/enum/speciality.enum";

export interface IPolytechIconRequiredProps {
    speciality: Speciality
}

export interface IPolytechIconOptionalProps {}

export interface IPolytechIconProps extends IPolytechIconOptionalProps, IPolytechIconRequiredProps {}

export interface IGenderIconRequiredProps {
    gender: Gender;
}

export interface IGenderIconOptionalProps {}

export interface IGenderIconProps extends IGenderIconRequiredProps, IGenderIconOptionalProps {}