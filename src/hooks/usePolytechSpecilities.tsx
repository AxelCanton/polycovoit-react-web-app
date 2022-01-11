import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { Speciality } from "../utils/enum/speciality.enum";

interface ISpecialityData {
    short: Speciality,
    name: string,
    color: string
}

const usePolytechSpecialities = () => {
    const theme = useTheme();
    
    const specialities: ISpecialityData[] = useMemo(() => [
        {
            short: Speciality.IG,
            name: 'Informatique et gestion',
            color: theme.palette.specialities.ig
        },
        {
            short: Speciality.MEA,
            name: 'Microélectronique et automatique',
            color: theme.palette.specialities.mea
        },
        {
            short: Speciality.GBA,
            name: 'Génie bologique et agroalimentaire',
            color: theme.palette.specialities.gba
        },
        {
            short: Speciality.MAT,
            name: 'Matériaux',
            color: theme.palette.specialities.mat
        },
        {
            short: Speciality.MI,
            name: 'Mécanique et interactions',
            color: theme.palette.specialities.mi
        },
        {
            short: Speciality.STE,
            name: 'Science et technologie de l\'eau',
            color: theme.palette.specialities.ste
        },
        {
            short: Speciality.DO,
            name: 'Développement informatique et exploitation opérationnelle',
            color: theme.palette.specialities.do
        },
        {
            short: Speciality.EGC,
            name: 'Eau et génie civil',
            color: theme.palette.specialities.egc
        },
        {
            short: Speciality.MSI,
            name: 'Mécanique et structures industrielles',
            color: theme.palette.specialities.msi
        },
        {
            short: Speciality.SE,
            name: 'Systèmes embarqués',
            color: theme.palette.specialities.se
        },
        {
            short: Speciality.PEIP,
            name: 'Parcours des écoles d\'ingénieurs Polytech',
            color: theme.palette.specialities.peip
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ], []);

    const retrieveFullName = (short: Speciality) => {
        const speciality = specialities.find(element => element.short === short);
        return speciality ? speciality.name : "";
    }

    const retrieveList = (short: Speciality) => {
        return specialities.map(element => element.short);
    }

    const retrieveColor = (short: Speciality) => {
        const speciality = specialities.find(element => element.short === short);
        return speciality ? speciality.color : "";
    }
    
    return {
        retrieveFullName,
        retrieveList,
        retrieveColor
    }
};

export default usePolytechSpecialities;