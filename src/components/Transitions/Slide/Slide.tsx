import { Slide as MuiSlide } from '@mui/material';
import { WrapComponent } from '../WrapComponent';
import { ISlideOptionalProps, ISlideProps } from './slide.type';

const defaultProps: ISlideOptionalProps = {
    show: true,
    timeout: 1000
}

const Slide = ({
    children,
    containerRef,
    direction,
    show,
    timeout
}: ISlideProps) => {
    return (
        <MuiSlide in={show} timeout={timeout} direction={direction} container={containerRef.current}> 
            <WrapComponent>{ children }</WrapComponent>
        </MuiSlide>
    );
}

Slide.defaultProps = defaultProps;

export default Slide;