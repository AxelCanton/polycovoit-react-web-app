import { LatLng } from "leaflet";
import Marker from "../common/Marker/Marker";
import { IMarkersProps } from "./markers.type";

const Markers = ({
    markersData
}: IMarkersProps) => {
    return (
        <>
        {markersData.map((data) => {
            return <Marker position={new LatLng(data.latitude, data.longitude)}></Marker>
        })}
        </>
    );
}

export default Markers;