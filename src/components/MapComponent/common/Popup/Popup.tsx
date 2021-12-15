import { Popup as PopupLeaflet } from 'react-leaflet';
import { IPopupProps } from './popup.type';

const Popup = ({
    content
}: IPopupProps) => {
    return <PopupLeaflet>{content}</PopupLeaflet>
}

export default Popup;