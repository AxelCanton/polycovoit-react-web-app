// @ts-nocheck
// Some issues with the position property of the style object which is not recognized even though it works

import { Box, IconButton, Modal as MuiModal } from "@mui/material";
import React from "react";
import { IModalOptionalProps, IModalProps } from "./modal.type";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    minWidth: '30%'
};

const defaultProps: IModalOptionalProps = {
    width: 'auto'
}

const Modal = ({
    isVisible,
    close,
    width,
    children
}: IModalProps)=> {

    return (
        <MuiModal open={isVisible} onClose={close}>
            <Box sx={{
                ...style,
                width
                }}>
            <IconButton onClick={close}>
                <KeyboardBackspaceIcon />
            </IconButton>
                {children}
            </Box>
        </MuiModal>
    );
}

Modal.defaultProps = defaultProps;

export default Modal;