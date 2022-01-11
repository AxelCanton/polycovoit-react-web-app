import { divIcon } from "leaflet";
import { Marker as MarkerLeaflet } from "react-leaflet";
import Popup from "../Popup/Popup";
import { IMarkerOptionalProps, IMarkerProps } from "./marker.type";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderToString } from 'react-dom/server';

const defaultProps: IMarkerOptionalProps = {
    popupContent: null,
    color: null
}

const Marker = ({
    position,
    color,
    popupContent
}: IMarkerProps) => {
    const getIcon = () => {
        const icon = color 
        ? <LocationOnIcon style={{color: color}}/>
        : <LocationOnIcon color="primary"/>
        return divIcon({
            html: renderToString(icon),
            className: 'fade-in-markers'
        });
    }

    return (
        <MarkerLeaflet position={[position.latitude, position.longitude]} icon={getIcon()}>
            {popupContent ? <Popup content={popupContent}/> : <></>}
        </MarkerLeaflet>
      
    )
};

Marker.defaultProps = defaultProps;

export default Marker;