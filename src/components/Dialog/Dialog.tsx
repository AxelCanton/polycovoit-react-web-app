import { Dialog as MuiDialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '../Button/Button';
import { IDialogProps } from './dialog.type';

const defaultProps = {
    title: undefined,
    message: undefined,
    onDeny: () => {}
}

const Dialog = ({
    open,
    onClose,
    onAccept,
    onDeny,
    title,
    message
}: IDialogProps) => {
    
    const accept = () => {
        onClose();
        onAccept();
    }

    const deny = () => {
        onClose();
        onDeny();
    }

    return (
      <MuiDialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        {title && <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>}
        <DialogContent>
          {message && <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>}
        </DialogContent>
        <DialogActions>
          <Button onClick={deny}>Refuser</Button>
          <Button onClick={accept} autoFocus>Accepter</Button>
        </DialogActions>
      </MuiDialog>
    );
}

Dialog.defaultProps = defaultProps;

export default Dialog;