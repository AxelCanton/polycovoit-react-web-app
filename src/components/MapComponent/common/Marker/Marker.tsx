import { Icon, icon } from "leaflet";
import { Marker as MarkerLeaflet } from "react-leaflet";
import Popup from "../Popup/Popup";
import { IMarkerOptionalProps, IMarkerProps } from "./marker.type";

const defaultProps: IMarkerOptionalProps = {
    popupContent: null
}

const Marker = ({
    position,
    popupContent
}: IMarkerProps) => {
    const getIcon = ():Icon => {
        return icon({
            iconUrl: './Map_marker.png',
            iconSize: [30,50]
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