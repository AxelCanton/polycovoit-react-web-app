import React from "react";
import { Direction } from "../../../utils/enum/direction.enum";

export interface ISlideRequiredProps {
    children: React.ReactNode,
    containerRef: React.MutableRefObject<Element | undefined>,
    direction: Direction
}

export interface ISlideOptionalProps {
    show: boolean,
    timeout: number
}

export interface ISlideProps extends ISlideRequiredProps, ISlideOptionalProps {}

