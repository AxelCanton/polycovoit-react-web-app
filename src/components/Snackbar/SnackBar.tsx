import { Alert, Snackbar as MuiSnackBar } from "@mui/material";
import { ISnackBarProps } from "./snackBar.type";

const AUTO_HIDE_MS = 4000;

const SnackBar = ({
    open,
    onClose,
    message,
    severity
}: ISnackBarProps) => {
    return (
        <MuiSnackBar
            open={open}
            onClose={onClose}
            autoHideDuration={AUTO_HIDE_MS}
        >
            <Alert severity={severity} onClose={onClose}>
                {message}
            </Alert>
        </MuiSnackBar>
    )
}

export default SnackBar;