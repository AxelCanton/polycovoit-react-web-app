import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonVariant } from "../../utils/enum/button.enum";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Forbidden = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    const changePage = () => {
        navigate('/')
    }
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
                    401
                </Typography>
                <Typography 
                color={theme.palette.secondary.main} 
                variant={TypographyVariantEnum.h3}>
                    Vous n'êtes pas autorisé à être ici!
                </Typography>
                <Box sx={{ marginTop: 10}}>
                <Button
                onClick={() => changePage()}
                startIcon={<ArrowBackIosNewIcon/>}
                variant={ButtonVariant.Text}
                >
                    Pour retrouver ton chemin
                </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Forbidden;