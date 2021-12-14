import { Icon, icon } from "leaflet";
import { Marker as MarkerLeaflet } from "react-leaflet";
import { IMarkerProps } from "./marker.type";

const Marker = ({
    position
}: IMarkerProps) => {
    const getIcon = ():Icon => {
        return icon({
            iconUrl: './Map_marker.png',
            iconSize: [30,50]
        });
    }

    return (
        <MarkerLeaflet position={position} icon={getIcon()}/>
      
    )
}

export default Marker;