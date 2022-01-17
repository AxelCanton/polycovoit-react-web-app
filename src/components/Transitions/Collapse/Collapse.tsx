import { ICollapseOptionalProps, ICollapseProps } from "./collapse.type";
import { Collapse as MuiCollapse } from '@mui/material';

const defaultProps: ICollapseOptionalProps = {
    orientation: 'vertical',
    show: true
}

const Collapse = ({
    children,
    orientation,
    show
}: ICollapseProps) => {

    return (
        <MuiCollapse in={show} orientation={orientation}>
            {children}
        </MuiCollapse>
    );
};

Collapse.defaultProps = defaultProps;

export default Collapse;