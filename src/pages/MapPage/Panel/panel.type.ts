import { Speciality } from "../../../utils/enum/speciality.enum";

export interface IPanelRequiredProps {
    selectedSpecialities: Speciality[],
    addSpeciality: (speciality: Speciality) => void,
    removeSpeciality: (speciality: Speciality) => void
}

export interface IPanelOptionalProps {
}

export interface IPanelProps extends IPanelRequiredProps, IPanelOptionalProps {}