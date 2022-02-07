import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import ModalAddLocation from "../ModalAddLocation/ModalAddLocation";

const AddLocation = () => {
    const [locationFormVisible, setLocationFormVisible] = useState(false);

    const showLocationForm = () => setLocationFormVisible(true);

    return (
        <>
        <Button onClick={showLocationForm}>Ajouter un code postal</Button>
        <ModalAddLocation isVisible={locationFormVisible} setIsVisible={setLocationFormVisible}/>
        </>
        );
}

export default AddLocation;