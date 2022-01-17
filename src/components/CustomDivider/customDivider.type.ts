export enum OrientationDividerEnum {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical'
}

export interface ICustomDividerRequiredProps {

}

export interface ICustomDividerOptionalProps {
    content?: string,
    orientation: OrientationDividerEnum,
    spacing: number,
    spacingDown?: number
}

export interface ICustomDividerProps extends ICustomDividerRequiredProps, ICustomDividerOptionalProps {}