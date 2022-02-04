import Marker from "../common/Marker/Marker";
import { IMarkersOptionalProps, IMarkersProps } from "./markers.type";
import MarkerClusterGroup from 'react-leaflet-markercluster';

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
        <MarkerClusterGroup polygonOptions={{ stroke: false, color: 'transparent' }}>
            {markersData.map((data, index) => {
                return <Marker
                key={index}
                position={data}
                popupContent={renderPopupContent ? renderPopupContent(data) : null}
                color={renderMarkerColor ? renderMarkerColor(data) : null}
                />
            })}
        </MarkerClusterGroup>
        </>
    );
};

Markers.defaultProps = defaultProps;

export default Markers;