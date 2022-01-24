import { LeafletEventHandlerFn } from "leaflet";

export interface IMapEventsRequiredProps {
}

export interface IMapEventsOptionalProps {
    onClick: LeafletEventHandlerFn,
    onMoveEnd: LeafletEventHandlerFn
}

export interface IMapEventsProps extends IMapEventsOptionalProps, IMapEventsRequiredProps {}