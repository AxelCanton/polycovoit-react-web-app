import { Gender } from "../../utils/enum/gender.enum";

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
import { IGenderIconProps } from "./polytechIcon.type";

const GenderIcon = ({gender}: IGenderIconProps) => {
    switch(gender){
        case Gender.Male:
            return (<MaleIcon color="secondary" />)
        case Gender.Female:
            return (<FemaleIcon color="secondary" />)
        case Gender.Other:
            return (<TransgenderIcon color="secondary" />)
        default:
            return <></>
    }
}

export default GenderIcon;