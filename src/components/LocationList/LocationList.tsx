import { List, ListItem, ListSubheader,ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { ILocationListProps } from "./locationList.type";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';

const defaultProps = {
    onLocationClick: () => {},
    title: "Liste de vos addresses",
}

const LocationList = ({
    locations,
    onLocationClick,
    title
}: ILocationListProps) => {

    return (
        <List subheader={title && <ListSubheader>{title}</ListSubheader>}>
            {locations.map((loc) => (
                <ListItem divider secondaryAction={
                    <IconButton onClick={() => onLocationClick(loc)} edge="end" aria-label="delete">
                      <DeleteIcon color="error"/>
                    </IconButton>
                }>
                    <ListItemIcon>
                        <LocationOnIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={loc.city} secondary={loc.postalCode} />
                </ListItem>
            ))}
        </List>
    );
}

LocationList.defaultProps = defaultProps;

export default LocationList;