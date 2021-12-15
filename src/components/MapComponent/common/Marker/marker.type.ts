import React from "react";
import { ILatLng } from "../../../../interfaces/location.interface";

export interface IMarkerRequiredProps {
    position: ILatLng
}

export interface IMarkerOptionalProps {
    popupContent?: React.ReactNode
}

export interface IMarkerProps extends IMarkerOptionalProps, IMarkerRequiredProps {}