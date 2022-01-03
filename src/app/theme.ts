import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        main: '#029bde',
      },
      secondary: {
        main: '#ffffff',
      },
      error: {
        main: '#f44336',
      },
    }
  });



export default getDesignTokens;