import { Box, IconButton, List, ListItem, ListItemIcon,ListItemText, Tooltip } from "@mui/material";
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
        <>
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
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse'
        }}>
        <Tooltip title="Envoyer une demande">
            <IconButton onClick={() => setSelectedPopupData(data)}>
                <ForwardToInboxIcon color="primary" />
            </IconButton>
        </Tooltip>
        </Box>
        </>
    );
};

LocationUser.defaultProps = defaultProps;

export default LocationUser;