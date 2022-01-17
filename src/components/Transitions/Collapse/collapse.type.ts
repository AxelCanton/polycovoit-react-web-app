import { Orientation } from "@mui/material";
import React from "react";

export interface ICollapseRequiredProps {
    children: React.ReactNode
}

export interface ICollapseOptionalProps {
    orientation: Orientation,
    show: boolean,
}

export interface ICollapseProps extends ICollapseRequiredProps, ICollapseOptionalProps {}

