import { Popup as PopupLeaflet } from 'react-leaflet';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { IPopupProps } from './popup.type';

const Popup = ({
    content
}: IPopupProps) => {
    const { width, height } = useWindowDimensions();
    return <PopupLeaflet maxWidth={width-10} maxHeight={height-10}>{content}</PopupLeaflet>
}

export default Popup;