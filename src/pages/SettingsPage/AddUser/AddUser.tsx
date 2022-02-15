import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonColor } from "../../../utils/enum/button.enum";
import { Button, Typography } from "@mui/material";
import { addUserThunk } from "../../../thunks/AdminThunk";
import AddUserForm from "./AddUserForm";
import { TypographyVariantEnum } from "../../../utils/enum/typography.variant.enum";
import CustomDivider from "../../../components/CustomDivider/CustomDivider";
import { ICreateUser } from "./addUser.types";

const AddUser = () => {
    const [addUserVisible, setAddUserVisible] = useState(false);
    const dispatch = useAppDispatch();

    const showForm = () => setAddUserVisible(true);
    const hideForm = () => setAddUserVisible(false);

    const createUser = (user:ICreateUser) => {
        dispatch(addUserThunk(user))
        setAddUserVisible(false)
    };

    return (
        <>
        <Button variant="outlined" color={ButtonColor.info} onClick={showForm} sx={{marginLeft:2}}>Ajouter un utilisateur</Button>
        <Dialog open={addUserVisible} onClose={hideForm}>
        <DialogTitle>
            <Typography variant={TypographyVariantEnum.h4}>
                Ajout d'un nouvel utilisateur
            </Typography>
        </DialogTitle>
        <CustomDivider />
        <DialogContent>
            <AddUserForm createUser={createUser} closeModal={hideForm}/>
        </DialogContent>
        </Dialog>
        </>

    );
}

export default AddUser;