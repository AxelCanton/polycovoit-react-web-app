import { LatLng } from "leaflet";
import { Marker as MarkerLeaflet } from "react-leaflet";

const Marker = (position: LatLng) => {
    return (
        <MarkerLeaflet position={position} />
    )
}

export default Marker;