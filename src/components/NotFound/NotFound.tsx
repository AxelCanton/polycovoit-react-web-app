import { Grid, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";
import Button from "../Button/Button";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router";
import { ButtonVariant } from "../../utils/enum/button.enum";

const NotFound = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ marginTop: 20, minHeight: '100vh' }}                >
            <Grid item xs={3}>
            <Typography 
                color={theme.palette.secondary.main} 
                variant={TypographyVariantEnum.h1}
                align="center">
                    404
                </Typography>
                <Typography 
                color={theme.palette.secondary.main} 
                variant={TypographyVariantEnum.h3}>
                    Page introuvable
                </Typography>
                <Box sx={{ marginTop: 10}}>
                <Button
                onClick={() => navigate('/')}
                startIcon={<ArrowBackIosNewIcon/>}
                variant={ButtonVariant.Text}
                >
                    Pour retrouver ton chemin
                </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default NotFound;