import { List, ListItem, Stack, Checkbox, Tooltip, FormControlLabel } from "@mui/material";
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
        <Stack direction="column" justifyContent="space-around" sx={{ width: '30vw' }}>
            <List dense sx={{ width: '30%', minWidth: '40px' }}>
            {retrieveList().map((speciality) => (
                <Tooltip placement="right" key={speciality} title={speciality}>
                    <ListItem>
                        <FormControlLabel
                        labelPlacement="start"
                        control={<Checkbox checked={selectedSpecialities.includes(speciality)} onChange={(event) => onCheckboxChange(event.target.checked, speciality)} />}
                        disableTypography
                        label={<PolytechIcon speciality={speciality} />}
                        />
                    </ListItem>
                 </Tooltip>
            ))}
            </List>
            <LocationSearchInput setLocation={setSelectedLocation} />
        </Stack>
    );
};

export default Panel;