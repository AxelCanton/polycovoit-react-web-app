import { Grid, List, ListItem, ListItemIcon,ListItemText, Tooltip, ListItemButton } from "@mui/material";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { ILocationUserOptionalProps, ILocationUserProps } from "./locationUser.type";
import { Gender } from "../../../../utils/enum/gender.enum";
import { retrieveFrenchGender } from "../../../../utils/retrieveFrenchGender";
import PolytechIcon from "../../../../components/PolytechIcon/PolytechIcon";

const defaultProps: ILocationUserOptionalProps = {
    setSelectedPopupData: () => {}
}

const LocationUser = ({
    data,
    setSelectedPopupData
}: ILocationUserProps) => {
    
    const GenderIcon = () => {
        switch(data.userGender){
            case Gender.Male:
                return <MaleIcon color="secondary" />
            case Gender.Female:
                return <FemaleIcon color="secondary" />
            case Gender.Other:
                return <TransgenderIcon color="secondary" />
            default:
                <></>
        }
        return <></>;
    }
    return (
        <Tooltip title="Envoyer une demande">
            <ListItemButton disableGutters onClick={() => setSelectedPopupData(data)}>
                <Grid container>
                    <Grid container direction="column" alignItems="flex-start" item xs={10}>
                        <List dense disablePadding>
                            <ListItem>
                                <ListItemIcon>
                                    <GenderIcon/>
                                </ListItemIcon>
                                <ListItemText primary={retrieveFrenchGender(data.userGender)} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PolytechIcon speciality={data.userSpeciality}/>
                                </ListItemIcon>
                                <ListItemText primary={data.userSpeciality} />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid direction="column" alignItems="flex-end" justifyContent="center" container item xs={2}>
                        <ForwardToInboxIcon color="primary" />
                    </Grid>
                </Grid>
            </ListItemButton>
        </Tooltip>
    );
};

LocationUser.defaultProps = defaultProps;

export default LocationUser;