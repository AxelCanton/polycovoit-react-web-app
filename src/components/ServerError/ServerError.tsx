import { Grid, Typography, useTheme } from "@mui/material";
import { TypographyVariantEnum } from "../../utils/enum/typography.variant.enum";

const ServerError = () => {

    const theme = useTheme();

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
                    500
                </Typography>
                <Typography 
                color={theme.palette.secondary.main} 
                variant={TypographyVariantEnum.h3}>
                    Le serveur n'est pas disponible pour le moment, essayez plus tard
                </Typography>
            </Grid>
        </Grid>
    );
}

export default ServerError;