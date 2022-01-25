import { IUser } from "../../interfaces/user.interface";
import { PieChartData } from "../../slices/AdminSlice";

export interface IBarChartRequiredProps {
    reservations: IReservationForChart[],
    specialityColors: (datum: string) => string
}

export interface IBarChartOptionalProps {
    period: string,
}

export interface IBarChartProps extends IBarChartRequiredProps, IBarChartOptionalProps {}

export interface ICircleChartRequiredProps {
    users: IUser[],
}

export interface ICircleChartOptionalProps {
}

export interface ICircleChartProps extends ICircleChartRequiredProps, ICircleChartOptionalProps {}

export interface IPieChartRequiredProps {
    usersBySpeciality: PieChartData[],
    specialityColors: (datum: string) => string
}

export interface IPieChartOptionalProps {
}

export interface IPieChartProps extends IPieChartRequiredProps, IPieChartOptionalProps {}

export interface IReservationForChart{
    id: number;
    date: Date;
    speciality: string;
}