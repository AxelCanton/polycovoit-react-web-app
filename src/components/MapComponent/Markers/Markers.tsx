import Marker from "../common/Marker/Marker";
import { IMarkersOptionalProps, IMarkersProps } from "./markers.type";

const defaultProps: IMarkersOptionalProps = {
    renderMarkerColor: null,
    renderPopupContent: null,
}

const Markers = ({
    markersData,
    renderMarkerColor,
    renderPopupContent
}: IMarkersProps) => {

    return (
        <>
        {markersData.map((data, index) => {
            return <Marker
            key={index}
            position={data}
            popupContent={renderPopupContent ? renderPopupContent(data) : null}
            color={renderMarkerColor ? renderMarkerColor(data) : null}
            />
        })}
        </>
    );
};

Markers.defaultProps = defaultProps;

export default Markers;