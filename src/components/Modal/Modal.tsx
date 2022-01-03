// @ts-nocheck
// Some issues with the position property of the style object which is not recognized even though it works

import { Box, Modal as MuiModal } from "@mui/material";
import React from "react";
import { IModalProps } from "./modal.type";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const Modal = ({
    isVisible,
    close,
    children
}: IModalProps)=> {

    return (
        <MuiModal open={isVisible} onClose={close}>
            <Box sx={style}>
                {children}
            </Box>
        </MuiModal>
    );
}

export default Modal;