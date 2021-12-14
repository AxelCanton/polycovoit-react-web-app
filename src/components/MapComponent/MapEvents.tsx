import { useMapEvents } from "react-leaflet";
import { IMapEventsOptionalProps, IMapEventsProps } from "./mapEvents.type";

const defaultProps: IMapEventsOptionalProps = {
    onClick: () => {},
    onMoveEnd: () => {}
}

const MapEvents = ({
    onClick,
    onMoveEnd
}: IMapEventsProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mapEvents = useMapEvents({
        click: onClick,
        moveend: onMoveEnd
    });
    return null;
}

MapEvents.defaultProps = defaultProps;

export default MapEvents;