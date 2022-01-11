import { Speciality } from "../../utils/enum/speciality.enum";
import CustomIcon from "../CustomIcon/CustomIcon";
import { IPolytechIconProps } from "./polytechIcon.type";

const SPECIALITY_FOLDER = 'specialityIcon';

const PolytechIcon = ({
    speciality
}: IPolytechIconProps) => {
    switch(speciality){
        case Speciality.IG:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logoig.png`}/>
        case Speciality.MEA:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logomea.png`}/>        
        case Speciality.STE:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logoste.png`}/>
        case Speciality.SE:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logose.png`}/>
        case Speciality.DO:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logodo.png`}/>
        case Speciality.EGC:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logoegc.png`}/>
        case Speciality.GBA:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logogba.png`}/>
        case Speciality.MAT:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logomat.png`}/>
        case Speciality.MI:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logomi.png`}/>
        case Speciality.MSI:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logomsi.png`}/>
        case Speciality.PEIP:
            return <CustomIcon path={`${SPECIALITY_FOLDER}/logopeip.png`}/>
        default:
            return <></>;
    }
};

export default PolytechIcon;