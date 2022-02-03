import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonColor } from "../../../utils/enum/button.enum";
import { Button, TextField, Typography } from "@mui/material";
import { addUserThunk, makeAdminThunk, verifyAdminThunk } from "../../../thunks/AdminThunk";
import AddUserForm from "./AddUserForm";
import { TypographyVariantEnum } from "../../../utils/enum/typography.variant.enum";
import CustomDivider from "../../../components/CustomDivider/CustomDivider";
import { ICreateUser } from "./addUser.types";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [addUserVisible, setAddUserVisible] = useState(false);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const showForm = () => {      
        verifyAdmin();

        if(isAdmin) {
            setAddUserVisible(true);
        }
        else {
            navigate('/forbidden')
        }
    }
    const hideForm = () => setAddUserVisible(false);

    const createUser = (user:ICreateUser) => {
        dispatch(addUserThunk(user))
        setAddUserVisible(false)
    }

    const verifyAdmin = useCallback(() => dispatch(verifyAdminThunk()), [dispatch])
    const isAdmin = useAppSelector((state) => state.adminReducer.isAdmin)

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