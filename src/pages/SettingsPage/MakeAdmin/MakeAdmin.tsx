import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonColor } from "../../../utils/enum/button.enum";
import { Button, TextField } from "@mui/material";
import { makeAdminThunk } from "../../../thunks/AdminThunk";

const MakeAdmin = () => {
    const [makeAdminVisible, setMakeAdminVisible] = useState(false);
    const [username, setUsername] = useState('');

    const dispatch = useAppDispatch();

    const showValidationMessage = () => setMakeAdminVisible(true);

    const hideValidationMessage = () => setMakeAdminVisible(false);

    const makeUserAdmin = () => {
        dispatch(makeAdminThunk(username));
        setMakeAdminVisible(false);
    };

    return (
        <>
        <Button variant="outlined" color={ButtonColor.info} onClick={showValidationMessage} sx={{marginLeft:2}}>Ajouter un admin</Button>
        <Dialog open={makeAdminVisible} onClose={hideValidationMessage}>
        <DialogTitle>Ajout d'un nouvel admin</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Rentrez le nom d'utilisateur de l'utilisateur que vous souhaitez faire administrateur.
                Un administrateur a accès à la page statistique et peut ajouter un nouveau compte admin ou utilisateur.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Nom utilisateur du nouvel admin"
                fullWidth
                variant="standard"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={hideValidationMessage}>Annuler</Button>
            <Button onClick={makeUserAdmin}>Valider</Button>
            </DialogActions>
        </Dialog>
        </>

    );
}

export default MakeAdmin;