import { Container } from "@mui/material";
import { ICenteredLayoutProps } from "./centeredLayout.type";

const defaultProps = {
    width: '70%'
}

const sx = {
    marginY: 3,
}

const CenteredLayout = ({ width, children }: ICenteredLayoutProps) => {

    return (
        <Container sx={{
            ...sx,
            width
            }} maxWidth={false}>
                {children}
        </Container>
    );
}

CenteredLayout.defaultProps = defaultProps;

export default CenteredLayout;