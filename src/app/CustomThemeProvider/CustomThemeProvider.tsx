import { createTheme, PaletteMode, ThemeProvider } from "@mui/material"
import React from "react";
import getDesignTokens from "../theme";
import { ICustomThemeProviderProps } from "./customThemeProvider.type";

const CustomThemeProvider = ({ children }: ICustomThemeProviderProps) => {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const colorMode = React.useMemo(
      () => ({
        // The dark mode switch would invoke this method
        toggleColorMode: () => {
          setMode((prevMode: PaletteMode) =>
            prevMode === 'light' ? 'dark' : 'light',
          );
        },
      }),
      [],
    );
  
    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider;