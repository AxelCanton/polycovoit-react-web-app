import Marker from "../common/Marker/Marker";
import { IMarkersProps } from "./markers.type";

const Markers = ({
    markersData,
    renderPopupContent
}: IMarkersProps) => {

    return (
        <>
        {markersData.map((data) => {
            return <Marker position={data} popupContent={renderPopupContent(data)}></Marker>
        })}
        </>
    );
}

export default Markers;