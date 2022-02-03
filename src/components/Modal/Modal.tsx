// Some issues with the position property of the style object which is not recognized even though it works

import { Box, Fade, IconButton, Modal as MuiModal } from "@mui/material";
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
    minWidth: '30%',
    outline: 0
};

const defaultProps: IModalOptionalProps = {
    width: 'auto',
    iconButton: true,
    timeout: 400
};

const Modal = ({
    isVisible,
    close,
    width,
    children,
    timeout,
    iconButton
}: IModalProps)=> {

    return (
        <MuiModal BackdropProps={{ timeout: timeout }} closeAfterTransition open={isVisible} onClose={close}>
            <Fade timeout={timeout} in={isVisible}>
                {/* @ts-ignore */}
                <Box sx={{
                    ...style,
                    width
                    }}>
                {iconButton && 
                <IconButton onClick={close}>
                    <KeyboardBackspaceIcon />
                </IconButton>
                }
                    {children}
                </Box>
            </Fade>
        </MuiModal>
    );
}

Modal.defaultProps = defaultProps;

export default Modal;