import { List, ListItem, Stack, Checkbox, Tooltip, FormControlLabel } from "@mui/material";
import React from "react";
import PolytechIcon from "../../../components/PolytechIcon/PolytechIcon";
import usePolytechSpecialities from "../../../hooks/usePolytechSpecilities";
import { Speciality } from "../../../utils/enum/speciality.enum";
import { IPanelProps } from "./panel.type";

const Panel = ({
    selectedSpecialities,
    addSpeciality,
    removeSpeciality
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
        <Stack direction="column" justifyContent="space-around">
            <List dense sx={{ width: '30%' }}>
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
        </Stack>
    );
};

export default Panel;