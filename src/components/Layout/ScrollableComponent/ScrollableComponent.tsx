import { IScrollableComponentProps } from './scrollableComponent.type';

const ScrollableComponent = ({
    children
}: IScrollableComponentProps) => {

    return (
        <div style={{
            overflowX: 'hidden',
            overflowY: 'auto',
            height: 'inherit'
        }}>
            {children}
        </div>
    );
};

export default ScrollableComponent;