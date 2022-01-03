import { Icon, icon } from "leaflet";
import { Marker as MarkerLeaflet } from "react-leaflet";
import { IMarkerProps } from "./marker.type";

const Marker = ({
    position
}: IMarkerProps) => {
    // const getIcon = ():Icon => {
    //     return icon({
    //         iconUrl: require('./public/Map_marker.png'),
    //         iconSize: [30,30]
    //     })
    // }

    return (
        // <MarkerLeaflet position={position} icon={getIcon()}/>
        <></>
    )
}

export default Marker;