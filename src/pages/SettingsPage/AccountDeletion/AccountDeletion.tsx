import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import Button from "../../../components/Button/Button";
import Dialog from "../../../components/Dialog/Dialog";
import { deleteUserThunk } from "../../../thunks/UserThunk";
import { ButtonColor } from "../../../utils/enum/button.enum";
import { IAccountDeletionProps } from "./accountDeletion.type";

const AccountDeletion = ({ id }: IAccountDeletionProps) => {
    const [validateUnsubscribeVisible, setValidateUnsubscribeVisible] = useState(false);

    const dispatch = useAppDispatch();

    const showValidationMessage = () => setValidateUnsubscribeVisible(true);

    const hideValidationMessage = () => setValidateUnsubscribeVisible(false);

    const deleteAccount = () => {
        dispatch(deleteUserThunk(id));
    }

    return (
        <>
        <Button color={ButtonColor.error} onClick={showValidationMessage}>Se désinscrire</Button>
        <Dialog
        open={validateUnsubscribeVisible}
        onClose={hideValidationMessage}
        onAccept={deleteAccount}
        onDeny={hideValidationMessage}
        message="Cette action est définitive, vous n'aurez plus accès à l'application."
        title="Supprimer votre compte ?"
        />
        </>

    );
}

export default AccountDeletion;