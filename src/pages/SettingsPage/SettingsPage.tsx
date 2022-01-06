import { display } from "@mui/system";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import Button from "../../components/Button/Button";
import { fetchUserThunk } from "../../thunks/UserThunk";
import ModalAddLocation from "./ModalAddLocation/ModalAddLocation"

const SettingsPage = () => {
    const [locationFormVisible, setLocationFormVisible] = useState(false);

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        // dispatch(fetchUserThunk())
    }, []);

    const showLocationForm = () => setLocationFormVisible(true);

    return (
        <>
        <Button onClick={showLocationForm}>Ajouter une addresse</Button>
        <ModalAddLocation isVisible={locationFormVisible} setIsVisible={setLocationFormVisible} />
        </>
    );
}

export default SettingsPage;