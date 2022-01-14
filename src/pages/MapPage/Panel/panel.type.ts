import { IJsonLocation } from "../../../interfaces/location.interface";
import { Speciality } from "../../../utils/enum/speciality.enum";

export interface IPanelRequiredProps {
    selectedSpecialities: Speciality[],
    addSpeciality: (speciality: Speciality) => void,
    removeSpeciality: (speciality: Speciality) => void,
    setSelectedLocation: (location: IJsonLocation | null) => void
}

export interface IPanelOptionalProps {
}

export interface IPanelProps extends IPanelRequiredProps, IPanelOptionalProps {}