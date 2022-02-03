import { Grid, List, ListItem, ListItemIcon,ListItemText, Tooltip, ListItemButton, Typography } from "@mui/material";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { ILocationUserOptionalProps, ILocationUserProps } from "./locationUser.type";
import { Gender } from "../../../../utils/enum/gender.enum";
import { retrieveFrenchGender } from "../../../../utils/retrieveFrenchGender";
import PolytechIcon from "../../../../components/PolytechIcon/PolytechIcon";
import GenderIcon from "../../../../components/PolytechIcon/GenderIcon";
import { useEffect } from "react";
import { TypographyVariantEnum } from "../../../../utils/enum/typography.variant.enum";

const defaultProps: ILocationUserOptionalProps = {
    setSelectedPopupData: () => {}
}

const LocationUser = ({
    data,
    setSelectedPopupData
}: ILocationUserProps) => {

    const isUserLoc = data.isUserLoc? true : false;

    
    return (
        <>
        { !isUserLoc && 
            
            <Tooltip title="Envoyer une demande" sx={{minWidth:250}}>
                <ListItemButton disableGutters onClick={() => setSelectedPopupData(data)}>
                    <Grid container>
                        <Grid container direction="column" alignItems="flex-start" item xs={10}>
                            <List dense disablePadding>
                                <ListItem>
                                    <ListItemIcon>
                                        <GenderIcon gender={data.userGender}/>
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
            
        }
        { isUserLoc && 
            <Tooltip title="Cette adresse vous appartient" sx={{minWidth:250}}>
            <ListItemButton disableGutters>
                <Grid container>
                    <Grid container direction="column" alignItems="flex-start" item xs={10}>
                        <List dense disablePadding>
                            <ListItem>
                                <ListItemText primary={"Une de vos adresses !"} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PolytechIcon speciality={data.userSpeciality}/>
                                </ListItemIcon>
                                <ListItemText primary={data.userSpeciality} />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </ListItemButton>
        </Tooltip>
        }
        </>
    );
};

LocationUser.defaultProps = defaultProps;

export default LocationUser;