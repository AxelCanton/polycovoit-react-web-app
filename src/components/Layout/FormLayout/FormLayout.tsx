import { Box, Typography } from "@mui/material";
import React from "react";
import CustomDivider from "../../CustomDivider/CustomDivider";
import { IFormLayoutOptionalProps, IFormLayoutProps } from "./formLayout.type";

const defaultProps: IFormLayoutOptionalProps = {
    title: undefined,
    footer: null
}


const FormLayout = ({
    title,
    footer,
    children
}: IFormLayoutProps) => {

    return (
        <>
        {title ? 
        <>
            <Typography variant='h4'>{title}</Typography>
            <CustomDivider spacing={2}/>
        </> 
        : <></>}

        {Array.isArray(children) ? children.map((child, index) => {
            return <Box key={index} sx={{
                marginTop: 5,
                marginBottom: 5
            }}>
                {child}
            </Box>;
        })
        :
        children
        }

        {footer ? 
        <>
            <CustomDivider/>
            {footer}
        </> 
        : <></>}
        </>
    );
}

FormLayout.defaultProps = defaultProps;

export default FormLayout;