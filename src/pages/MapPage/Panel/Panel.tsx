import { Stack, Checkbox, Tooltip, FormControlLabel, Grid, Typography } from "@mui/material";
import CustomDivider from "../../../components/CustomDivider/CustomDivider";
import LocationSearchInput from "../../../components/LocationSearchInput/LocationSearchInput";
import PolytechIcon from "../../../components/PolytechIcon/PolytechIcon";
import usePolytechSpecialities from "../../../hooks/usePolytechSpecilities";
import { Speciality } from "../../../utils/enum/speciality.enum";
import { IPanelProps } from "./panel.type";

const Panel = ({
    selectedSpecialities,
    addSpeciality,
    removeSpeciality,
    setSelectedLocation
}: IPanelProps) => {
    const { retrieveList } = usePolytechSpecialities();

    const onCheckboxChange = (isAdded: boolean, speciality: Speciality) => {
        if (isAdded) {
            addSpeciality(speciality);
        } else {
            removeSpeciality(speciality);
        }
    };

    return (
        <Stack direction="column" justifyContent="space-around" sx={{ width: '20vw', padding: '20px'}}>
            <Typography variant="h5">Filtrer par spécialité</Typography>
            <CustomDivider spacing={2}></CustomDivider>
            <Grid container spacing={2} sx={{marginBottom:'20px'}}>
            {retrieveList().map((speciality) => (
                    <Grid key={speciality} item xs={4}>
                        <Tooltip placement="right" key={speciality} title={speciality}>
                        <FormControlLabel
                        labelPlacement="start"
                        control={<Checkbox checked={selectedSpecialities.includes(speciality)} onChange={(event) => onCheckboxChange(event.target.checked, speciality)} />}
                        disableTypography
                        label={<PolytechIcon speciality={speciality} />}
                        />
                        </Tooltip>
                    </Grid>
            ))}
            </Grid>
            <Typography variant="h5">Filtrer par code postal</Typography>
            <CustomDivider spacing={2}></CustomDivider>
            <LocationSearchInput setLocation={setSelectedLocation} />
        </Stack>
    );
};

export default Panel;